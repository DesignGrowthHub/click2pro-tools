# Paul Lauren Designs: website

A fast, image-led, editorial website for **Paul Lauren Designs** (paullaurendesigns.com),
the Scottsdale interior design studio of Lauren Rautbord.

- **Static HTML**, pre-rendered for every page, so search engines and AI crawlers read everything without running JavaScript.
- **Zero dependencies.** Plain Node (≥18) builds it. Deploy the `site/` folder to any host.
- **Photography is the hero.** Original files are published untouched (full HD, never re-encoded) with correct dimensions, plus lighter same-format renditions for phones.

---

## Status

| Area | State |
| --- | --- |
| Design system, templates and all 38 pages | ✅ Built and QA'd (desktop + mobile screenshots, link/SEO audit) |
| SEO / AIO / GEO layer | ✅ JSON-LD graph, sitemap with images, robots, `llms.txt`, RSS, redirects |
| Image pipeline (live site → originals, dimensions, renditions) | ✅ Built and tested end to end |
| Hero film generator (Ken Burns film from project photos) | ✅ Built and tested |
| **Real photography, logo, press logos, Instagram** | ⏳ **Not yet pulled.** The build environment's network policy blocked `paullaurendesigns.com`, `instagram.com` and `michaelfreas.com`. Run the steps below on a machine with internet (or allow those domains), then rebuild. |
| Pixel-matching the reference site (michaelfreas.com) | ⏳ Could not be inspected for the same reason. All design tokens live in one stylesheet (`src/assets/css/site.css`, `:root`) so fonts, colors and spacing can be tuned to the reference quickly. |

Until photography is in place, every image slot renders a neutral placeholder at the correct aspect ratio.

---

## Quick start

```bash
cd paul-lauren-designs
npm run build        # → site/
npm run serve        # preview at http://localhost:4321
npm run check        # SEO / link / image audit of site/
```

## Bring in the real photography

### 1. Pull everything from the live website (originals, not thumbnails)

```bash
npm run fetch:live
npm run build
```

`scripts/fetch-live-assets.mjs`:

- reads the WordPress media library (`/wp-json/wp/v2/media`) and every page in the sitemap
- collects every image and video URL, including `srcset`, lazy-load attributes, CSS backgrounds and page-builder JSON
- **resolves each one to the original upload.** It strips `-1024x683`-style size suffixes and `-scaled` versions and uses WordPress's `original_image`, so you get the file exactly as it was uploaded
- downloads to `assets/live/`, measures true pixel dimensions (EXIF rotation aware) and writes `assets/manifest.json`
- records each page's text, so the real project descriptions replace the draft copy automatically
- finds the logo (header/logo images) and the live hero video

The build then matches all 20 projects to their live pages, **keeps the live URLs** (so rankings and backlinks carry over), builds each gallery in the original photo order, and writes 301 redirects from the old `/wp-content/uploads/...` image URLs (indexed in Google Images) to the new ones.

### 2. Instagram (@paullaurendesigns)

```bash
npm run fetch:instagram                       # uses instaloader (pip)
IG_LOGIN=yourusername npm run fetch:instagram # if Instagram requires a login
```

Choose and order the posts for the home-page grid in `assets/instagram/selection.txt`, one filename per line.
Without that file the newest images are used.

### 3. Hand-curated overrides (optional, always win)

| Put files in | Used for |
| --- | --- |
| `assets/projects/<project-slug>/` | That project's gallery, in filename order (`01.jpg`, `02.jpg`…) |
| `assets/brand/logo.svg` (or `.png`) | Header and footer logo (inverted to white over imagery automatically) |
| `assets/brand/logo-light.svg` | Optional dedicated light logo |
| `assets/brand/lauren-rautbord.jpg` | Lauren's portrait (home page "The Designers" and Studio page) |
| `assets/brand/kendra-vaughn.jpg` | Kendra's portrait (home page "The Designers" and Studio page) |
| `assets/press/<Outlet Name>.svg/png` | Press logos for "As featured in" (filename = outlet name) |
| `assets/video/hero.mp4` | A hero video you supply |

### 4. Hero film

The live site's hero video is used automatically if one is found. To create a new film from project photography:

```bash
npm run film                    # auto-picks one strong landscape image per project
node scripts/make-film.mjs a.jpg b.jpg c.jpg   # or choose the frames
# or list files (one per line) in assets/film.txt
```

It renders slow push-ins and pans with soft dissolves: a **1920×1080** cut for desktop and a **1080×1920** cut for phones (H.264 MP4 plus a WebM fallback, with poster frames). The page picks the right cut per device, pauses off-screen, respects "reduce motion" and has a visible Pause control (WCAG 2.2.2).

---

## Pages

| URL | Purpose |
| --- | --- |
| `/` | Hero film, studio statement, Selected Work, philosophy, quote, services, press, journal, Instagram |
| `/portfolio/` | All 20 projects, filterable by region, in an editorial staggered grid |
| `/<project>/` ×20 | Full-bleed cover, project facts, orientation-aware gallery (never crops), full-res lightbox, next project |
| `/studio/` | Lauren Rautbord: bio, "at a glance" facts, philosophy |
| `/services/` | Six services with what's included *(new)* |
| `/process/` | The six-stage process *(new)* |
| `/featured/` | Press: Phoenix Home & Garden, plus everything pulled from the live Featured page |
| `/faq/` | Ten direct answers with `FAQPage` schema *(new; strong for AI answers)* |
| `/areas-we-serve/` | Regions with their projects *(new; local SEO)* |
| `/scottsdale-interior-designer/` | Scottsdale landing page *(new; local SEO)* |
| `/journal/` + 4 articles | Long-form guides *(new; topical authority)* |
| `/contact/` | Inquiry form (prefills from "Inquire about a similar project") |
| `/privacy-policy/`, `/accessibility-statement/`, `404` | |

## SEO, AIO (AI overviews) and GEO (generative engines)

- Unique, length-checked `<title>` and meta description on every page; canonical URLs; Open Graph and Twitter cards using the page's own hero photo
- One connected **schema.org graph**: `LocalBusiness` + `ProfessionalService` (NAP, areas served, services catalog, `sameAs`), `Person` (Lauren), `WebSite`, `BreadcrumbList`, `CreativeWork` per project with `ImageObject`s (creator and copyright), `Service`, `HowTo`, `FAQPage`, `BlogPosting`, `VideoObject`
- **Image SEO**: descriptive file names (`west-loop-chicago-paul-lauren-designs-03.jpg`), alt text, width and height on every image, an image sitemap, `max-image-preview:large`, and redirects from old WordPress image URLs
- **`llms.txt`**: a concise, factual brief of the studio for AI assistants; `robots.txt` explicitly welcomes GPTBot, ClaudeBot, PerplexityBot, Google-Extended and others
- Entity-consistent facts everywhere (one source: `src/site.config.mjs`), "at a glance" fact lists and Key-takeaways boxes that answer engines can quote
- Performance: no framework, about 30 KB of CSS and JS, self-hosted variable fonts with preload, an LCP image preload with `fetchpriority`, lazy loading and responsive `srcset`
- Accessibility: semantic landmarks, skip link, visible focus, keyboard-operable menu and lightbox (focus trap and Escape), reduced-motion support

## Editing content

| File | Content |
| --- | --- |
| `src/site.config.mjs` | Name, address, phone, email, socials, navigation, service areas, **form endpoint** |
| `src/content/projects.mjs` | Projects, locations, regions, home-page featured order |
| `src/content/studio.mjs` | Philosophy, services, process, press, FAQ |
| `src/content/journal.mjs` | Journal articles |
| `src/assets/css/site.css` | Design tokens (`:root`) and all styling |

See **CONTENT-REVIEW.md** for every statement the studio should confirm before launch.

## Deploy

`site/` is a complete static site:

- **Netlify / Cloudflare Pages**: publish directory `paul-lauren-designs/site`, build command `cd paul-lauren-designs && npm run build`. `_redirects` and `_headers` are honored.
- **Any host / WordPress replacement**: upload `site/`. Translate `_redirects` into the host's redirect rules.
- Set `formEndpoint` in `src/site.config.mjs` (Formspree, Basin, Netlify Forms, etc.). Without it, the form opens the visitor's email app addressed to the studio.

## Previews you can open on any PC

```bash
npm run preview:single   # preview/paul-lauren-designs.html: the whole site in ONE file, double-click to open
npm run preview          # preview/paul-lauren-designs-preview.zip: folder version, open index.html
```

The single file inlines everything, so it suits review rounds. Once the full photography is in it gets large; share the zip or deploy `site/` instead.

## QA tools

```bash
npm run check   # titles, descriptions, single H1, canonicals, JSON-LD validity, broken links, image alt/dimensions, sitemap
npm run shots   # full-page screenshots at 1440px and 390px (requires Playwright)
```
