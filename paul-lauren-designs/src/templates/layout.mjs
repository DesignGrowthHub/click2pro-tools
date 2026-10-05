import { site, fullAddress } from "../site.config.mjs";
import { esc, html } from "../lib/html.mjs";
import { abs, graph } from "../lib/seo.mjs";

export function brandMark(ctx, { light = false } = {}) {
  const logo = (light && ctx.logoLight) || ctx.logo;
  if (logo) {
    const pub = ctx.media.publish(logo, { folder: "brand", name: light && ctx.logoLight ? "paul-lauren-designs-logo-light" : "paul-lauren-designs-logo" });
    return `<img class="brand__logo" src="${pub.original}" width="${logo.width}" height="${logo.height}" alt="${esc(site.name)}">`;
  }
  // Interim typographic wordmark, replaced automatically by assets/brand/logo.* or the live logo.
  return `<span class="wordmark" aria-hidden="true"><span class="wordmark__name">Paul Lauren</span><span class="wordmark__sub">Designs</span></span><span class="visually-hidden">${esc(site.name)}</span>`;
}

const navLink = (item, current) =>
  `<li><a href="${item.href}"${current.startsWith(item.href) ? ' aria-current="page"' : ""}>${esc(item.label)}</a></li>`;

function header(ctx, url, mode) {
  const left = site.nav.slice(0, 3);
  const right = site.nav.slice(3);
  return html`
<header class="site-header" data-mode="${mode}">
  <div class="site-header__inner">
    <nav class="site-nav site-nav--left" aria-label="Main">
      <ul>${left.map((i) => navLink(i, url))}</ul>
    </nav>
    <a class="brand" href="/" aria-label="${esc(site.name)} — home">${brandMark(ctx)}</a>
    <nav class="site-nav site-nav--right" aria-label="Studio">
      <ul>${right.map((i) => navLink(i, url))}</ul>
    </nav>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-menu">
      <span class="menu-toggle__label">Menu</span><span class="menu-toggle__icon" aria-hidden="true"></span>
    </button>
  </div>
</header>
<div class="site-menu" id="site-menu" hidden>
  <div class="site-menu__inner">
    <nav aria-label="Mobile">
      <ol class="site-menu__links">
        ${[{ label: "Home", href: "/" }, ...site.nav].map((i, n) => `<li><a href="${i.href}"><span class="site-menu__num">${String(n + 1).padStart(2, "0")}</span>${esc(i.label)}</a></li>`)}
      </ol>
    </nav>
    <div class="site-menu__contact">
      <p class="eyebrow">The Studio</p>
      <p>${esc(site.address.street)}<br>${esc(site.address.city)}, ${site.address.region} ${site.address.postal}</p>
      <p><a href="tel:${site.phoneE164}">${site.phone}</a><br><a href="mailto:${site.email}">${site.email}</a></p>
      <p><a href="${site.social.instagram.url}" rel="noopener" target="_blank">Instagram</a> · <a href="${site.social.facebook.url}" rel="noopener" target="_blank">Facebook</a></p>
    </div>
  </div>
</div>`;
}

function footer(ctx) {
  const year = new Date().getFullYear();
  return html`
<footer class="site-footer">
  <div class="site-footer__cta">
    <p class="eyebrow">Begin a conversation</p>
    <p class="site-footer__headline"><a href="/contact/">Let’s create a home that feels <em>like a deep breath.</em></a></p>
  </div>
  <div class="site-footer__grid">
    <div class="site-footer__brand">
      <a class="brand brand--footer" href="/" aria-label="${esc(site.name)} — home">${brandMark(ctx)}</a>
      <p>${esc(site.shortDescription)}</p>
    </div>
    <div>
      <p class="eyebrow">Studio</p>
      <address>
        <a href="https://www.google.com/maps/search/?api=1&amp;query=${encodeURIComponent(`${site.name} ${fullAddress()}`)}" rel="noopener" target="_blank">${esc(site.address.street)}<br>${esc(site.address.city)}, ${site.address.region} ${site.address.postal}</a><br>
        <a href="tel:${site.phoneE164}">${site.phone}</a><br>
        <a href="mailto:${site.email}">${site.email}</a>
      </address>
      <p class="site-footer__hours">${esc(site.hours)}</p>
    </div>
    <nav aria-label="Footer">
      <p class="eyebrow">Explore</p>
      <ul>${site.footerNav.map((i) => `<li><a href="${i.href}">${esc(i.label)}</a></li>`)}</ul>
    </nav>
    <div>
      <p class="eyebrow">Follow</p>
      <ul>
        ${Object.values(site.social).map((s) => `<li><a href="${s.url}" rel="noopener me" target="_blank">${esc(s.label)} <span class="muted">${esc(s.handle)}</span></a></li>`)}
      </ul>
    </div>
  </div>
  <div class="site-footer__base">
    <p>© ${year} ${esc(site.legalName)}. Interior design studio in Scottsdale, Arizona.</p>
    <ul>${site.legalNav.map((i) => `<li><a href="${i.href}">${esc(i.label)}</a></li>`)}</ul>
  </div>
</footer>`;
}

export function layout(ctx, page) {
  const {
    url,
    title,
    description,
    ogImage,
    ogType = "website",
    jsonld = [],
    body,
    bodyClass = "",
    headerMode = "solid",
    preload = [],
    noindex = false,
    article,
  } = page;
  // Brand suffix only when the whole title still fits in ~65 characters.
  const fullTitle = title.includes(site.name) || title.length + site.name.length + 3 > 65 ? title : `${title} | ${site.name}`;
  const canonical = abs(url);
  const og = ogImage || ctx.defaultOgImage;
  return html`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${canonical}">
<meta name="robots" content="${noindex ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"}">
<meta name="author" content="${esc(site.name)}">
<meta name="geo.region" content="US-${site.address.region}">
<meta name="geo.placename" content="${esc(site.address.city)}">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:locale" content="${site.locale}">
<meta property="og:type" content="${ogType}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
${og ? `<meta property="og:image" content="${abs(og.url)}">${og.width ? `\n<meta property="og:image:width" content="${og.width}">\n<meta property="og:image:height" content="${og.height}">` : ""}\n<meta property="og:image:alt" content="${esc(og.alt || title)}">` : ""}
${article ? `<meta property="article:published_time" content="${article.published}">\n<meta property="article:section" content="${esc(article.section)}">` : ""}
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
${og ? `<meta name="twitter:image" content="${abs(og.url)}">` : ""}
<meta name="theme-color" content="#f4efe7">
<meta name="format-detection" content="telephone=no">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="alternate" type="application/rss+xml" title="${esc(site.name)} Journal" href="/journal/feed.xml">
<link rel="preload" href="/assets/fonts/cormorant-garamond.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/jost.woff2" as="font" type="font/woff2" crossorigin>
${preload.join("\n")}
<link rel="stylesheet" href="/assets/css/site.css?v=${ctx.version}">
<script type="application/ld+json">${graph(jsonld)}</script>
</head>
<body class="${bodyClass}">
<a class="skip-link" href="#main">Skip to content</a>
${header(ctx, url, headerMode)}
<main id="main" tabindex="-1">
${body}
</main>
${footer(ctx)}
<div class="lightbox" hidden role="dialog" aria-modal="true" aria-label="Image viewer">
  <button class="lightbox__close" type="button" aria-label="Close">Close</button>
  <button class="lightbox__prev" type="button" aria-label="Previous image"></button>
  <figure class="lightbox__figure"><img alt=""><figcaption></figcaption></figure>
  <button class="lightbox__next" type="button" aria-label="Next image"></button>
</div>
<script src="/assets/js/site.js?v=${ctx.version}" defer></script>
</body>
</html>
`;
}
