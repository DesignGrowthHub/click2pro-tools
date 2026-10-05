// Media layer. Resolves images for each slot from (in priority order):
//   1. hand-curated folders   assets/projects/<slug>/, assets/brand/, assets/press/, assets/instagram/
//   2. the live-site pull     assets/manifest.json (scripts/fetch-live-assets.mjs)
// and publishes them into the built site. Originals are copied byte-for-byte
// (full HD, never re-encoded); smaller same-format renditions are added to
// srcset for phones when ImageMagick is available. With no image available a
// slot renders a labelled placeholder at the right aspect ratio.
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { imageSize } from "../../scripts/lib/image-size.mjs";
import { esc, slugify } from "./html.mjs";

const IMG_RE = /\.(jpe?g|png|webp|avif|gif|svg)$/i;
const PHOTO_RE = /\.(jpe?g|png|webp|avif)$/i;
const RENDITION_WIDTHS = [640, 1280, 1920, 2560];

const naturalSort = (a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });
const norm = (s) => slugify(String(s || "").replace(/[-–|—].*paul lauren.*$/i, ""));

function listFiles(dir, re = IMG_RE) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listFiles(p, re));
    else if (re.test(entry.name) && !entry.name.startsWith(".")) out.push(p);
  }
  return out.sort(naturalSort);
}

function findImageMagick() {
  for (const bin of ["magick", "convert"]) {
    try {
      execFileSync(bin, ["-version"], { stdio: "ignore" });
      return bin;
    } catch {
      /* not installed */
    }
  }
  return null;
}

export function createMedia({ root, outDir }) {
  const assetsDir = path.join(root, "assets");
  const manifestFile = path.join(assetsDir, "manifest.json");
  const manifest = fs.existsSync(manifestFile) ? JSON.parse(fs.readFileSync(manifestFile, "utf8")) : null;
  const magick = findImageMagick();
  const records = new Map();
  // Cache of what each file under site/media was generated from, so a
  // rendition is rebuilt whenever its source photo changes.
  const cacheFile = path.join(root, ".cache", "media.json");
  let cache = {};
  try {
    cache = JSON.parse(fs.readFileSync(cacheFile, "utf8"));
  } catch {
    cache = {};
  }
  const rel = (p) => path.relative(root, p).replace(/\\/g, "/");
  const sourceStamp = (abs) => {
    const st = fs.statSync(abs);
    return `${rel(abs)}|${st.size}|${Math.round(st.mtimeMs)}`;
  };
  const fresh = (dest, abs) => fs.existsSync(dest) && cache[rel(dest)] === sourceStamp(abs);
  const remember = (dest, abs) => {
    cache[rel(dest)] = sourceStamp(abs);
  };
  const published = new Map();
  const usedNames = new Set();
  let pageImages = null;

  function record(abs, extra = {}) {
    if (!abs || !fs.existsSync(abs)) return null;
    if (records.has(abs)) return { ...records.get(abs), ...extra };
    const dims = imageSize(abs) || {};
    const rec = { abs, width: dims.width || 0, height: dims.height || 0, type: dims.type, bytes: fs.statSync(abs).size, alt: "" };
    records.set(abs, rec);
    return { ...rec, ...extra };
  }

  const fromManifest = (id) => {
    const a = manifest?.assets?.[id];
    return a && a.kind === "image" ? record(path.join(root, a.file), { alt: a.alt || "" }) : null;
  };

  // --- live page matching ---------------------------------------------------
  const livePages = manifest?.pages || {};
  function livePageFor(project) {
    const byPath = livePages[`/${project.slug}/`];
    if (byPath) return { path: `/${project.slug}/`, page: byPath };
    const want = norm(project.title);
    for (const [p, page] of Object.entries(livePages)) {
      const h1 = page.headings?.find((h) => h.level === 1)?.text;
      if ([norm(page.title), norm(h1), norm(p)].includes(want)) return { path: p, page };
    }
    // the portfolio grid's link text is the most reliable title source
    for (const page of Object.values(livePages)) {
      const link = page.linkTexts?.find((l) => norm(l.text) === want && livePages[l.path]);
      if (link) return { path: link.path, page: livePages[link.path] };
    }
    return null;
  }

  const isGalleryImage = (r) => r && PHOTO_RE.test(r.abs) && r.width >= 600 && r.height >= 400;

  function projectImages(project) {
    const manual = listFiles(path.join(assetsDir, "projects", project.slug), PHOTO_RE).map((f) => record(f));
    if (manual.length) return manual.filter(Boolean);
    const live = livePageFor(project);
    if (!live) return [];
    return live.page.media.map(fromManifest).filter(isGalleryImage);
  }

  function pageImagesFor(livePath) {
    const page = livePages[livePath];
    return page ? page.media.map(fromManifest).filter(Boolean) : [];
  }

  function instagram() {
    const dir = path.join(assetsDir, "instagram");
    const selection = path.join(dir, "selection.txt");
    const all = listFiles(dir, PHOTO_RE);
    let files;
    if (fs.existsSync(selection)) {
      const wanted = fs.readFileSync(selection, "utf8").split("\n").map((l) => l.trim()).filter((l) => l && !l.startsWith("#"));
      files = wanted.map((w) => all.find((f) => f.endsWith(w))).filter(Boolean);
    } else {
      files = all.slice().sort((a, b) => naturalSort(path.basename(b), path.basename(a)));
    }
    return files.map((f) => record(f)).filter((r) => r && r.width >= 600);
  }

  function logo() {
    const manual = listFiles(path.join(assetsDir, "brand")).find((f) => /logo/i.test(path.basename(f)) && !/light|white|mark/i.test(path.basename(f)));
    if (manual) return record(manual);
    const ids = livePages["/"]?.logoCandidates || [];
    for (const id of ids) {
      const a = manifest.assets[id];
      if (a && /\.(svg|png|webp)$/i.test(a.file) && (a.width || 0) >= 120 && !/icon|favicon|cropped-/i.test(a.file)) {
        return record(path.join(root, a.file));
      }
    }
    return null;
  }

  function logoLight() {
    const f = listFiles(path.join(assetsDir, "brand")).find((x) => /logo.*(light|white)/i.test(path.basename(x)));
    return f ? record(f) : null;
  }

  function pressLogos() {
    return listFiles(path.join(assetsDir, "press")).map((f) => ({
      name: path.basename(f).replace(/\.\w+$/, "").replace(/[-_]+/g, " ").replace(/^\d+\s*/, ""),
      rec: record(f),
    }));
  }

  function heroVideo() {
    const vdir = path.join(assetsDir, "video");
    const pick = (name) => (fs.existsSync(path.join(vdir, name)) ? path.join(vdir, name) : null);
    const landscape = pick("hero-landscape.mp4") || pick("hero.mp4");
    let liveVideo = null;
    if (!landscape && manifest) {
      const id = (livePages["/"]?.media || []).find((m) => manifest.assets[m]?.kind === "video");
      if (id) liveVideo = path.join(root, manifest.assets[id].file);
    }
    const src = landscape || liveVideo;
    if (!src) return null;
    const portrait = pick("hero-portrait.mp4");
    const webm = (mp4) => (mp4 && fs.existsSync(mp4.replace(/\.mp4$/, ".webm")) ? publishFile(mp4.replace(/\.mp4$/, ".webm"), "video") : null);
    const poster = pick("hero-landscape-poster.jpg") || pick("hero-poster.jpg");
    const posterPortrait = pick("hero-portrait-poster.jpg");
    return {
      landscape: publishFile(src, "video"),
      portrait: portrait ? publishFile(portrait, "video") : null,
      landscapeWebm: webm(src),
      portraitWebm: webm(portrait),
      poster: poster ? record(poster) : null,
      posterPortrait: posterPortrait ? record(posterPortrait) : null,
      fromLive: Boolean(liveVideo),
    };
  }

  // --- publishing -------------------------------------------------------------
  // One canonical public URL per source file: the first publish wins (the
  // build publishes project galleries first, so photos live under
  // /media/projects/<slug>/ with descriptive names), later uses reuse it.
  function publishFile(abs, folder, niceName) {
    const key = `file:${abs}`;
    if (published.has(key)) return published.get(key);
    const ext = path.extname(abs).toLowerCase().replace(".jpeg", ".jpg");
    let base = slugify(niceName || path.basename(abs, path.extname(abs))) || "image";
    let name = `${base}${ext}`;
    for (let i = 2; usedNames.has(`${folder}/${name}`); i++) name = `${base}-${i}${ext}`;
    usedNames.add(`${folder}/${name}`);
    const rel = `media/${folder}/${name}`;
    const dest = path.join(outDir, rel);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    if (!fresh(dest, abs)) {
      fs.copyFileSync(abs, dest);
      remember(dest, abs);
    }
    const url = `/${rel}`;
    published.set(key, url);
    return url;
  }

  function renditions(rec, url) {
    const set = [];
    if (!magick || !/\.(jpe?g|png)$/i.test(rec.abs) || !rec.width) return set;
    const dest = path.join(outDir, url.slice(1));
    for (const w of RENDITION_WIDTHS) {
      if (w >= rec.width * 0.9) continue;
      const out = dest.replace(/(\.\w+)$/, `-${w}w$1`);
      if (!fresh(out, rec.abs)) {
        const args = [rec.abs, "-resize", `${w}x`, "-quality", "84", "-interlace", "Plane"];
        if (/\.jpe?g$/i.test(rec.abs)) args.push("-sampling-factor", "4:2:0");
        try {
          execFileSync(magick, [...args, out], { stdio: "ignore" });
          remember(out, rec.abs);
        } catch {
          continue;
        }
      }
      set.push({ url: url.replace(/(\.\w+)$/, `-${w}w$1`), w });
    }
    return set;
  }

  function publish(rec, { folder = "images", name } = {}) {
    const url = publishFile(rec.abs, folder, name);
    const key = `srcset:${url}`;
    if (!published.has(key)) {
      const set = renditions(rec, url);
      const srcset = rec.width && set.length ? [...set.map((s) => `${s.url} ${s.w}w`), `${url} ${rec.width}w`].join(", ") : "";
      // Default src: a ~1920 rendition keeps first paint fast; srcset still
      // offers the untouched original to large/retina screens.
      const src = set.find((s) => s.w === 1920)?.url || set.at(-1)?.url || url;
      published.set(key, { src, original: url, srcset, renditions: set.map((s) => s.url) });
    }
    return published.get(key);
  }

  // --- rendering --------------------------------------------------------------
  function placeholder({ ratio = 3 / 2, label = "", cls = "", alt = "" }) {
    return `<div class="ph ${cls}" style="--ratio:${ratio.toFixed(4)}" role="img" aria-label="${esc(alt || label)}"><span class="ph__label">${esc(label)}</span></div>`;
  }

  function img(rec, { alt = "", sizes = "100vw", cls = "", priority = false, folder, name, ratio, label, caption } = {}) {
    if (!rec) return placeholder({ ratio, label: label || alt, cls, alt });
    const pub = publish(rec, { folder, name });
    if (pageImages) pageImages.push({ loc: pub.original, title: caption || alt });
    const attrs = [
      `src="${pub.src}"`,
      pub.srcset && `srcset="${pub.srcset}"`,
      pub.srcset && `sizes="${sizes}"`,
      rec.width && `width="${rec.width}"`,
      rec.height && `height="${rec.height}"`,
      `alt="${esc(rec.alt || alt)}"`,
      priority ? `fetchpriority="high"` : `loading="lazy"`,
      `decoding="async"`,
      cls && `class="${cls}"`,
      `data-full="${pub.original}"`,
    ].filter(Boolean);
    return `<img ${attrs.join(" ")}>`;
  }

  return {
    manifest,
    hasLive: Boolean(manifest),
    livePageFor,
    projectImages,
    pageImagesFor,
    instagram,
    logo,
    logoLight,
    pressLogos,
    heroVideo,
    record,
    publish,
    publishFile,
    img,
    placeholder,
    ratioOf: (rec, fallback = 3 / 2) => (rec?.width && rec?.height ? rec.width / rec.height : fallback),
    beginPage() {
      pageImages = [];
    },
    endPage() {
      const list = pageImages || [];
      pageImages = null;
      return [...new Map(list.map((i) => [i.loc, i])).values()];
    },
    // First public URL an original was published under (for old-URL redirects).
    publishedUrl(absPath) {
      return published.get(`file:${absPath}`) || null;
    },
    // Every file written under site/ this build (originals + renditions), for pruning.
    publishedFiles() {
      const files = [];
      for (const [k, v] of published) {
        if (k.startsWith("srcset:")) files.push(...v.renditions.map((u) => u.slice(1)));
        else files.push(v.slice(1));
      }
      return files;
    },
    saveCache() {
      const live = {};
      for (const [dest, stamp] of Object.entries(cache)) if (fs.existsSync(path.join(root, dest))) live[dest] = stamp;
      fs.mkdirSync(path.dirname(cacheFile), { recursive: true });
      fs.writeFileSync(cacheFile, JSON.stringify(live));
    },
    stats: () => ({ images: records.size, published: [...published.keys()].filter((k) => k.startsWith("file:")).length, imageMagick: magick }),
  };
}
