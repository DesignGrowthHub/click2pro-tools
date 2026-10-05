#!/usr/bin/env node
// Pre-launch audit of the built site: SEO metadata, structured data, links,
// images and accessibility basics. Exits non-zero on errors.
//   node scripts/check.mjs [siteDir]
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SITE = path.resolve(process.argv[2] || path.join(ROOT, "site"));
const errors = [];
const warnings = [];
const err = (f, m) => errors.push(`${f}: ${m}`);
const warn = (f, m) => warnings.push(`${f}: ${m}`);

const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]));
const htmlFiles = walk(SITE).filter((f) => f.endsWith(".html"));
const titles = new Map();
const descriptions = new Map();
const decode = (s) => s.replace(/&amp;/g, "&").replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">");

function resolves(href) {
  const clean = decodeURIComponent(href.split("#")[0].split("?")[0]);
  if (!clean) return true;
  const target = path.join(SITE, clean);
  if (fs.existsSync(target) && fs.statSync(target).isFile()) return true;
  return fs.existsSync(path.join(target, "index.html"));
}

for (const file of htmlFiles) {
  const rel = "/" + path.relative(SITE, file).replace(/index\.html$/, "");
  const html = fs.readFileSync(file, "utf8");
  const is404 = rel.endsWith("404.html");
  const title = decode((html.match(/<title>([^<]*)<\/title>/) || [, ""])[1]);
  const desc = decode((html.match(/<meta name="description" content="([^"]*)"/) || [, ""])[1]);
  if (!title) err(rel, "missing <title>");
  else if (title.length > 70) warn(rel, `title ${title.length} chars (aim ≤ 65): ${title}`);
  if (!desc) err(rel, "missing meta description");
  else if (desc.length > 165 || desc.length < 70) warn(rel, `description ${desc.length} chars (aim 70–160)`);
  if (!is404) {
    if (titles.has(title)) err(rel, `duplicate title with ${titles.get(title)}`);
    titles.set(title, rel);
    if (descriptions.has(desc)) err(rel, `duplicate description with ${descriptions.get(desc)}`);
    descriptions.set(desc, rel);
    if (!/<link rel="canonical" href="https:\/\/[^"]+"/.test(html)) err(rel, "missing absolute canonical");
  }
  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  if (h1s !== 1) err(rel, `${h1s} <h1> elements`);
  if (!/<html lang="en">/.test(html)) err(rel, "missing lang");
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      const data = JSON.parse(m[1]);
      if (!data["@graph"]?.length && !is404) warn(rel, "empty JSON-LD graph");
    } catch (e) {
      err(rel, `invalid JSON-LD: ${e.message}`);
    }
  }
  for (const m of html.matchAll(/<img\b[^>]*>/g)) {
    const tag = m[0];
    if (!/\salt="/.test(tag)) err(rel, `img without alt: ${tag.slice(0, 90)}`);
    if (!/\swidth="\d+"/.test(tag) || !/\sheight="\d+"/.test(tag)) {
      if (!/lightbox|alt=""/.test(tag)) warn(rel, `img without width/height: ${tag.slice(0, 90)}`);
    }
    const src = (tag.match(/\ssrc="([^"]+)"/) || [])[1];
    if (src && src.startsWith("/") && !resolves(src)) err(rel, `missing image file ${src}`);
  }
  for (const m of html.matchAll(/\shref="(\/[^"]*)"/g)) if (!resolves(m[1])) err(rel, `broken link ${m[1]}`);
  for (const m of html.matchAll(/\s(?:src|data-src-landscape|data-src-portrait|data-webm-landscape|data-webm-portrait)="(\/media\/[^"]+)"/g)) if (!resolves(m[1])) err(rel, `missing media ${m[1]}`);
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
  const dupIds = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dupIds.length) err(rel, `duplicate ids: ${[...new Set(dupIds)].join(", ")}`);
}

// sitemap ↔ files
const sitemap = fs.readFileSync(path.join(SITE, "sitemap.xml"), "utf8");
const locs = [...sitemap.matchAll(/<loc>https?:\/\/[^/]+(\/[^<]*)<\/loc>/g)].map((m) => m[1]);
for (const loc of locs) if (!resolves(loc)) err("sitemap.xml", `URL without a page: ${loc}`);
for (const f of ["robots.txt", "llms.txt", "site.webmanifest", "journal/feed.xml", "favicon.svg", "_redirects"]) if (!fs.existsSync(path.join(SITE, f))) err(f, "missing");

console.log(`Checked ${htmlFiles.length} HTML files, ${locs.length} sitemap URLs.`);
if (warnings.length) console.log(`\n${warnings.length} warning(s):\n  ${warnings.join("\n  ")}`);
if (errors.length) {
  console.log(`\n${errors.length} error(s):\n  ${errors.join("\n  ")}`);
  process.exit(1);
}
console.log("No errors.");
