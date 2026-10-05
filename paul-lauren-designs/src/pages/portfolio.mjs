import { site } from "../site.config.mjs";
import { esc, html, pad2 } from "../lib/html.mjs";
import { breadcrumbNode, webPageNode, imageObject, abs, ids } from "../lib/seo.mjs";
import { regions } from "../content/projects.mjs";
import { breadcrumbs, ctaBand, facts, pageIntro, projectAlt, projectCard, projectMeta } from "../templates/components.mjs";

export function renderPortfolio(ctx) {
  const used = new Set(ctx.projects.map((p) => p.region).filter(Boolean));
  const filters = Object.entries(regions).filter(([k]) => used.has(k));
  const body = html`
${pageIntro({
  trail: [{ name: "Portfolio", url: "/portfolio/" }],
  eyebrow: `${ctx.projects.length} Residences`,
  title: "Portfolio",
  lede: "Serene sanctuaries in the desert, the city, the mountains and on the water. Each one is uncluttered and sumptuous, and made to be lived in.",
})}
<div class="filters" role="group" aria-label="Filter projects by region">
  <button type="button" class="filter is-active" data-filter="all" aria-pressed="true">All</button>
  ${filters.map(([k, label]) => `<button type="button" class="filter" data-filter="${k}" aria-pressed="false">${esc(label)}</button>`)}
</div>
<section class="portfolio-grid" aria-label="Projects">
  ${ctx.projects.map((p, i) => projectCard(ctx, p, i, { sizes: "(min-width: 1100px) 50vw, (min-width: 700px) 50vw, 100vw" }))}
</section>
${ctaBand(ctx, { image: ctx.fallbackGallery[6] })}
`;
  const jsonld = [
    webPageNode({
      url: "/portfolio/",
      type: "CollectionPage",
      title: "Portfolio",
      description: "Interior design portfolio of Paul Lauren Designs.",
      breadcrumb: true,
      extra: {
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: ctx.projects.length,
          itemListElement: ctx.projects.map((p, i) => ({ "@type": "ListItem", position: i + 1, url: abs(p.path), name: p.title })),
        },
      },
    }),
    breadcrumbNode("/portfolio/", [{ name: "Portfolio", url: "/portfolio/" }]),
  ];
  return {
    url: "/portfolio/",
    title: "Interior Design Portfolio: Scottsdale, Chicago & Mountain Homes",
    description:
      "Explore 20 luxury interiors by Paul Lauren Designs: Silverleaf and Biltmore residences, a West Loop loft, Aspen and Sun Valley renovations, lake houses and cabins.",
    bodyClass: "page-portfolio",
    jsonld,
    body,
  };
}

// Groups gallery images into editorial rows by real orientation:
// landscapes alternate full-bleed / side-by-side, portraits pair up, and a
// lone portrait sits offset with generous white space.
function galleryRows(images) {
  const rows = [];
  const isLand = (r) => !r?.width || r.width / r.height >= 1.05;
  let i = 0;
  let landRun = 0;
  let offsetSide = "left";
  while (i < images.length) {
    const a = images[i];
    const b = images[i + 1];
    if (isLand(a)) {
      if (landRun % 2 === 0 || !b || !isLand(b)) {
        rows.push({ kind: "full", items: [a] });
        i += 1;
      } else {
        rows.push({ kind: "pair", items: [a, b] });
        i += 2;
      }
      landRun++;
    } else if (b && !isLand(b)) {
      rows.push({ kind: "pair-portrait", items: [a, b] });
      i += 2;
    } else {
      rows.push({ kind: "offset", side: offsetSide, items: [a] });
      offsetSide = offsetSide === "left" ? "right" : "left";
      i += 1;
    }
  }
  return rows;
}

export function renderProject(ctx, p, index) {
  const next = ctx.projects[(index + 1) % ctx.projects.length];
  const [cover, ...rest] = p.images;
  const coverIsLandscape = !cover || ctx.media.ratioOf(cover) >= 1.05;
  const imgOpts = (k, sizes, ratio) => ({
    alt: projectAlt(p, k),
    sizes,
    folder: `projects/${p.slug}`,
    name: `${p.slug}-paul-lauren-designs-${pad2(k + 1)}`,
    ratio,
    label: `${p.title}${k ? ` · ${pad2(k + 1)}` : ""}`,
  });
  const coverHtml = ctx.media.img(cover, { ...imgOpts(0, "100vw", 16 / 9), priority: true });
  const placeholderRest = rest.length ? rest : Array.from({ length: 6 }, () => null).map((_, k) => ({ __ph: true, ratio: [3 / 2, 2 / 3, 2 / 3, 3 / 2, 3 / 2, 4 / 5][k] }));
  const rows = galleryRows(placeholderRest.map((r) => (r?.__ph ? { width: r.ratio * 1000, height: 1000, __ph: true } : r)));
  let k = 0;
  const gallery = rows.map((row) => {
    const sizes = row.kind === "full" ? "100vw" : row.kind === "offset" ? "(min-width: 900px) 45vw, 100vw" : "(min-width: 900px) 50vw, 100vw";
    const figures = row.items.map((r) => {
      k++;
      const rec = r.__ph ? null : r;
      const ratio = r.width / r.height;
      return `<figure class="gallery__item">${rec ? `<button class="gallery__zoom" type="button" aria-label="Enlarge image ${k + 1}">` : ""}${ctx.media.img(rec, imgOpts(k, sizes, ratio))}${rec ? "</button>" : ""}</figure>`;
    });
    const side = row.side ? ` gallery__row--offset-${row.side}` : "";
    return `<div class="gallery__row gallery__row--${row.kind}${side} reveal">${figures.join("")}</div>`;
  });

  const intro = p.liveText?.length ? p.liveText : [p.summary];
  const details = [
    p.location && ["Location", esc(p.location)],
    ["Type", esc(p.type)],
    p.region && ["Region", esc(regions[p.region])],
    ["Interior design", `<a href="/studio/">${esc(site.name)}</a>`],
    ["Principal", "Lauren Rautbord"],
  ].filter(Boolean);

  const coverPub = cover ? ctx.media.publish(cover, { folder: `projects/${p.slug}`, name: `${p.slug}-paul-lauren-designs-01` }) : null;
  const body = html`
<article class="project" itemscope itemtype="https://schema.org/CreativeWork">
  <header class="project-hero ${coverIsLandscape ? "project-hero--full" : "project-hero--split"}">
    <div class="project-hero__media">${coverHtml}</div>
    <div class="project-hero__text">
      ${breadcrumbs([{ name: "Portfolio", url: "/portfolio/" }, { name: p.title, url: p.path }])}
      <p class="eyebrow">${esc(projectMeta(p) || p.type)}</p>
      <h1 class="display" itemprop="name">${esc(p.title)}</h1>
    </div>
  </header>

  <section class="project-intro">
    ${facts(details)}
    <div class="project-intro__text" itemprop="description">
      ${intro.map((t, i) => `<p${i === 0 ? ' class="lead"' : ""}>${esc(t)}</p>`)}
      <a class="link-arrow" href="/contact/?project=${encodeURIComponent(p.title)}">Inquire about a similar project</a>
    </div>
  </section>

  <section class="gallery" aria-label="${esc(p.title)} gallery">
    ${gallery}
  </section>
</article>

<nav class="next-project" aria-label="Next project">
  <a href="${next.path}">
    <div class="next-project__media">${ctx.media.img(next.images[0], { alt: projectAlt(next), sizes: "100vw", folder: `projects/${next.slug}`, name: `${next.slug}-paul-lauren-designs-01`, ratio: 21 / 9, label: next.title })}</div>
    <div class="next-project__text">
      <p class="eyebrow eyebrow--light">Next project</p>
      <p class="display-2">${esc(next.title)}</p>
    </div>
  </a>
</nav>
<p class="back-link"><a class="link-arrow link-arrow--back" href="/portfolio/">Back to portfolio</a></p>
`;

  const description = `${p.title}${p.location ? `, ${p.location}` : ""}: a ${p.type.toLowerCase()} by Scottsdale interior designer Lauren Rautbord of Paul Lauren Designs. ${p.summary}`.slice(0, 158).replace(/\s+\S*$/, "…");
  const images = p.images.map((r, n) => {
    const pub = ctx.media.publish(r, { folder: `projects/${p.slug}`, name: `${p.slug}-paul-lauren-designs-${pad2(n + 1)}` });
    return imageObject({ url: pub.original, width: r.width, height: r.height }, projectAlt(p, n));
  });
  const jsonld = [
    webPageNode({ url: p.path, title: p.title, description, image: coverPub?.original, breadcrumb: true, extra: { mainEntity: { "@id": `${abs(p.path)}#project` } } }),
    {
      "@type": "CreativeWork",
      "@id": `${abs(p.path)}#project`,
      name: p.title,
      genre: "Interior design",
      description: p.summary,
      creator: { "@id": ids.ORG },
      contributor: { "@id": ids.PERSON },
      ...(p.location ? { locationCreated: { "@type": "Place", name: p.location } } : {}),
      ...(images.length ? { image: images } : {}),
    },
    breadcrumbNode(p.path, [{ name: "Portfolio", url: "/portfolio/" }, { name: p.title, url: p.path }]),
  ];
  return {
    url: p.path,
    title: `${p.title}${p.location && !p.title.includes(p.location.split(",")[0]) ? ` | ${p.location.split(",").slice(-2).join(",").trim()}` : ""} Interior Design`,
    description,
    ogImage: coverPub ? { url: coverPub.original, width: cover.width, height: cover.height, alt: projectAlt(p) } : null,
    headerMode: coverIsLandscape && cover ? "overlay" : "solid",
    bodyClass: "page-project",
    preload: coverPub ? [`<link rel="preload" as="image" href="${coverPub.src}"${coverPub.srcset ? ` imagesrcset="${coverPub.srcset}" imagesizes="100vw"` : ""} fetchpriority="high">`] : [],
    jsonld,
    body,
  };
}
