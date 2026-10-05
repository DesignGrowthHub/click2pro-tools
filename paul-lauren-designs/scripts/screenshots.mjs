#!/usr/bin/env node
// QA: full-page screenshots of key pages at desktop and phone widths.
//   node scripts/screenshots.mjs [outDir] [baseUrl]
// Uses Playwright (npm i -g playwright, or set PLAYWRIGHT_MODULE).
import { createRequire } from "node:module";
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const require = createRequire(import.meta.url);
let pw;
try {
  pw = require(process.env.PLAYWRIGHT_MODULE || "playwright");
} catch {
  pw = require(path.join(execSync("npm root -g").toString().trim(), "playwright"));
}
const out = process.argv[2] || "screenshots";
const base = process.argv[3] || "http://localhost:4321";
const pages = (process.env.PAGES || "/,/portfolio/,/west-loop-chicago/,/studio/,/services/,/process/,/featured/,/journal/,/journal/designing-for-desert-light/,/faq/,/contact/,/scottsdale-interior-designer/,/areas-we-serve/").split(",");
const viewports = { desktop: { width: 1440, height: 900 }, mobile: { width: 390, height: 844 } };
fs.mkdirSync(out, { recursive: true });
const browser = await pw.chromium.launch();
for (const [name, viewport] of Object.entries(viewports)) {
  const ctx = await browser.newContext({ viewport, deviceScaleFactor: 1, reducedMotion: "reduce" });
  const page = await ctx.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  for (const p of pages) {
    await page.goto(base + p, { waitUntil: "networkidle" });
    await page.evaluate(() => document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-in")));
    // Walk the page so lazy images load, then wait for every image to finish.
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += window.innerHeight * 0.8) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 60));
      }
      document.querySelectorAll("img[loading=lazy]").forEach((img) => (img.loading = "eager"));
      await Promise.all([...document.images].map((img) => (img.complete ? null : new Promise((r) => { img.onload = img.onerror = r; }))));
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(300);
    const file = path.join(out, `${name}${p === "/" ? "-home" : p.replace(/\//g, "-").replace(/-$/, "")}.png`);
    await page.screenshot({ path: file, fullPage: true });
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    console.log(`${name} ${p} → ${file}${overflow > 0 ? `  ⚠ horizontal overflow ${overflow}px` : ""}`);
  }
  if (errors.length) console.log(`  console errors (${name}):`, [...new Set(errors)].join(" | "));
  await ctx.close();
}
await browser.close();
