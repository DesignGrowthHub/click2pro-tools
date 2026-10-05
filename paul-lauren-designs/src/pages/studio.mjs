import { site, fullAddress } from "../site.config.mjs";
import { esc, html, pad2 } from "../lib/html.mjs";
import { breadcrumbNode, faqNode, webPageNode, personNode, partnerNode, organizationNode, abs, ids } from "../lib/seo.mjs";
import { regions } from "../content/projects.mjs";
import { breadcrumbs, ctaBand, facts, pageIntro, pressStrip, projectAlt } from "../templates/components.mjs";

const crumb = (name, url) => [{ name, url }];

export function renderStudio(ctx) {
  const studioImgs = ctx.media.pageImagesFor("/studio/").filter((r) => r.width >= 500);
  const portrait = ctx.media.record(ctx.manualPortrait) || studioImgs.find((r) => r.height > r.width) || studioImgs[0] || null;
  const wide = studioImgs.find((r) => r !== portrait && r.width > r.height) || ctx.fallbackGallery[1];
  const portraitPub = portrait ? ctx.media.publish(portrait, { folder: "studio", name: "lauren-rautbord-interior-designer-scottsdale" }) : null;
  const body = html`
<section class="studio-hero">
  <div class="studio-hero__media reveal">${ctx.media.img(portrait, { alt: "Lauren Rautbord, principal designer of Paul Lauren Designs", sizes: "(min-width: 900px) 45vw, 100vw", priority: true, folder: "studio", name: "lauren-rautbord-interior-designer-scottsdale", ratio: 4 / 5, label: "Portrait of Lauren Rautbord" })}</div>
  <div class="studio-hero__text">
    ${breadcrumbs(crumb("Studio", "/studio/"))}
    <p class="eyebrow">The Studio</p>
    <h1 class="display">Lauren Rautbord</h1>
    <p class="lead">Principal designer and founder of Paul Lauren Designs. For more than thirty years Lauren has created serene, uncluttered and quietly luxurious homes, first in Chicago and now from her studio in Scottsdale, Arizona.</p>
  </div>
</section>

${(() => {
  const k = ctx.team[1];
  const rec = ctx.media.record(ctx.partnerPortrait);
  return html`<section class="studio-hero studio-hero--flip" id="${k.id}">
  <div class="studio-hero__media reveal">${ctx.media.img(rec, { alt: `${k.name}, ${k.role} at Paul Lauren Designs`, sizes: "(min-width: 900px) 42vw, 100vw", folder: "studio", name: `${k.id}-interior-designer-scottsdale`, ratio: 4 / 5, label: `Portrait of ${k.name}` })}</div>
  <div class="studio-hero__text">
    <p class="eyebrow">${esc(k.role)}</p>
    <h2 class="display">${esc(k.name)}</h2>
    ${k.bio.map((t, i) => `<p${i === 0 ? ' class="lead"' : ""}>${esc(t)}</p>`)}
  </div>
</section>`;
})()}

<section class="prose-split">
  <div class="prose-split__aside">
    ${facts([
      ["Principal designer", "Lauren Rautbord"],
      ["Partner", "Kendra Vaughn"],
      ["Experience", "30+ years in interior design"],
      ["Trained", "Harrington School of Design, Chicago"],
      ["Founded with", "The late Paul Marchetti, a celebrated Chicago style maker"],
      ["Studio", `${esc(site.address.city)}, ${esc(site.address.regionName)}`],
      ["Work across", "Arizona · Chicago & the North Shore · Colorado · Idaho · California"],
      ["Signature", "Sumptuous fabrics, refined neutral palettes, vintage meets contemporary"],
    ])}
  </div>
  <div class="prose-split__body prose">
    <h2 class="display-3">A studio that stays personal</h2>
    <p>Paul Lauren Designs began in Chicago, where Lauren founded the firm with the late Paul Marchetti, for decades one of the city's leading style makers. Lauren trained at the Harrington School of Design and built a loyal clientele across the Upper Midwest before bringing the studio to Scottsdale, where it now designs homes throughout the Valley and in mountain and lake towns across the West.</p>
    <p>Her rooms are recognizable for their calm. Luxurious fabrics, refined neutral palettes and furnishings full of warmth and personality come together in spaces that are sophisticated but never fussy. Vintage and contemporary pieces sit easily side by side. Lauren holds that less is always more and that a home's views should be embraced and enjoyed.</p>
    <p>The studio is deliberately small. Every client works directly with Lauren and Kendra, and every selection is considered, never hurried or made off the shelf.</p>
  </div>
</section>

<section class="quote quote--inline" aria-label="From Lauren Rautbord">
  <blockquote class="reveal">
    <p>“${esc(ctx.philosophy.quote)}”</p>
    <footer>— Lauren Rautbord</footer>
  </blockquote>
</section>

<section class="wide-image reveal">${ctx.media.img(wide, { alt: "Interior by Paul Lauren Designs", sizes: "100vw", ratio: 21 / 9, label: "Studio" })}</section>

<section class="pillars-section">
  <div class="section-head"><p class="eyebrow">Philosophy</p><h2 class="display-2">What guides every room</h2></div>
  <ol class="pillars pillars--grid">
    ${ctx.philosophy.pillars.map((pl, i) => `<li class="reveal"><span class="pillars__num">${pad2(i + 1)}</span><h3>${esc(pl.title)}</h3><p>${esc(pl.text)}</p></li>`)}
  </ol>
</section>

${pressStrip(ctx)}
${ctaBand(ctx, { image: ctx.fallbackGallery[3] })}
`;
  return {
    url: "/studio/",
    title: "The Studio: Lauren Rautbord & Kendra Vaughn",
    description:
      "Meet Lauren Rautbord, founder and principal designer, and partner Kendra Vaughn: the designers behind Paul Lauren Designs' serene, luxurious Scottsdale interiors.",
    bodyClass: "page-studio",
    ogImage: portraitPub ? { url: portraitPub.original, width: portrait.width, height: portrait.height, alt: "Lauren Rautbord" } : null,
    jsonld: [
      webPageNode({ url: "/studio/", type: "AboutPage", title: "The Studio", description: "About Lauren Rautbord and Paul Lauren Designs.", breadcrumb: true, extra: { mainEntity: { "@id": ids.PERSON } } }),
      personNode({ imageUrl: portraitPub?.original }),
      partnerNode(),
      organizationNode({ logoUrl: ctx.logoUrl }),
      breadcrumbNode("/studio/", crumb("Studio", "/studio/")),
    ],
    body,
  };
}

export function renderServices(ctx) {
  const imgs = ctx.fallbackGallery;
  const body = html`
${pageIntro({
  trail: crumb("Services", "/services/"),
  eyebrow: "Services",
  title: "From first sketch <em>to final pillow</em>",
  lede: "Full-service interior design for new construction, renovation and furnishing in Scottsdale, Paradise Valley and Phoenix, and for second homes across the West.",
})}
<section class="services">
  ${ctx.services.map(
    (s, i) => html`
  <article class="service ${i % 2 ? "service--flip" : ""}" id="${s.id}">
    <div class="service__media reveal">${ctx.media.img(imgs[(i * 2 + 1) % Math.max(imgs.length, 1)] || null, { alt: `${s.title} by Paul Lauren Designs`, sizes: "(min-width: 900px) 50vw, 100vw", ratio: 4 / 5, label: s.title })}</div>
    <div class="service__text">
      <span class="service__num">${pad2(i + 1)}</span>
      <h2 class="display-3">${esc(s.title)}</h2>
      <p class="lead">${esc(s.lede)}</p>
      <p>${esc(s.text)}</p>
      <ul class="ticks">${s.includes.map((x) => `<li>${esc(x)}</li>`)}</ul>
    </div>
  </article>`,
  )}
</section>
<section class="band">
  <p class="eyebrow">How it works</p>
  <p class="display-3">Six considered stages, with one designer throughout.</p>
  <a class="button" href="/process/">See our process</a>
</section>
${ctaBand(ctx, { image: imgs[8] })}
`;
  return {
    url: "/services/",
    title: "Interior Design Services: New Build, Renovation & Furnishing",
    description:
      "Full-service luxury interior design from Paul Lauren Designs in Scottsdale: new construction, renovation, furnishing, turnkey second homes and design consultation.",
    bodyClass: "page-services",
    jsonld: [
      webPageNode({ url: "/services/", title: "Services", description: "Interior design services.", breadcrumb: true }),
      ...ctx.services.map((s) => ({
        "@type": "Service",
        "@id": abs(`/services/#${s.id}`),
        name: s.title,
        serviceType: s.title,
        description: `${s.lede} ${s.text}`,
        provider: { "@id": ids.ORG },
        areaServed: site.areaServed.map((name) => ({ "@type": "Place", name })),
      })),
      breadcrumbNode("/services/", crumb("Services", "/services/")),
    ],
    body,
  };
}

export function renderProcess(ctx) {
  const imgs = ctx.fallbackGallery;
  const body = html`
${pageIntro({
  trail: crumb("Process", "/process/"),
  eyebrow: "Our Process",
  title: "A calm, <em>considered</em> process",
  lede: "Beautiful homes come from clear conversations and careful decisions. Here is how a project with Paul Lauren Designs unfolds.",
})}
<ol class="steps">
  ${ctx.process.map(
    (s, i) => `<li class="step reveal"><span class="step__num">${pad2(i + 1)}</span><div><h2 class="display-3">${esc(s.title)}</h2><p>${esc(s.text)}</p></div></li>`,
  )}
</ol>
<section class="wide-image reveal">${ctx.media.img(imgs[5] || null, { alt: "Finished interior by Paul Lauren Designs", sizes: "100vw", ratio: 21 / 9, label: "Process" })}</section>
<section class="faq-teaser">
  <div class="section-head"><p class="eyebrow">Questions</p><h2 class="display-2">Frequently asked</h2></div>
  ${faqList(ctx.faqs.slice(6, 10))}
  <a class="link-arrow" href="/faq/">All questions</a>
</section>
${ctaBand(ctx, { image: imgs[9] })}
`;
  return {
    url: "/process/",
    title: "Our Interior Design Process | What to Expect",
    description:
      "How a luxury interior design project works with Paul Lauren Designs: introduction, discovery, concept, design development, procurement and installation.",
    bodyClass: "page-process",
    jsonld: [
      webPageNode({ url: "/process/", title: "Our Process", description: "The interior design process.", breadcrumb: true }),
      {
        "@type": "HowTo",
        name: "How a Paul Lauren Designs interior design project works",
        step: ctx.process.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.text })),
      },
      breadcrumbNode("/process/", crumb("Process", "/process/")),
    ],
    body,
  };
}

export function faqList(list) {
  return html`<div class="faq">${list.map(
    (f) => `<details class="faq__item"><summary><h3>${esc(f.q)}</h3><span class="faq__icon" aria-hidden="true"></span></summary><div class="faq__answer"><p>${esc(f.a)}</p></div></details>`,
  )}</div>`;
}

export function renderFaq(ctx) {
  const body = html`
${pageIntro({
  trail: crumb("FAQ", "/faq/"),
  eyebrow: "FAQ",
  title: "Questions, <em>answered</em>",
  lede: "About the studio, its designers and how a project works. Can't find what you're looking for? <a href=\"/contact/\">Ask us directly.</a>",
})}
<section class="faq-page">${faqList(ctx.faqs)}</section>
${ctaBand(ctx, { image: ctx.fallbackGallery[7] })}
`;
  return {
    url: "/faq/",
    title: "Interior Design FAQ | Paul Lauren Designs, Scottsdale",
    description:
      "Answers about Paul Lauren Designs: Lauren Rautbord's style, areas served, new construction, second homes, timelines and how to start a project.",
    bodyClass: "page-faq",
    jsonld: [webPageNode({ url: "/faq/", title: "FAQ", description: "Frequently asked questions.", breadcrumb: true }), faqNode("/faq/", ctx.faqs), breadcrumbNode("/faq/", crumb("FAQ", "/faq/"))],
    body,
  };
}

export function renderFeatured(ctx) {
  const liveImgs = ctx.media.pageImagesFor("/featured/").filter((r) => r.width >= 300);
  const liveText = ctx.featuredLiveHeadings;
  const body = html`
${pageIntro({
  trail: crumb("Featured", "/featured/"),
  eyebrow: "Press",
  title: "Featured",
  lede: "Paul Lauren Designs interiors in print and online.",
})}
<section class="press-list">
  ${ctx.press.map(
    (p) => html`<article class="press-item reveal">
      <p class="press-item__outlet">${esc(p.outlet)}</p>
      <h2 class="display-3">${p.url ? `<a href="${p.url}" rel="noopener" target="_blank">${esc(p.title)}</a>` : esc(p.title)}</h2>
      ${p.date ? `<p class="press-item__date"><time datetime="${p.dateISO}">${esc(p.date)}</time></p>` : ""}
      <p>${esc(p.note)}</p>
    </article>`,
  )}
</section>
${liveImgs.length
  ? html`<section class="press-covers" aria-label="Features and publications">
      ${liveImgs.map((r, i) => `<figure class="reveal">${ctx.media.img(r, { alt: liveText[i] || `Paul Lauren Designs feature ${i + 1}`, sizes: "(min-width: 900px) 33vw, 50vw", folder: "featured", name: `paul-lauren-designs-featured-${pad2(i + 1)}` })}${liveText[i] ? `<figcaption>${esc(liveText[i])}</figcaption>` : ""}</figure>`)}
    </section>`
  : ""}
${pressStrip(ctx, { title: "Publications" })}
${ctaBand(ctx, { image: ctx.fallbackGallery[10] })}
`;
  return {
    url: "/featured/",
    title: "Featured & Press | Paul Lauren Designs",
    description: "Press and publications featuring Paul Lauren Designs and principal designer Lauren Rautbord, including Phoenix Home & Garden.",
    bodyClass: "page-featured",
    jsonld: [
      webPageNode({
        url: "/featured/",
        type: "CollectionPage",
        title: "Featured",
        description: "Press features.",
        breadcrumb: true,
        extra: {
          mentions: ctx.press.filter((p) => p.url).map((p) => ({ "@type": "Article", headline: p.title, url: p.url, publisher: { "@type": "Organization", name: p.outlet }, ...(p.dateISO ? { datePublished: p.dateISO } : {}) })),
        },
      }),
      breadcrumbNode("/featured/", crumb("Featured", "/featured/")),
    ],
    body,
  };
}

const AREA_COPY = {
  arizona: {
    title: "Scottsdale, Paradise Valley & Phoenix",
    text: "Our home base. From the studio in North Scottsdale, Paul Lauren Designs creates homes across the Valley, including Silverleaf and DC Ranch in North Scottsdale and the Biltmore area in Phoenix. These interiors are composed for desert light and framed by the mountains.",
    link: { href: "/scottsdale-interior-designer/", label: "Scottsdale interior design" },
  },
  chicago: {
    title: "Chicago & the North Shore",
    text: "Where the studio began. Lauren's Chicago roots run deep, and the firm continues to design for clients in the city and on the North Shore, from a West Loop residence to a family home in Wilmette.",
  },
  mountain: {
    title: "Mountain & Lake Homes",
    text: "Second homes and retreats in Aspen, Sun Valley and Coeur d'Alene, along with cabins and lake houses designed for long summers, ski seasons and unhurried weekends. Many are delivered fully turnkey.",
    link: { href: "/journal/turnkey-second-homes/", label: "Furnishing a second home" },
  },
  california: {
    title: "California",
    text: "Coastal living in Pacific Palisades, kept light and airy and led by the setting.",
  },
};

export function renderAreas(ctx) {
  const groups = Object.keys(regions).map((key) => ({ key, ...AREA_COPY[key], projects: ctx.projects.filter((p) => p.region === key) }));
  const body = html`
${pageIntro({
  trail: crumb("Areas We Serve", "/areas-we-serve/"),
  eyebrow: "Areas We Serve",
  title: "Scottsdale studio, <em>homes across the West</em>",
  lede: `From ${esc(fullAddress())}, Paul Lauren Designs works throughout the Phoenix Valley and travels for clients in Chicago, the mountains and on the coast.`,
})}
${groups.map(
  (g) => html`<section class="area reveal" id="${g.key}">
    <div class="area__text">
      <h2 class="display-3">${esc(g.title)}</h2>
      <p>${esc(g.text)}</p>
      ${g.link ? `<a class="link-arrow" href="${g.link.href}">${esc(g.link.label)}</a>` : ""}
    </div>
    <ul class="area__projects">
      ${g.projects.map((p) => `<li><a href="${p.path}"><div class="area__thumb">${ctx.media.img(p.images[0], { alt: projectAlt(p), sizes: "(min-width: 900px) 20vw, 45vw", folder: `projects/${p.slug}`, name: `${p.slug}-paul-lauren-designs-01`, ratio: 4 / 5, label: p.title })}</div><span>${esc(p.title)}</span></a></li>`)}
    </ul>
  </section>`,
)}
${ctaBand(ctx, { image: ctx.fallbackGallery[11] })}
`;
  return {
    url: "/areas-we-serve/",
    title: "Areas We Serve: Scottsdale, Phoenix, Chicago & the West",
    description:
      "Paul Lauren Designs serves Scottsdale, Paradise Valley and Phoenix from its North Scottsdale studio, with homes in Chicago, Aspen, Sun Valley and Coeur d'Alene.",
    bodyClass: "page-areas",
    jsonld: [
      webPageNode({ url: "/areas-we-serve/", title: "Areas We Serve", description: "Service areas.", breadcrumb: true }),
      organizationNode({ logoUrl: ctx.logoUrl }),
      breadcrumbNode("/areas-we-serve/", crumb("Areas We Serve", "/areas-we-serve/")),
    ],
    body,
  };
}

export function renderScottsdale(ctx) {
  const az = ctx.projects.filter((p) => p.region === "arizona");
  const lead = az[0]?.images[0];
  const body = html`
${pageIntro({
  trail: crumb("Scottsdale Interior Designer", "/scottsdale-interior-designer/"),
  eyebrow: "Scottsdale, Arizona",
  title: "Scottsdale Interior Designer",
  lede: "Paul Lauren Designs is a luxury interior design studio in North Scottsdale led by Lauren Rautbord, creating serene, uncluttered homes for desert living.",
})}
<section class="wide-image reveal">${ctx.media.img(lead, { alt: az[0] ? projectAlt(az[0]) : "Scottsdale interior", sizes: "100vw", ratio: 21 / 9, label: "Scottsdale residence" })}</section>
<section class="prose-split">
  <div class="prose-split__aside">
    ${facts([
      ["Studio", `${esc(site.address.street)}<br>${esc(site.address.city)}, ${site.address.region} ${site.address.postal}`],
      ["Phone", `<a href="tel:${site.phoneE164}">${site.phone}</a>`],
      ["Email", `<a href="mailto:${site.email}">${site.email}</a>`],
      ["Principal", "Lauren Rautbord, 30+ years"],
      ["Partner", "Kendra Vaughn"],
      ["Valley projects", az.map((p) => `<a href="${p.path}">${esc(p.title)}</a>`).join("<br>")],
    ])}
  </div>
  <div class="prose-split__body prose">
    <h2 class="display-3">Interior design for the way the desert lives</h2>
    <p>Designing in Scottsdale means designing with the light. Clear mornings, white-bright middays and long golden evenings across the McDowell Mountains all shape how a room feels. Lauren Rautbord's interiors are composed for that light: refined neutral palettes that glow rather than glare, sumptuous natural textures, and furniture arranged so the view is part of every room.</p>
    <p>The studio works on new construction alongside the Valley's architects and builders, on renovations, and on complete furnishing projects. Its Scottsdale work includes residences in <a href="${ctx.pathOf("the-village-of-silverleaf")}">Silverleaf</a>, a <a href="${ctx.pathOf("silverleaf-modern-ranch")}">modern ranch</a>, a <a href="${ctx.pathOf("silverleaf-mediterranean")}">Mediterranean</a> home and a <a href="${ctx.pathOf("silverleaf-transitional")}">transitional</a> one, and across town a <a href="${ctx.pathOf("biltmore-residence")}">Biltmore residence</a> in Phoenix.</p>
    <h2 class="display-3">Why clients choose Paul Lauren Designs</h2>
    <ul class="ticks">
      <li>Direct access to the principal designer on every decision</li>
      <li>More than thirty years of experience, from Chicago to the desert</li>
      <li>A signature look of calm, quiet luxury that never feels fussy</li>
      <li>Full service from plans to the final styled install</li>
    </ul>
    <p><a class="link-arrow" href="/journal/designing-for-desert-light/">Read: Designing for desert light</a></p>
  </div>
</section>
<section class="faq-teaser">
  <div class="section-head"><p class="eyebrow">Questions</p><h2 class="display-2">Working with a Scottsdale designer</h2></div>
  ${faqList([ctx.faqs[1], ctx.faqs[2], ctx.faqs[4], ctx.faqs[9]])}
</section>
${ctaBand(ctx, { title: "Designing a home in Scottsdale?", image: az[1]?.images[0] })}
`;
  return {
    url: "/scottsdale-interior-designer/",
    title: "Scottsdale Interior Designer | Luxury Interior Design Studio",
    description:
      "Luxury interior design studio in North Scottsdale. Lauren Rautbord and Kendra Vaughn design serene new builds, renovations and furnished homes across the Valley.",
    bodyClass: "page-local",
    jsonld: [
      webPageNode({ url: "/scottsdale-interior-designer/", title: "Scottsdale Interior Designer", description: "Luxury interior design in Scottsdale, AZ.", breadcrumb: true }),
      organizationNode({ logoUrl: ctx.logoUrl, services: ctx.services }),
      faqNode("/scottsdale-interior-designer/", [ctx.faqs[1], ctx.faqs[2], ctx.faqs[4], ctx.faqs[9]]),
      breadcrumbNode("/scottsdale-interior-designer/", crumb("Scottsdale Interior Designer", "/scottsdale-interior-designer/")),
    ],
    body,
  };
}
