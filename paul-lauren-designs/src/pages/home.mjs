import { site } from "../site.config.mjs";
import { esc, html, pad2, formatDate } from "../lib/html.mjs";
import { organizationNode, personNode, websiteNode, webPageNode, abs } from "../lib/seo.mjs";
import { ctaBand, instagramGrid, pressStrip, projectAlt, projectMeta } from "../templates/components.mjs";

function hero(ctx, still) {
  const video = ctx.heroVideo;
  const poster = video?.poster || still;
  const posterPub = poster ? ctx.media.publish(poster, { folder: "home", name: "paul-lauren-designs-scottsdale-interior-design" }) : null;
  const portraitPosterPub = video?.posterPortrait ? ctx.media.publish(video.posterPortrait, { folder: "home", name: "paul-lauren-designs-hero-portrait" }) : null;
  let media;
  if (video) {
    media = `<video class="hero__video" autoplay muted loop playsinline preload="metadata"
      ${posterPub ? `poster="${posterPub.src}"` : ""}
      data-src-landscape="${video.landscape}"${video.portrait ? ` data-src-portrait="${video.portrait}"` : ""}${video.landscapeWebm ? ` data-webm-landscape="${video.landscapeWebm}"` : ""}${video.portraitWebm ? ` data-webm-portrait="${video.portraitWebm}"` : ""}${portraitPosterPub ? ` data-poster-portrait="${portraitPosterPub.src}"` : ""}
      aria-label="A film of interiors designed by Paul Lauren Designs">
      <source src="${video.landscape}" type="video/mp4">
      ${video.landscapeWebm ? `<source src="${video.landscapeWebm}" type="video/webm">` : ""}
    </video>`;
  } else if (still) {
    media = ctx.media.img(still, { alt: "Interior by Paul Lauren Designs", sizes: "100vw", priority: true, cls: "hero__still", folder: "home", name: "paul-lauren-designs-scottsdale-interior-design" });
  } else {
    media = ctx.media.placeholder({ ratio: 16 / 9, label: "Hero film", cls: "hero__ph" });
  }
  return html`
<section class="hero" aria-label="Introduction">
  <div class="hero__media">${media}</div>
  <div class="hero__shade" aria-hidden="true"></div>
  <div class="hero__content">
    <h1 class="hero__title">
      <span class="eyebrow eyebrow--light">Luxury Interior Design · Scottsdale, Arizona</span>
      <span class="hero__line">Serene interiors,</span>
      <span class="hero__line"><em>quietly luxurious.</em></span>
    </h1>
    <p class="hero__by">The studio of Lauren Rautbord</p>
  </div>
  <div class="hero__foot">
    <a class="hero__scroll" href="#intro"><span>Scroll</span></a>
    ${video ? `<button class="hero__toggle" type="button" aria-pressed="false" aria-label="Pause background film"><span>Pause</span></button>` : ""}
  </div>
</section>`;
}

function featureBlock(ctx, p, i, variant) {
  const imgs = p.images;
  const n = pad2(i + 1);
  const caption = html`
    <div class="feature__caption">
      <span class="feature__num">${n}</span>
      <h3 class="feature__title"><a href="${p.path}">${esc(p.title)}</a></h3>
      <p class="feature__meta">${esc(projectMeta(p))}</p>
      <p class="feature__summary">${esc(p.summary)}</p>
      <a class="link-arrow" href="${p.path}">View project</a>
    </div>`;
  const pic = (rec, k, sizes, ratio) =>
    `<a class="feature__img" href="${p.path}" tabindex="-1" aria-hidden="true">${ctx.media.img(rec, {
      alt: projectAlt(p, k),
      sizes,
      folder: `projects/${p.slug}`,
      name: `${p.slug}-paul-lauren-designs-${pad2(k + 1)}`,
      ratio,
      label: p.title,
    })}</a>`;
  if (variant === "wide") {
    return html`<article class="feature feature--wide reveal">${pic(imgs[0], 0, "100vw", 16 / 9)}${caption}</article>`;
  }
  if (variant === "left") {
    return html`<article class="feature feature--left reveal">${pic(imgs[0], 0, "(min-width: 900px) 58vw, 100vw", 4 / 5)}${caption}</article>`;
  }
  return html`<article class="feature feature--right reveal">${pic(imgs[0], 0, "(min-width: 900px) 42vw, 100vw", 3 / 4)}${caption}</article>`;
}

export function renderHome(ctx) {
  const featured = ctx.featuredProjects;
  const still = featured.find((p) => p.images[0] && ctx.media.ratioOf(p.images[0]) > 1.2)?.images[0] || featured[0]?.images[0];
  const philosophyImg = featured[2]?.images[1] || featured[2]?.images[0] || ctx.fallbackGallery[2];
  const ctaImg = featured[4]?.images[1] || featured[4]?.images[0] || ctx.fallbackGallery[4];
  const variants = ["wide", "left", "right", "wide", "left", "right"];

  const body = html`
${hero(ctx, still)}

<section class="statement" id="intro">
  <p class="eyebrow reveal">The Studio</p>
  <p class="statement__text reveal">For more than thirty years, Lauren Rautbord has designed homes that feel like a deep breath: <em>uncluttered sanctuaries</em> of sumptuous fabrics, refined neutral palettes and furnishings full of warmth and personality.</p>
  <a class="link-arrow reveal" href="/studio/">Meet Lauren</a>
</section>

<section class="selected" aria-labelledby="selected-title">
  <div class="section-head section-head--split">
    <div>
      <p class="eyebrow">Portfolio</p>
      <h2 class="display-2" id="selected-title">Selected Work</h2>
    </div>
    <a class="link-arrow" href="/portfolio/">All ${ctx.projects.length} projects</a>
  </div>
  <div class="features">
    ${featured.map((p, i) => featureBlock(ctx, p, i, variants[i % variants.length]))}
  </div>
</section>

<section class="philosophy" aria-labelledby="philosophy-title">
  <div class="philosophy__media reveal">${ctx.media.img(philosophyImg, { alt: "A serene, neutral interior by Paul Lauren Designs", sizes: "(min-width: 900px) 50vw, 100vw", ratio: 4 / 5, label: "Philosophy" })}</div>
  <div class="philosophy__text">
    <p class="eyebrow">Philosophy</p>
    <h2 class="display-2" id="philosophy-title">Less is <em>always</em> more.</h2>
    <ol class="pillars">
      ${ctx.philosophy.pillars.map((pl, i) => `<li class="reveal"><span class="pillars__num">${pad2(i + 1)}</span><h3>${esc(pl.title)}</h3><p>${esc(pl.text)}</p></li>`)}
    </ol>
  </div>
</section>

<section class="quote" aria-label="From Lauren Rautbord">
  <blockquote class="reveal">
    <p>“${esc(ctx.philosophy.quote.replace(/^“|”$/g, ""))}”</p>
    <footer>— ${esc(ctx.philosophy.quoteBy)}, Principal Designer</footer>
  </blockquote>
</section>

<section class="services-teaser" aria-labelledby="services-title">
  <div class="section-head section-head--split">
    <div>
      <p class="eyebrow">Services</p>
      <h2 class="display-2" id="services-title">From first sketch to final pillow</h2>
    </div>
    <a class="link-arrow" href="/services/">All services</a>
  </div>
  <ol class="services-teaser__list">
    ${ctx.services.slice(0, 4).map((s, i) => `<li class="reveal"><a href="/services/#${s.id}"><span class="services-teaser__num">${pad2(i + 1)}</span><h3>${esc(s.title)}</h3><p>${esc(s.lede)}</p></a></li>`)}
  </ol>
</section>

${pressStrip(ctx)}

<section class="journal-teaser" aria-labelledby="journal-title">
  <div class="section-head section-head--split">
    <div>
      <p class="eyebrow">Journal</p>
      <h2 class="display-2" id="journal-title">Notes from the studio</h2>
    </div>
    <a class="link-arrow" href="/journal/">Read the journal</a>
  </div>
  <div class="journal-teaser__list">
    ${ctx.articles.slice(0, 3).map(
      (a) => html`<article class="post-card reveal">
        <a href="/journal/${a.slug}/">
          <div class="post-card__media">${ctx.media.img(a.image, { alt: a.title, sizes: "(min-width: 900px) 33vw, 100vw", ratio: 4 / 3, label: a.category })}</div>
          <p class="post-card__meta">${esc(a.category)} · <time datetime="${a.date}">${formatDate(a.date)}</time></p>
          <h3 class="post-card__title">${esc(a.title)}</h3>
        </a>
      </article>`,
    )}
  </div>
</section>

${instagramGrid(ctx)}

${ctaBand(ctx, { image: ctaImg })}
`;

  const heroImg = ctx.heroVideo?.poster || still;
  const heroPub = heroImg ? ctx.media.publish(heroImg, { folder: "home", name: "paul-lauren-designs-scottsdale-interior-design" }) : null;
  const preload = [];
  if (heroPub && !ctx.heroVideo) preload.push(`<link rel="preload" as="image" href="${heroPub.src}"${heroPub.srcset ? ` imagesrcset="${heroPub.srcset}" imagesizes="100vw"` : ""} fetchpriority="high">`);

  const jsonld = [
    organizationNode({ logoUrl: ctx.logoUrl, imageUrl: heroPub?.original, services: ctx.services }),
    personNode(),
    websiteNode(),
    webPageNode({ url: "/", title: `${site.name} — ${site.tagline}`, description: site.description, image: heroPub?.original }),
    ctx.heroVideo && {
      "@type": "VideoObject",
      name: `${site.name}: selected interiors`,
      description: "A short film of interiors designed by Paul Lauren Designs in Scottsdale, Chicago and the Mountain West.",
      contentUrl: abs(ctx.heroVideo.landscape),
      thumbnailUrl: heroPub ? abs(heroPub.original) : undefined,
      uploadDate: ctx.buildDate,
      publisher: { "@id": `${site.url}/#organization` },
    },
  ];

  return {
    url: "/",
    title: `${site.name} | Luxury Interior Designer in Scottsdale, AZ`,
    description:
      "The Scottsdale interior design studio of Lauren Rautbord: serene, uncluttered, quietly luxurious homes across Arizona, Chicago and the Mountain West.",
    headerMode: "overlay",
    bodyClass: "page-home",
    preload,
    jsonld,
    body,
  };
}
