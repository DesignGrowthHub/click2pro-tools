# Content review: confirm before launch

All copy on the new site was written fresh. Business facts were gathered from public search results
(the live site itself could not be opened from the build environment). Please confirm or correct
each item below. Most fixes are one-line edits in `src/site.config.mjs` or `src/content/*.mjs`.

## 1. Business facts (`src/site.config.mjs`)

| Fact used | Source | Confirm |
| --- | --- | --- |
| Paul Lauren Designs / legal name **Paul Lauren Design Consultants** | Search listings, live site titles | ☐ |
| 16419 N 91st St, **Bldg A125**, Scottsdale, AZ 85260 | Live Contact page (via search), ZoomInfo | ☐ Suite vs. Bldg wording |
| 480-664-6765 · info@paullaurendesigns.com | Live Contact page (via search) | ☐ |
| Instagram @paullaurendesigns · Facebook /LaurenRautbordStyle | Brief; Facebook page titled "Paul Lauren Design Consultants" | ☐ any others (Houzz, Pinterest)? |
| Hours: "By appointment" | Assumed | ☐ |
| Lauren Rautbord: principal designer and founder, **30+ years** experience | Live Studio page (via search) | ☐ |
| Trained at the **Harrington School of Design**, Chicago | Live Studio page (via search) | ☐ |
| Founded with **the late Paul Marchetti**, a leading Chicago style maker | Live Studio page (via search) | ☐ wording OK? |
| Quote: "The day I am delegating design decisions…" | Published interview / live site | ☐ |
| Service areas list (Scottsdale, Paradise Valley, Phoenix, Silverleaf & DC Ranch, Chicago, Wilmette & North Shore, Aspen, Sun Valley, Coeur d'Alene, Pacific Palisades) | Project names, plus Paradise Valley and DC Ranch assumed | ☐ |

## 2. Projects (`src/content/projects.mjs`)

- **Project list and order**: the 20 projects as listed on the live Portfolio page. ☐
- **URLs**: only `/west-loop-chicago/` is confirmed. When `npm run fetch:live` runs, the build matches projects to their live pages and keeps the live URLs automatically. ☐
- **Descriptions are drafts.** They are replaced automatically by each live project page's own text after `fetch:live`. Review the result. ☐
- **Locations** are shown only where the project name states them. Please supply locations for: Desert Classic, Solitude, Gozzer Flats, Lakefront Condo I & II, Cabin with a View, Cabin on the Fairway, Cabin on the Lake, Lakefront Corner Condo. ☐
- **Region filters** for Desert Classic (Arizona), Gozzer Flats and the three Cabins (Mountain & Lake) are inferred; Solitude and the two Lakefront Condos have no region yet. ☐
- "Biltmore Residence" is presented as Phoenix's Biltmore area. ☐
- Home-page Selected Work order (`featuredSlugs`): re-pick once the photography is visible. ☐

## 3. Services, process, FAQ (`src/content/studio.mjs`)

- The six services (incl. **Builder & Spec Home Design** and **Design Consultation**): confirm the studio offers each. ☐
- Six-stage process wording. ☐
- FAQ answers, especially project timelines and "Lauren is personally involved in every project". ☐

## 4. Press (`src/content/studio.mjs` → `press`)

| Item | Status |
| --- | --- |
| Phoenix Home & Garden, "Revisiting Old-World Allure", February 2019 (phgmag.com) | Found via search ☐ |
| Houzz, Bathroom of the Week | Mentioned in search results; **link and date unknown** ☐ |
| Everything else on the live `/featured/` page | Pulled automatically by `fetch:live` (images shown on /featured/) ☐ |
| Press **logos** for the "As featured in" strip | Add files to `assets/press/` (e.g. `Phoenix Home & Garden.svg`) ☐ |

## 5. Journal (`src/content/journal.mjs`)

Four original articles, written as drafts for Lauren's voice and review:
"Designing for Desert Light", "The Quiet Luxury of a Neutral Palette", "Furnishing a Second Home",
"What to Expect When Working With a Luxury Interior Designer". Dates are placeholders (2026). ☐

## 6. Brand assets

- **Logo**: an interim typographic wordmark is shown until the real logo is pulled from the live site or placed in `assets/brand/logo.svg`. ☐
- **Favicon**: interim "PL" monogram (`src/assets/favicon.svg`). Replace with the brand mark if one exists. ☐
- **Portrait of Lauren** for the Studio page: `assets/brand/lauren-rautbord.jpg`. ☐

## 7. Legal

- Privacy Policy and Accessibility Statement are short plain-language drafts. Have them reviewed. The privacy policy says the site uses **no tracking cookies**; update it if analytics are added. ☐
- The live site has a separate Cookies Policy; `/cookies-policy/` now redirects to the Privacy Policy. ☐

## 8. Not included (decide)

- Team members (e.g. other designers) and client testimonials were not added because none could be verified. Send them over if wanted. ☐
