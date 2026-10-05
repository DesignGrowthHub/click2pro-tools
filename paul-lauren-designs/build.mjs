#!/usr/bin/env node
// Static site build for paullaurendesigns.com. Zero dependencies.
//   node build.mjs            → ./site (deploy this folder anywhere)
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

import { site, fullAddress } from "./src/site.config.mjs";
import { projects as projectList, featuredSlugs, regions } from "./src/content/projects.mjs";
import { services, process as processSteps, press, faqs, philosophy } from "./src/content/studio.mjs";
import { articles as articleList } from "./src/content/journal.mjs";
import { createMedia } from "./src/lib/media.mjs";
import { esc } from "./src/lib/html.mjs";
import { abs } from "./src/lib/seo.mjs";
import { layout } from "./src/templates/layout.mjs";
import { renderHome } from "./src/pages/home.mjs";
import { renderPortfolio, renderProject } from "./src/pages/portfolio.mjs";
import { renderStudio, renderServices, renderProcess, renderFaq, renderFeatured, renderAreas, renderScottsdale } from "./src/pages/studio.mjs";
import { renderJournalIndex, renderArticle, journalFeed } from "./src/pages/journal.mjs";
import { renderContact, renderPrivacy, renderAccessibility, render404 } from "./src/pages/misc.mjs";

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(ROOT, "site");
const SRC_ASSETS = path.join(ROOT, "src/assets");
const t0 = Date.now();

// ---------------------------------------------------------------- output dir
// Keep site/media between builds (renditions are slow to regenerate); stale
// media is pruned at the end.
fs.mkdirSync(OUT, { recursive: true });
for (const entry of fs.readdirSync(OUT)) if (entry !== "media") fs.rmSync(path.join(OUT, entry), { recursive: true, force: true });
fs.cpSync(SRC_ASSETS, path.join(OUT, "assets"), { recursive: true });
const version = crypto
  .createHash("sha1")
  .update(fs.readFileSync(path.join(SRC_ASSETS, "css/site.css")))
  .update(fs.readFileSync(path.join(SRC_ASSETS, "js/site.js")))
  .digest("hex")
  .slice(0, 8);

// ---------------------------------------------------------------- content
const media = createMedia({ root: ROOT, outDir: OUT });
const live = media.manifest?.pages || {};

// Paragraphs that repeat across live pages are header/footer boilerplate.
const paraCount = new Map();
for (const page of Object.values(live)) for (const t of new Set(page.paragraphs || [])) paraCount.set(t, (paraCount.get(t) || 0) + 1);
const isBoilerplate = (t) => (paraCount.get(t) || 0) >= 3 || /@|\d{3}[-.\s]\d{3}[-.\s]\d{4}|©|cookie|all rights reserved|privacy/i.test(t);

const projects = projectList.map((p) => {
  const match = media.livePageFor(p);
  const livePath = match && match.path !== "/" && /^\/[^/]+\/$/.test(match.path) ? match.path : null;
  return {
    ...p,
    path: livePath || `/${p.slug}/`,
    livePath,
    images: media.projectImages(p),
    liveText: (match?.page?.paragraphs || []).filter((t) => !isBoilerplate(t)).slice(0, 4),
  };
});
const bySlug = Object.fromEntries(projects.map((p) => [p.slug, p]));
// Publish every project photo under its project first, so each image has a
// single descriptive URL (/media/projects/<slug>/<slug>-paul-lauren-designs-NN.jpg).
for (const p of projects) p.images.forEach((rec, n) => media.publish(rec, { folder: `projects/${p.slug}`, name: `${p.slug}-paul-lauren-designs-${String(n + 1).padStart(2, "0")}` }));
const featuredProjects = featuredSlugs.map((s) => bySlug[s]).filter(Boolean);

// A pool of strong images for supporting slots (CTA bands, service rows…):
// every project's cover first, then second images, and so on.
const fallbackGallery = [];
for (let round = 0; round < 4; round++) for (const p of projects) if (p.images[round]) fallbackGallery.push(p.images[round]);

const articles = articleList.map((a) => {
  const p = bySlug[a.imageFrom];
  return { ...a, image: p?.images[1] || p?.images[0] || null };
});

const logo = media.logo();
const logoPub = logo ? media.publish(logo, { folder: "brand", name: "paul-lauren-designs-logo" }) : null;
const heroVideo = media.heroVideo();
const ogFallback = featuredProjects.find((p) => p.images[0])?.images[0] || fallbackGallery[0];
const ogPub = ogFallback ? media.publish(ogFallback, { folder: "home", name: "paul-lauren-designs-scottsdale-interior-design" }) : null;
const manualPortrait = ["jpg", "jpeg", "png", "webp"].map((e) => path.join(ROOT, `assets/brand/lauren-rautbord.${e}`)).find((f) => fs.existsSync(f)) || null;

const featuredHeadings = (live["/featured/"]?.headings || []).filter((h) => h.level >= 2).map((h) => h.text);
const featuredImgCount = media.pageImagesFor("/featured/").filter((r) => r.width >= 300).length;

const ctx = {
  site,
  media,
  version,
  buildDate: new Date().toISOString().slice(0, 10),
  projects,
  bySlug,
  pathOf: (slug) => bySlug[slug]?.path || `/${slug}/`,
  featuredProjects,
  fallbackGallery,
  articles,
  services,
  process: processSteps,
  press,
  faqs,
  philosophy,
  logo,
  logoLight: media.logoLight(),
  logoUrl: logoPub?.original,
  heroVideo,
  manualPortrait,
  featuredLiveHeadings: featuredHeadings.length === featuredImgCount ? featuredHeadings : [],
  defaultOgImage: ogPub ? { url: ogPub.original, width: ogFallback.width, height: ogFallback.height, alt: `${site.name} — ${site.tagline}` } : null,
};

// ---------------------------------------------------------------- pages
const renderers = [
  renderHome,
  renderPortfolio,
  ...projects.map((p, i) => (c) => renderProject(c, p, i)),
  renderStudio,
  renderServices,
  renderProcess,
  renderFeatured,
  renderFaq,
  renderAreas,
  renderScottsdale,
  renderJournalIndex,
  ...articles.map((a) => (c) => renderArticle(c, a)),
  renderContact,
  renderPrivacy,
  renderAccessibility,
  render404,
];

const sitemap = [];
for (const render of renderers) {
  media.beginPage();
  const page = render(ctx);
  const out = layout(ctx, page);
  const images = media.endPage();
  const file = page.url.endsWith(".html") ? path.join(OUT, page.url) : path.join(OUT, page.url, "index.html");
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, out);
  if (!page.noindex) sitemap.push({ url: page.url, images, lastmod: page.article?.published || ctx.buildDate });
}

// ---------------------------------------------------------------- SEO / AI files
const priority = (u) => (u === "/" ? "1.0" : /^\/(portfolio|studio|services|contact|scottsdale-interior-designer)\/$/.test(u) ? "0.9" : u.startsWith("/journal/") ? "0.6" : "0.8");
fs.writeFileSync(
  path.join(OUT, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${sitemap
  .map(
    (s) => `  <url>
    <loc>${abs(s.url)}</loc>
    <lastmod>${s.lastmod}</lastmod>
    <priority>${priority(s.url)}</priority>
${s.images
  .slice(0, 1000)
  .map((i) => `    <image:image><image:loc>${esc(abs(i.loc))}</image:loc></image:image>`)
  .join("\n")}
  </url>`,
  )
  .join("\n")}
</urlset>
`,
);

fs.writeFileSync(
  path.join(OUT, "robots.txt"),
  `# ${site.name}
User-agent: *
Allow: /

# AI and answer engines are welcome to read and cite the studio's work.
User-agent: GPTBot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: Claude-SearchBot
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: Applebot-Extended
Allow: /

Sitemap: ${site.url}/sitemap.xml
`,
);

// llms.txt: a concise, factual brief for AI assistants (llmstxt.org).
fs.writeFileSync(
  path.join(OUT, "llms.txt"),
  `# ${site.name}

> ${site.description}

## Key facts
- Studio: ${site.name} (legal name: ${site.legalName})
- Principal designer & founder: ${site.founder.name}
- Experience: ${site.founder.experience} in interior design
- Training: ${site.founder.education}
- Founded with: ${site.founder.cofounder}
- Address: ${fullAddress()}
- Phone: ${site.phone}
- Email: ${site.email}
- Instagram: ${site.social.instagram.url}
- Style: serene, uncluttered, quietly luxurious; sumptuous fabrics, refined neutral palettes, vintage mixed with contemporary; "less is always more"; interiors that embrace the view
- Services: ${services.map((s) => s.title).join("; ")}
- Areas served: ${site.areaServed.join("; ")}

## Main pages
- [Home](${site.url}/): overview of the studio and selected work
- [Portfolio](${site.url}/portfolio/): ${projects.length} residential projects
- [Studio](${site.url}/studio/): Lauren Rautbord's background and philosophy
- [Services](${site.url}/services/): full-service design, new construction & renovation, furnishing, second homes
- [Process](${site.url}/process/): the six-stage design process
- [Featured](${site.url}/featured/): press, including Phoenix Home & Garden
- [FAQ](${site.url}/faq/): common questions with direct answers
- [Areas We Serve](${site.url}/areas-we-serve/)
- [Scottsdale Interior Designer](${site.url}/scottsdale-interior-designer/)
- [Contact](${site.url}/contact/)

## Portfolio
${projects.map((p) => `- [${p.title}](${abs(p.path)})${p.location ? `: ${p.location}` : ""} (${p.type})`).join("\n")}

## Journal
${articles.map((a) => `- [${a.title}](${abs(`/journal/${a.slug}/`)}): ${a.description}`).join("\n")}

## Frequently asked questions
${faqs.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}
`,
);

fs.writeFileSync(path.join(OUT, "journal/feed.xml"), journalFeed(ctx));

fs.writeFileSync(
  path.join(OUT, "site.webmanifest"),
  JSON.stringify(
    {
      name: site.name,
      short_name: "Paul Lauren",
      description: site.shortDescription,
      start_url: "/",
      display: "standalone",
      background_color: "#f4efe7",
      theme_color: "#f4efe7",
      icons: [
        { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
        { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
    },
    null,
    2,
  ),
);

// Icons: favicon.svg is the source; PNGs are rasterized when ImageMagick is available.
const iconSvg = path.join(SRC_ASSETS, "favicon.svg");
fs.copyFileSync(iconSvg, path.join(OUT, "favicon.svg"));
const magick = media.stats().imageMagick;
for (const [name, size] of [["favicon-32.png", 32], ["apple-touch-icon.png", 180], ["icon-192.png", 192], ["icon-512.png", 512]]) {
  const prebuilt = path.join(SRC_ASSETS, "icons", name);
  if (fs.existsSync(prebuilt)) fs.copyFileSync(prebuilt, path.join(OUT, name));
  else if (magick) {
    try {
      execFileSync(magick, ["-background", "none", "-density", "384", iconSvg, "-resize", `${size}x${size}`, path.join(OUT, name)], { stdio: "ignore" });
    } catch {
      /* rasterizer unavailable: favicon.svg still serves modern browsers */
    }
  }
}
fs.rmSync(path.join(OUT, "assets/favicon.svg"), { force: true });
fs.rmSync(path.join(OUT, "assets/icons"), { recursive: true, force: true });

// Redirects (Netlify / Cloudflare Pages syntax): keep old URLs, including
// Google Images' indexed /wp-content/uploads/ files, pointing at the new site.
const redirects = [
  "/cookies-policy/  /privacy-policy/  301",
  "/feed/  /journal/feed.xml  301",
  "/home/  /  301",
  "/about/  /studio/  301",
  "/press/  /featured/  301",
];
for (const p of projects) if (p.livePath && p.livePath !== p.path) redirects.push(`${p.livePath}  ${p.path}  301`);
if (media.manifest) {
  const publishedByAbs = new Map();
  for (const rec of Object.values(media.manifest.assets)) {
    const target = media.publishedUrl?.(path.join(ROOT, rec.file));
    if (!target) continue;
    for (const u of new Set([rec.url, rec.requested])) {
      try {
        const from = new URL(u).pathname;
        if (from.startsWith("/wp-content/") && !publishedByAbs.has(from)) publishedByAbs.set(from, target);
      } catch {
        /* external */
      }
    }
  }
  for (const [from, to] of publishedByAbs) redirects.push(`${from}  ${to}  301`);
}
fs.writeFileSync(path.join(OUT, "_redirects"), `${redirects.join("\n")}\n`);
fs.writeFileSync(
  path.join(OUT, "_headers"),
  `/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  X-Frame-Options: SAMEORIGIN

/assets/*
  Cache-Control: public, max-age=31536000, immutable

/media/*
  Cache-Control: public, max-age=2592000
`,
);

// ---------------------------------------------------------------- prune stale media
const keep = new Set(media.publishedFiles().map((f) => path.join(OUT, f)));
const walk = (dir) => (fs.existsSync(dir) ? fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)])) : []);
let pruned = 0;
for (const f of walk(path.join(OUT, "media"))) {
  if (!keep.has(f)) {
    fs.rmSync(f);
    pruned++;
  }
}
const removeEmptyDirs = (dir) => {
  if (!fs.existsSync(dir)) return;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) if (e.isDirectory()) removeEmptyDirs(path.join(dir, e.name));
  if (dir !== path.join(OUT, "media") && fs.readdirSync(dir).length === 0) fs.rmdirSync(dir);
};
removeEmptyDirs(path.join(OUT, "media"));
media.saveCache();

const s = media.stats();
const imgsWithPhotos = projects.filter((p) => p.images.length).length;
console.log(`Built ${sitemap.length + 1} pages → site/  (${((Date.now() - t0) / 1000).toFixed(1)}s)`);
console.log(`  photography: ${media.hasLive ? "live-site manifest found" : "no manifest (run: npm run fetch:live)"}; ${imgsWithPhotos}/${projects.length} projects have images; ${s.published} files published${pruned ? `, ${pruned} stale removed` : ""}`);
console.log(`  hero film: ${heroVideo ? (heroVideo.fromLive ? "live-site video" : "assets/video") : "none yet (npm run film)"}; logo: ${logo ? path.relative(ROOT, logo.abs) : "interim wordmark (add assets/brand/logo.svg)"}`);
console.log(`  responsive renditions: ${s.imageMagick ? `ImageMagick (${s.imageMagick})` : "skipped (ImageMagick not installed; originals only)"}`);
console.log(`  regions: ${Object.values(regions).join(", ")}`);
