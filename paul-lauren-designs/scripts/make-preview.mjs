#!/usr/bin/env node
// Makes a portable copy of the built site that opens by double-clicking
// index.html (no server): every root-relative URL becomes a relative path
// and folder links point at their index.html. Output: preview/ + a zip.
//   node build.mjs && node scripts/make-preview.mjs
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SITE = path.join(ROOT, "site");
const OUT = path.join(ROOT, "preview", "paul-lauren-designs-preview");
const ZIP = path.join(ROOT, "preview", "paul-lauren-designs-preview.zip");

if (!fs.existsSync(path.join(SITE, "index.html"))) throw new Error("Run `npm run build` first.");
fs.rmSync(path.join(ROOT, "preview"), { recursive: true, force: true });
fs.cpSync(SITE, OUT, { recursive: true });

const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]));
const ATTRS = "href|src|poster|data-full|data-src-landscape|data-src-portrait|data-webm-landscape|data-webm-portrait|data-poster-portrait";

for (const file of walk(OUT).filter((f) => f.endsWith(".html"))) {
  const depth = path.relative(OUT, path.dirname(file)).split(path.sep).filter(Boolean).length;
  const up = depth ? "../".repeat(depth) : "./";
  const rel = (url) => {
    if (!url.startsWith("/") || url.startsWith("//")) return url;
    const m = url.match(/^([^?#]*)(.*)$/);
    let p = m[1];
    if (p.endsWith("/")) p += "index.html";
    return up + p.slice(1) + m[2];
  };
  // Font preload hints are CORS requests, which browsers refuse for file:// pages.
  let html = fs.readFileSync(file, "utf8").replace(/<link rel="preload"[^>]*as="font"[^>]*>\n?/g, "");
  html = html.replace(new RegExp(`(\\s(?:${ATTRS})=")([^"]*)"`, "g"), (_, a, v) => `${a}${rel(v)}"`);
  html = html.replace(/(\s(?:srcset|imagesrcset)=")([^"]*)"/g, (_, a, v) => `${a}${v.split(",").map((part) => part.trim().replace(/^\S+/, (u) => rel(u))).join(", ")}"`);
  fs.writeFileSync(file, html);
}

fs.writeFileSync(
  path.join(OUT, "OPEN-ME.txt"),
  `Paul Lauren Designs: website preview

1. Unzip this folder.
2. Double-click index.html. It opens in your browser; every page and link works offline.

Beige blocks are placeholders. The studio's photography, logo, press logos
and hero film appear once they are pulled from the live site.
`,
);

try {
  execFileSync("zip", ["-qr", ZIP, path.basename(OUT)], { cwd: path.dirname(OUT) });
} catch {
  execFileSync("python3", ["-c", `import shutil; shutil.make_archive(${JSON.stringify(ZIP.replace(/\.zip$/, ""))}, "zip", ${JSON.stringify(path.dirname(OUT))}, ${JSON.stringify(path.basename(OUT))})`]);
}
console.log(`Preview: ${path.relative(process.cwd(), OUT)}/index.html`);
console.log(`Zip:     ${path.relative(process.cwd(), ZIP)} (${(fs.statSync(ZIP).size / 1024).toFixed(0)} KB)`);
