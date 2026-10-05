#!/usr/bin/env node
// Builds the home-page hero film from project photography: slow, editorial
// push-ins/pans with soft cross-dissolves. Produces a 16:9 cut for desktop
// and a 9:16 cut for phones, each with a poster frame.
//
//   node scripts/make-film.mjs                 # auto-select images from the manifest
//   node scripts/make-film.mjs a.jpg b.jpg ...  # explicit list
//   (or list files, one per line, in assets/film.txt)
//
// Env: FILM_SECONDS_PER_IMAGE (default 5), FILM_MAX_IMAGES (default 8)
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { imageSize } from "./lib/image-size.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(ROOT, "assets/video");
const PER = Number(process.env.FILM_SECONDS_PER_IMAGE || 5);
const FADE = 1.2;
const FPS = 30;
const MAX = Number(process.env.FILM_MAX_IMAGES || 8);

function pickImages() {
  const args = process.argv.slice(2);
  if (args.length) return args.map((a) => path.resolve(a));
  const listFile = path.join(ROOT, "assets/film.txt");
  if (fs.existsSync(listFile)) {
    return fs
      .readFileSync(listFile, "utf8")
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => l && !l.startsWith("#"))
      .map((l) => path.resolve(ROOT, l));
  }
  const manifestFile = path.join(ROOT, "assets/manifest.json");
  if (!fs.existsSync(manifestFile)) throw new Error("No images given and assets/manifest.json missing — run fetch-live-assets first.");
  const m = JSON.parse(fs.readFileSync(manifestFile, "utf8"));
  // One strong landscape frame per page, largest first, so the film travels across projects.
  const perPage = Object.entries(m.pages)
    .filter(([p]) => !["/featured/", "/contact/"].includes(p))
    .map(([, page]) =>
      page.media
        .map((id) => m.assets[id])
        .filter((a) => a?.kind === "image" && a.width >= 1600 && a.width / a.height >= 1.3)
        .sort((a, b) => b.width * b.height - a.width * a.height)[0],
    )
    .filter(Boolean);
  return [...new Map(perPage.map((a) => [a.file, a])).values()].slice(0, MAX).map((a) => path.join(ROOT, a.file));
}

function render(images, { w, h, file }) {
  const frames = Math.round(PER * FPS);
  const inputs = images.flatMap((img) => ["-i", img]);
  const moves = [
    // [zoom expr, x expr, y expr]: gentle push-ins and lateral drifts
    ["1+0.12*on/FR", "(iw-iw/zoom)/2", "(ih-ih/zoom)/2"],
    ["1.12", "(iw-iw/zoom)*on/FR", "(ih-ih/zoom)/2"],
    ["1.12-0.12*on/FR", "(iw-iw/zoom)/2", "(ih-ih/zoom)/2"],
    ["1.12", "(iw-iw/zoom)*(1-on/FR)", "(ih-ih/zoom)/2"],
  ];
  const parts = images.map((img, i) => {
    const [z, x, y] = moves[i % moves.length].map((e) => e.replaceAll("FR", String(frames)));
    // Oversample 3x before zoompan so sub-pixel motion stays smooth.
    return `[${i}:v]scale=${w * 3}:${h * 3}:force_original_aspect_ratio=increase,crop=${w * 3}:${h * 3},zoompan=z='${z}':x='${x}':y='${y}':d=${frames}:s=${w}x${h}:fps=${FPS},setsar=1,format=yuv420p[v${i}]`;
  });
  let last = "v0";
  for (let i = 1; i < images.length; i++) {
    const offset = (i * (PER - FADE)).toFixed(3);
    parts.push(`[${last}][v${i}]xfade=transition=fade:duration=${FADE}:offset=${offset}[x${i}]`);
    last = `x${i}`;
  }
  const args = [
    "-hide_banner", "-loglevel", "error", "-stats",
    "-y", ...inputs,
    "-filter_complex", parts.join(";"),
    "-map", `[${last}]`,
    "-c:v", "libx264", "-preset", "slow", "-crf", "20", "-profile:v", "high", "-pix_fmt", "yuv420p",
    "-movflags", "+faststart", "-an",
    file,
  ];
  execFileSync("ffmpeg", args, { stdio: ["ignore", "ignore", "inherit"] });
  // VP9/WebM fallback for browsers built without H.264.
  execFileSync("ffmpeg", ["-hide_banner", "-loglevel", "error", "-y", "-i", file, "-c:v", "libvpx-vp9", "-b:v", "0", "-crf", "34", "-row-mt", "1", "-deadline", "good", "-cpu-used", "2", "-an", file.replace(/\.mp4$/, ".webm")], { stdio: ["ignore", "ignore", "inherit"] });
  const poster = file.replace(/\.mp4$/, "-poster.jpg");
  execFileSync("ffmpeg", ["-y", "-ss", "0.5", "-i", file, "-frames:v", "1", "-q:v", "2", poster], { stdio: "ignore" });
  return poster;
}

const images = pickImages().filter((f) => fs.existsSync(f));
if (images.length < 2) throw new Error("Need at least two images for the film.");
for (const f of images) {
  const d = imageSize(f);
  console.log(`  ${path.relative(ROOT, f)}  ${d?.width}x${d?.height}`);
}
fs.mkdirSync(OUT, { recursive: true });
for (const cut of [
  { w: 1920, h: 1080, file: path.join(OUT, "hero-landscape.mp4") },
  { w: 1080, h: 1920, file: path.join(OUT, "hero-portrait.mp4") },
]) {
  console.log(`rendering ${path.relative(ROOT, cut.file)} …`);
  render(images, cut);
}
const seconds = images.length * PER - (images.length - 1) * FADE;
console.log(`done: ${images.length} images, ${seconds.toFixed(1)}s per cut → assets/video/`);
