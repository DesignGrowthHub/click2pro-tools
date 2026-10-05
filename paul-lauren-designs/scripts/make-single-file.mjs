#!/usr/bin/env node
// Packs the whole built site into ONE self-contained HTML file (pages, CSS,
// fonts, scripts and images inlined) for previewing by double-click: no
// unzip, no server. Pages switch via #/route links inside the file.
//   node build.mjs && node scripts/make-single-file.mjs
// Best for review rounds: with full photography the file gets large, so
// share the site/ folder (or the zip from make-preview.mjs) instead.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SITE = path.join(ROOT, "site");
const OUT = path.join(ROOT, "preview", "paul-lauren-designs.html");
const MAX_IMAGE_BYTES = 1.5 * 1024 * 1024;

if (!fs.existsSync(path.join(SITE, "index.html"))) throw new Error("Run `npm run build` first.");
const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]));
const MIME = { ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".webp": "image/webp", ".avif": "image/avif", ".gif": "image/gif", ".svg": "image/svg+xml", ".woff2": "font/woff2", ".mp4": "video/mp4", ".webm": "video/webm" };
const dataUris = new Map();
let inlinedBytes = 0;
const dataUri = (p) => {
  if (dataUris.has(p)) return dataUris.get(p);
  const file = path.join(SITE, decodeURIComponent(p.split(/[?#]/)[0]));
  let uri = null;
  if (fs.existsSync(file) && fs.statSync(file).size <= MAX_IMAGE_BYTES) {
    const buf = fs.readFileSync(file);
    inlinedBytes += buf.length;
    uri = `data:${MIME[path.extname(file).toLowerCase()] || "application/octet-stream"};base64,${buf.toString("base64")}`;
  }
  dataUris.set(p, uri);
  return uri;
};

// Internal page links → #/route; media → inline data URIs; srcset dropped.
function rewrite(html) {
  return html
    .replace(/\s(?:srcset|imagesrcset|sizes)="[^"]*"/g, "")
    .replace(/(\s(?:src|poster|data-full|data-src-landscape|data-src-portrait|data-webm-landscape|data-webm-portrait|data-poster-portrait)=")(\/[^"]+)"/g, (m, a, v) => {
      const uri = dataUri(v);
      return uri ? `${a}${uri}"` : m;
    })
    .replace(/(\shref=")(\/[^"]*)"/g, (m, a, v) => {
      if (/\.(xml|txt|svg|png|webmanifest|css|js|woff2)(\?|$)/.test(v)) return m;
      return `${a}#${v}"`;
    });
}

const pages = {};
let shellTop = "";
let shellBottom = "";
for (const file of walk(SITE).filter((f) => f.endsWith(".html"))) {
  const rel = path.relative(SITE, file).replace(/\\/g, "/");
  const route = rel === "404.html" ? "404" : `/${rel.replace(/index\.html$/, "")}`;
  const html = fs.readFileSync(file, "utf8");
  const title = (html.match(/<title>([^<]*)<\/title>/) || [, ""])[1]
    .replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
  const bodyClass = (html.match(/<body class="([^"]*)"/) || [, ""])[1];
  const mode = (html.match(/<header class="site-header" data-mode="([^"]*)"/) || [, "solid"])[1];
  const main = html.slice(html.indexOf(">", html.indexOf('<main id="main"')) + 1, html.lastIndexOf("</main>"));
  pages[route] = { title, bodyClass, mode, html: rewrite(main) };
  if (route === "/") {
    shellTop = rewrite(html.slice(html.indexOf(">", html.indexOf("<body")) + 1, html.indexOf('<main id="main"')));
    shellBottom = rewrite(html.slice(html.lastIndexOf("</main>") + "</main>".length, html.lastIndexOf("<script src=")));
  }
}

const css = fs
  .readFileSync(path.join(SITE, "assets/css/site.css"), "utf8")
  .replace(/url\("\.\.\/fonts\/([^"]+)"\)/g, (m, f) => `url("${dataUri(`/assets/fonts/${f}`)}")`);
const js = fs.readFileSync(path.join(SITE, "assets/js/site.js"), "utf8");
const favicon = dataUri("/favicon.svg");
const home = pages["/"];

const router = `
(function () {
  var pages = JSON.parse(document.getElementById("pld-pages").textContent);
  var main = document.getElementById("main");
  var header = document.querySelector(".site-header");
  function parse(h) {
    h = (h || "").replace(/^#/, "");
    if (h.charAt(0) !== "/") return { route: "/", query: "", anchor: "" };
    var anchor = "", query = "", i = h.indexOf("#"), j;
    if (i >= 0) { anchor = h.slice(i + 1); h = h.slice(0, i); }
    j = h.indexOf("?");
    if (j >= 0) { query = h.slice(j + 1); h = h.slice(0, j); }
    return { route: h, query: query, anchor: anchor };
  }
  function render() {
    var r = parse(location.hash);
    var page = pages[r.route] || pages["404"];
    main.innerHTML = page.html;
    document.title = page.title;
    document.body.className = page.bodyClass;
    header.setAttribute("data-mode", page.mode);
    header.classList.remove("is-hidden");
    document.querySelectorAll(".site-nav a").forEach(function (a) {
      var p = a.getAttribute("href").slice(1);
      if (p !== "/" && r.route.indexOf(p) === 0) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    var target = r.anchor && document.getElementById(r.anchor);
    if (target) target.scrollIntoView(); else window.scrollTo({ top: 0, behavior: "instant" });
    window.PLD.initPage(main, new URLSearchParams(r.query));
  }
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a || a.getAttribute("href").charAt(1) === "/") return;
    var el = document.getElementById(a.getAttribute("href").slice(1));
    e.preventDefault();
    if (el) { el.scrollIntoView({ behavior: "smooth" }); if (el === main) main.focus(); }
  });
  window.addEventListener("hashchange", render);
  render();
})();`;

const out = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="robots" content="noindex">
<title>${home.title.replace(/&/g, "&amp;").replace(/</g, "&lt;")}</title>
<link rel="icon" href="${favicon}" type="image/svg+xml">
<style>${css}</style>
</head>
<body class="${home.bodyClass}">
${shellTop.replace('data-mode="overlay"', `data-mode="${home.mode}"`)}<main id="main" tabindex="-1">${home.html}</main>
${shellBottom}
<script type="application/json" id="pld-pages">${JSON.stringify(pages).replace(/</g, "\\u003c")}</script>
<script>window.PLD_DEFER_INIT = true;</script>
<script>${js}</script>
<script>${router}</script>
</body>
</html>
`;

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, out);
console.log(`Single file: ${path.relative(process.cwd(), OUT)} (${(fs.statSync(OUT).size / 1024).toFixed(0)} KB, ${Object.keys(pages).length} pages, ${(inlinedBytes / 1024).toFixed(0)} KB inlined media/fonts)`);
