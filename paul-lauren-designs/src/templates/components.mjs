import { site } from "../site.config.mjs";
import { esc, html, pad2 } from "../lib/html.mjs";
import { regions } from "../content/projects.mjs";

export const eyebrow = (text) => `<p class="eyebrow">${esc(text)}</p>`;

export function breadcrumbs(trail) {
  const items = [{ name: "Home", url: "/" }, ...trail];
  return html`<nav class="breadcrumbs" aria-label="Breadcrumb"><ol>${items.map((c, i) =>
    i === items.length - 1 ? `<li aria-current="page">${esc(c.name)}</li>` : `<li><a href="${c.url}">${esc(c.name)}</a></li>`,
  )}</ol></nav>`;
}

export function pageIntro({ eyebrow: eb, title, lede, trail, cls = "" }) {
  return html`
<header class="page-intro ${cls}">
  ${trail ? breadcrumbs(trail) : ""}
  ${eb ? eyebrow(eb) : ""}
  <h1 class="display reveal">${title}</h1>
  ${lede ? `<p class="page-intro__lede reveal">${lede}</p>` : ""}
</header>`;
}

export function projectMeta(p) {
  return [p.location, p.type].filter(Boolean).join(" · ");
}

export function projectAlt(p, n = 0) {
  const where = p.location ? ` in ${p.location}` : "";
  return n === 0
    ? `${p.title}: interior design by ${site.name}${where}`
    : `${p.title}, image ${n + 1}: interior by ${site.name}${where}`;
}

export function projectCard(ctx, p, i, { sizes = "(min-width: 900px) 50vw, 100vw", cls = "" } = {}) {
  const cover = p.images[0];
  return html`
<article class="card ${cls}" data-region="${p.region || "other"}">
  <a class="card__link" href="${p.path}">
    <div class="card__media">${ctx.media.img(cover, {
      alt: projectAlt(p),
      sizes,
      folder: `projects/${p.slug}`,
      name: `${p.slug}-paul-lauren-designs-01`,
      ratio: 4 / 5,
      label: p.title,
    })}</div>
    <div class="card__text">
      <span class="card__num">${pad2(i + 1)}</span>
      <h3 class="card__title">${esc(p.title)}</h3>
      <p class="card__meta">${esc(projectMeta(p) || (p.region ? regions[p.region] : p.type))}</p>
    </div>
  </a>
</article>`;
}

export function pressStrip(ctx, { title = "As featured in" } = {}) {
  const logos = ctx.media.pressLogos();
  const items = logos.length
    ? logos.map((l) => {
        const pub = ctx.media.publish(l.rec, { folder: "press", name: l.name });
        return `<li><img src="${pub.original}" alt="${esc(l.name)}" width="${l.rec.width || ""}" height="${l.rec.height || ""}" loading="lazy"></li>`;
      })
    : ctx.press.map((p) => `<li class="press-name">${esc(p.outlet)}</li>`);
  return html`
<section class="press-strip" aria-label="${esc(title)}">
  <p class="eyebrow">${esc(title)}</p>
  <ul>${items}</ul>
  <a class="link-arrow" href="/featured/">View features</a>
</section>`;
}

export function ctaBand(ctx, { title = "Begin a conversation", text = "Tell us about your home, whether it's a new build, a renovation or a retreat waiting to be furnished.", image } = {}) {
  return html`
<section class="cta-band">
  <div class="cta-band__media">${ctx.media.img(image, { alt: "Interior by Paul Lauren Designs", sizes: "100vw", ratio: 16 / 7, label: "Full-bleed interior" })}</div>
  <div class="cta-band__content">
    <p class="eyebrow">Paul Lauren Designs</p>
    <h2 class="display-2">${esc(title)}</h2>
    <p>${esc(text)}</p>
    <a class="button button--light" href="/contact/">Start your project</a>
  </div>
</section>`;
}

export function instagramGrid(ctx, { limit = 6 } = {}) {
  const ig = ctx.media.instagram().slice(0, limit);
  const fill = ig.length ? ig : ctx.fallbackGallery.slice(0, limit);
  const tiles = Array.from({ length: limit }, (_, i) => fill[i]);
  return html`
<section class="instagram">
  <div class="section-head">
    <p class="eyebrow">Follow the studio</p>
    <h2 class="display-2"><a href="${site.social.instagram.url}" rel="noopener" target="_blank">${esc(site.social.instagram.handle)}</a></h2>
  </div>
  <ul class="instagram__grid">
    ${tiles.map(
      (rec, i) => `<li><a href="${site.social.instagram.url}" rel="noopener" target="_blank" aria-label="View on Instagram">${ctx.media.img(rec, {
        alt: `Paul Lauren Designs on Instagram, image ${i + 1}`,
        sizes: "(min-width: 900px) 16vw, 50vw",
        folder: "instagram",
        name: `paul-lauren-designs-instagram-${i + 1}`,
        ratio: 1,
        label: "Instagram",
      })}</a></li>`,
    )}
  </ul>
</section>`;
}

export function facts(list) {
  return html`<dl class="facts">${list.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${v}</dd></div>`)}</dl>`;
}
