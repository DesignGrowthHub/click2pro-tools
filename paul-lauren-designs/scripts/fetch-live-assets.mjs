#!/usr/bin/env node
// Pulls every image, video, logo and press asset from the live
// paullaurendesigns.com site at its ORIGINAL uploaded resolution (no
// thumbnails, no "-1024x683" crops, no "-scaled" versions, no re-encoding),
// records true pixel dimensions, and writes assets/manifest.json, which the
// site build reads.
//
//   node scripts/fetch-live-assets.mjs            # crawl + download
//   SITE_URL=https://staging.example.com node scripts/fetch-live-assets.mjs
//
// Behind a corporate proxy on Node >= 22.21 run with NODE_USE_ENV_PROXY=1.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { imageSize } from "./lib/image-size.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const BASE = (process.env.SITE_URL || "https://paullaurendesigns.com").replace(/\/$/, "");
const HOST = new URL(BASE).host.replace(/^www\./, "");
const OUT_DIR = path.join(ROOT, "assets/live");
const MANIFEST = path.join(ROOT, "assets/manifest.json");
const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36";
const MEDIA_RE = /\.(jpe?g|png|webp|gif|avif|svg|mp4|webm|mov|m4v)$/i;
const SEED_PATHS = ["/", "/portfolio/", "/studio/", "/featured/", "/contact/"];
const SKIP_PATH_RE = /\/(wp-admin|wp-login|wp-json|feed|tag|category|author|comments)\b|\?|#|\.(xml|pdf|zip)$/i;

const log = (...a) => console.log("[fetch]", ...a);

async function request(url, { method = "GET", as = "text" } = {}) {
  let lastErr;
  for (let attempt = 0; attempt < 4; attempt++) {
    try {
      const res = await fetch(url, { method, redirect: "follow", headers: { "user-agent": UA, accept: "*/*" } });
      if (res.status === 429 || res.status >= 500) throw new Error(`HTTP ${res.status}`);
      if (method === "HEAD") return res;
      if (!res.ok) return { ok: false, status: res.status, res };
      const body = as === "buffer" ? Buffer.from(await res.arrayBuffer()) : as === "json" ? await res.json() : await res.text();
      return { ok: true, status: res.status, res, body };
    } catch (err) {
      lastErr = err;
      await new Promise((r) => setTimeout(r, 1000 * 2 ** attempt));
    }
  }
  throw lastErr;
}

const isSameSite = (u) => {
  try {
    return new URL(u).host.replace(/^www\./, "") === HOST;
  } catch {
    return false;
  }
};

const decodeEntities = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&#0?38;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&#8217;|&rsquo;/g, "'")
    .replace(/&#8216;|&lsquo;/g, "'")
    .replace(/&#8220;|&#8221;|&ldquo;|&rdquo;/g, '"')
    .replace(/&#8211;|&ndash;/g, "–")
    .replace(/&#8212;|&mdash;/g, "—")
    .replace(/&nbsp;|&#160;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");

const stripTags = (s) => decodeEntities(s.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();

function absolute(u, pageUrl) {
  try {
    return new URL(decodeEntities(u.trim()).replace(/\\\//g, "/"), pageUrl).href;
  } catch {
    return null;
  }
}

// Candidate URLs for the original upload, best first.
function originalCandidates(url, mediaLib) {
  const out = [];
  const known = mediaLib.get(stripSize(url)) || mediaLib.get(url);
  if (known?.original) out.push(known.original);
  if (known?.source) out.push(known.source);
  const clean = url.split("?")[0];
  const unsized = stripSize(clean);
  out.push(unsized.replace(/-scaled(\.\w+)$/i, "$1"), unsized, clean);
  // Jetpack / Photon CDN: i0.wp.com/host/path.jpg?w=...
  const photon = clean.match(/^https?:\/\/i\d\.wp\.com\/(.+)$/);
  if (photon) out.push(`https://${photon[1]}`);
  return [...new Set(out)];
}

const stripSize = (u) => u.split("?")[0].replace(/-\d{2,5}x\d{2,5}(?=\.\w+$)/, "").replace(/-e\d{10,}(?=\.\w+$)/, "");

function extractPage(html, pageUrl) {
  const media = [];
  const push = (u, from) => {
    const abs = absolute(u, pageUrl);
    if (abs && MEDIA_RE.test(abs.split("?")[0])) media.push({ url: abs, from });
  };
  // srcset/data-srcset: keep the widest candidate
  for (const m of html.matchAll(/(?:data-)?(?:lazy-)?srcset=["']([^"']+)["']/gi)) {
    const best = m[1]
      .split(",")
      .map((p) => p.trim().split(/\s+/))
      .map(([u, w]) => ({ u, w: parseInt(w, 10) || 0 }))
      .sort((a, b) => b.w - a.w)[0];
    if (best) push(best.u, "srcset");
  }
  for (const m of html.matchAll(/\s(?:src|data-src|data-lazy-src|data-bg|data-background|poster|href|content)=["']([^"']+)["']/gi)) push(m[1], "attr");
  for (const m of html.matchAll(/url\(\s*['"]?([^'")]+)['"]?\s*\)/gi)) push(m[1], "css");
  // JSON blobs (Elementor/Divi settings, sliders) with escaped slashes
  for (const m of html.matchAll(/https?:\\?\/\\?\/[^"'\s<>)]+?\.(?:jpe?g|png|webp|gif|avif|svg|mp4|webm|mov|m4v)/gi)) push(m[0], "json");

  const seen = new Set();
  const ordered = media.filter(({ url }) => {
    const key = stripSize(url).replace(/-scaled(\.\w+)$/i, "$1");
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  const title = stripTags((html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [, ""])[1]);
  const metaDescription = decodeEntities((html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i) || [, ""])[1]);
  const headings = [...html.matchAll(/<h([1-4])[^>]*>([\s\S]*?)<\/h\1>/gi)].map((m) => ({ level: +m[1], text: stripTags(m[2]) })).filter((h) => h.text);
  const paragraphs = [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)].map((m) => stripTags(m[1])).filter((t) => t.length > 30);
  const links = [...html.matchAll(/<a\s[^>]*href=["']([^"'#]+)["'][^>]*>([\s\S]*?)<\/a>/gi)]
    .map((m) => ({ href: absolute(m[1], pageUrl), text: stripTags(m[2]) }))
    .filter((l) => l.href);
  const embeds = [...html.matchAll(/<iframe[^>]+src=["']([^"']+)["']/gi)].map((m) => absolute(m[1], pageUrl)).filter((u) => /vimeo|youtube|youtu\.be/i.test(u || ""));

  // Logo: <img> whose class/alt/src mentions "logo", or the first image inside <header>
  const logoImgs = [...html.matchAll(/<img\b[^>]*>/gi)]
    .map((m) => m[0])
    .filter((tag) => /logo/i.test(tag))
    .map((tag) => (tag.match(/\s(?:data-)?src=["']([^"']+)["']/i) || [])[1])
    .filter(Boolean)
    .map((u) => absolute(u, pageUrl));
  const header = (html.match(/<header[\s\S]*?<\/header>/i) || [""])[0];
  const headerImg = (header.match(/<img\b[^>]*\s(?:data-)?src=["']([^"']+)["']/i) || [])[1];
  const icons = [...html.matchAll(/<link[^>]+rel=["'][^"']*icon[^"']*["'][^>]*>/gi)]
    .map((m) => (m[0].match(/href=["']([^"']+)["']/i) || [])[1])
    .filter(Boolean)
    .map((u) => absolute(u, pageUrl));

  return {
    title,
    metaDescription,
    headings,
    paragraphs,
    links,
    embeds,
    media: ordered,
    logoCandidates: [...new Set([...logoImgs, headerImg && absolute(headerImg, pageUrl)].filter(Boolean))],
    icons: [...new Set(icons)],
  };
}

async function loadMediaLibrary() {
  const lib = new Map();
  for (let page = 1; page < 50; page++) {
    let r;
    try {
      r = await request(`${BASE}/wp-json/wp/v2/media?per_page=100&page=${page}&_fields=id,source_url,media_details,alt_text,title,mime_type,post`, { as: "json" });
    } catch {
      break;
    }
    if (!r.ok || !Array.isArray(r.body) || !r.body.length) break;
    for (const m of r.body) {
      const source = m.source_url;
      if (!source) continue;
      const details = m.media_details || {};
      const original = details.original_image ? source.replace(/[^/]+$/, details.original_image) : source;
      const entry = { id: m.id, source, original, alt: m.alt_text || "", title: stripTags(m.title?.rendered || ""), mime: m.mime_type, width: details.width, height: details.height, post: m.post };
      lib.set(source, entry);
      lib.set(stripSize(source), entry);
      lib.set(original, entry);
    }
    log(`media library page ${page}: ${r.body.length} items`);
    if (r.body.length < 100) break;
  }
  return lib;
}

async function discoverPages() {
  const paths = new Set(SEED_PATHS);
  const fromSitemap = async (url) => {
    try {
      const r = await request(url);
      if (!r.ok) return;
      const locs = [...r.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => decodeEntities(m[1]));
      for (const loc of locs) {
        if (/\.xml$/i.test(loc)) await fromSitemap(loc);
        else if (isSameSite(loc)) paths.add(new URL(loc).pathname);
      }
    } catch {
      /* no sitemap */
    }
  };
  for (const sm of ["/wp-sitemap.xml", "/sitemap_index.xml", "/sitemap.xml"]) await fromSitemap(BASE + sm);
  for (const type of ["pages", "posts"]) {
    try {
      const r = await request(`${BASE}/wp-json/wp/v2/${type}?per_page=100&_fields=link`, { as: "json" });
      if (r.ok && Array.isArray(r.body)) r.body.forEach((p) => isSameSite(p.link) && paths.add(new URL(p.link).pathname));
    } catch {
      /* REST disabled */
    }
  }
  return [...paths].filter((p) => !SKIP_PATH_RE.test(p));
}

function localPathFor(url) {
  const u = new URL(url);
  let p = decodeURIComponent(u.pathname).replace(/^\/wp-content\/uploads\//, "uploads/").replace(/^\/+/, "");
  if (!isSameSite(url)) p = `external/${u.host}/${p}`;
  return path.join(OUT_DIR, p.replace(/[^\w./-]+/g, "-"));
}

const downloaded = new Map(); // requested url -> record

async function download(url, mediaLib) {
  if (downloaded.has(url)) return downloaded.get(url);
  let record = null;
  for (const candidate of originalCandidates(url, mediaLib)) {
    try {
      const file = localPathFor(candidate);
      if (!fs.existsSync(file)) {
        const r = await request(candidate, { as: "buffer" });
        const type = r.res?.headers.get("content-type") || "";
        if (!r.ok || !(type.startsWith("image/") || type.startsWith("video/") || type.includes("svg") || type.includes("octet-stream"))) continue;
        fs.mkdirSync(path.dirname(file), { recursive: true });
        fs.writeFileSync(file, r.body);
      }
      const isVideo = /\.(mp4|webm|mov|m4v)$/i.test(file);
      const dims = isVideo ? null : imageSize(file);
      const lib = mediaLib.get(stripSize(url)) || mediaLib.get(candidate);
      record = {
        id: path.relative(OUT_DIR, file).replace(/\\/g, "/"),
        kind: isVideo ? "video" : "image",
        file: path.relative(ROOT, file).replace(/\\/g, "/"),
        url: candidate,
        requested: url,
        width: dims?.width || null,
        height: dims?.height || null,
        bytes: fs.statSync(file).size,
        alt: lib?.alt || "",
        title: lib?.title || "",
        original: candidate !== url,
      };
      break;
    } catch (err) {
      log(`  ! ${candidate}: ${err.message}`);
    }
  }
  downloaded.set(url, record);
  return record;
}

async function main() {
  log(`source: ${BASE}`);
  const mediaLib = await loadMediaLibrary();
  log(`media library: ${new Set([...mediaLib.values()].map((m) => m.id)).size} items`);

  const queue = await discoverPages();
  const pages = {};
  const done = new Set();
  while (queue.length) {
    const p = queue.shift();
    if (done.has(p)) continue;
    done.add(p);
    const url = BASE + p;
    let r;
    try {
      r = await request(url);
    } catch (err) {
      log(`! ${p}: ${err.message}`);
      continue;
    }
    if (!r.ok) {
      log(`! ${p}: HTTP ${r.status}`);
      continue;
    }
    const data = extractPage(r.body, url);
    // follow internal links one level from the portfolio / home pages (project pages)
    if (["/", "/portfolio/"].includes(p)) {
      for (const l of data.links) {
        if (!isSameSite(l.href)) continue;
        const lp = new URL(l.href).pathname;
        if (!SKIP_PATH_RE.test(lp) && !MEDIA_RE.test(lp) && !done.has(lp)) queue.push(lp);
      }
    }
    const items = [];
    for (const m of data.media) {
      const rec = await download(m.url, mediaLib);
      if (rec) items.push(rec.id);
    }
    pages[p] = {
      url,
      title: data.title,
      metaDescription: data.metaDescription,
      headings: data.headings,
      paragraphs: data.paragraphs,
      embeds: data.embeds,
      media: [...new Set(items)],
      linkTexts: data.links.filter((l) => isSameSite(l.href)).map((l) => ({ path: new URL(l.href).pathname, text: l.text })).filter((l) => l.text),
    };
    if (p === "/") {
      pages[p].logoCandidates = [];
      for (const u of [...data.logoCandidates, ...data.icons]) {
        const rec = await download(u, mediaLib);
        if (rec) pages[p].logoCandidates.push(rec.id);
      }
    }
    log(`${p} — ${items.length} media`);
  }

  // Everything in the media library that no page referenced (older uploads,
  // gallery originals behind lightboxes) is still worth having for curation.
  const unreferenced = [];
  for (const entry of new Set(mediaLib.values())) {
    if (!/^image\/|^video\//.test(entry.mime || "")) continue;
    const rec = await download(entry.original || entry.source, mediaLib);
    if (rec) unreferenced.push(rec.id);
  }

  const assets = {};
  for (const rec of downloaded.values()) if (rec) assets[rec.id] = rec;
  const manifest = {
    generatedAt: new Date().toISOString(),
    source: BASE,
    pages,
    library: [...new Set(unreferenced)],
    assets,
  };
  fs.mkdirSync(path.dirname(MANIFEST), { recursive: true });
  fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2));

  const imgs = Object.values(assets).filter((a) => a.kind === "image");
  const vids = Object.values(assets).filter((a) => a.kind === "video");
  const totalMB = (Object.values(assets).reduce((s, a) => s + a.bytes, 0) / 1048576).toFixed(1);
  log(`done: ${Object.keys(pages).length} pages, ${imgs.length} images, ${vids.length} videos, ${totalMB} MB`);
  log(`largest: ${imgs.sort((a, b) => b.width * b.height - a.width * a.height).slice(0, 5).map((a) => `${a.id} ${a.width}x${a.height}`).join(", ")}`);
  log(`manifest: ${path.relative(process.cwd(), MANIFEST)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
