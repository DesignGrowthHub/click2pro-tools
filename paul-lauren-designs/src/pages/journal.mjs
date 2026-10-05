import { site } from "../site.config.mjs";
import { esc, html, formatDate, wordCount } from "../lib/html.mjs";
import { breadcrumbNode, webPageNode, abs, ids } from "../lib/seo.mjs";
import { breadcrumbs, ctaBand, pageIntro, projectAlt } from "../templates/components.mjs";

const articleText = (a) => [a.description, ...a.sections.flatMap((s) => [s.h, ...s.p])].join(" ");
export const readingMinutes = (a) => Math.max(3, Math.round(wordCount(articleText(a)) / 230));

export function renderJournalIndex(ctx) {
  const [lead, ...rest] = ctx.articles;
  const body = html`
${pageIntro({
  trail: [{ name: "Journal", url: "/journal/" }],
  eyebrow: "Journal",
  title: "Notes from <em>the studio</em>",
  lede: "Ideas, guidance and inspiration on quietly luxurious living, from desert light to mountain retreats.",
})}
<section class="journal-lead reveal">
  <a href="/journal/${lead.slug}/">
    <div class="journal-lead__media">${ctx.media.img(lead.image, { alt: lead.title, sizes: "(min-width: 900px) 60vw, 100vw", ratio: 3 / 2, label: lead.category })}</div>
    <div class="journal-lead__text">
      <p class="post-card__meta">${esc(lead.category)} · <time datetime="${lead.date}">${formatDate(lead.date)}</time></p>
      <h2 class="display-2">${esc(lead.title)}</h2>
      <p>${esc(lead.description)}</p>
      <span class="link-arrow">Read the article</span>
    </div>
  </a>
</section>
<section class="journal-list">
  ${rest.map(
    (a) => html`<article class="post-card reveal"><a href="/journal/${a.slug}/">
      <div class="post-card__media">${ctx.media.img(a.image, { alt: a.title, sizes: "(min-width: 900px) 33vw, 100vw", ratio: 4 / 3, label: a.category })}</div>
      <p class="post-card__meta">${esc(a.category)} · <time datetime="${a.date}">${formatDate(a.date)}</time></p>
      <h3 class="post-card__title">${esc(a.title)}</h3>
      <p class="post-card__excerpt">${esc(a.description)}</p>
    </a></article>`,
  )}
</section>
`;
  return {
    url: "/journal/",
    title: "Journal | Interior Design Ideas & Guidance",
    description:
      "The Paul Lauren Designs journal: guidance on desert-modern interiors, neutral palettes, second homes and working with a luxury interior designer.",
    bodyClass: "page-journal",
    jsonld: [
      webPageNode({
        url: "/journal/",
        type: "CollectionPage",
        title: "Journal",
        description: "Interior design journal.",
        breadcrumb: true,
        extra: {
          mainEntity: {
            "@type": "Blog",
            name: `${site.name} Journal`,
            publisher: { "@id": ids.ORG },
            blogPost: ctx.articles.map((a) => ({ "@type": "BlogPosting", headline: a.title, url: abs(`/journal/${a.slug}/`), datePublished: a.date })),
          },
        },
      }),
      breadcrumbNode("/journal/", [{ name: "Journal", url: "/journal/" }]),
    ],
    body,
  };
}

export function renderArticle(ctx, a) {
  const url = `/journal/${a.slug}/`;
  const minutes = readingMinutes(a);
  const project = ctx.projects.find((p) => p.slug === a.imageFrom);
  const related = ctx.articles.filter((x) => x.slug !== a.slug).slice(0, 2);
  const imgPub = a.image ? ctx.media.publish(a.image, { folder: "journal", name: a.slug }) : null;
  const inline = project?.images[2] || project?.images[1] || null;
  const body = html`
<article class="article">
  <header class="article__header">
    ${breadcrumbs([{ name: "Journal", url: "/journal/" }, { name: a.title, url }])}
    <p class="eyebrow">${esc(a.category)}</p>
    <h1 class="display article__title">${esc(a.title)}</h1>
    <p class="article__dek">${esc(a.description)}</p>
    <p class="article__meta">By <a href="/studio/">${esc(site.name)}</a> · <time datetime="${a.date}">${formatDate(a.date)}</time> · ${minutes} min read</p>
  </header>
  <figure class="article__hero">${ctx.media.img(a.image, { alt: project ? projectAlt(project) : a.title, sizes: "100vw", priority: true, folder: "journal", name: a.slug, ratio: 16 / 9, label: a.title })}${project ? `<figcaption><a href="${project.path}">${esc(project.title)}</a> by ${esc(site.name)}</figcaption>` : ""}</figure>
  <div class="article__body prose">
    <aside class="takeaways" aria-label="Key takeaways">
      <p class="eyebrow">Key takeaways</p>
      <ul>${a.keyTakeaways.map((t) => `<li>${esc(t)}</li>`)}</ul>
    </aside>
    ${a.sections.map(
      (s, i) => html`<h2>${esc(s.h)}</h2>${s.p.map((p) => `<p>${esc(p)}</p>`)}${i === 1 && inline ? `<figure class="article__inline">${ctx.media.img(inline, { alt: projectAlt(project, 2), sizes: "(min-width: 900px) 720px, 100vw", folder: `projects/${project.slug}`, ratio: 3 / 2 })}<figcaption><a href="${project.path}">${esc(project.title)}</a></figcaption></figure>` : ""}`,
    )}
    <p class="article__sign">Considering a project? <a href="/contact/">Begin a conversation with the studio.</a></p>
  </div>
</article>
<section class="journal-related">
  <div class="section-head"><p class="eyebrow">Keep reading</p></div>
  <div class="journal-list journal-list--two">
    ${related.map(
      (r) => html`<article class="post-card"><a href="/journal/${r.slug}/">
        <div class="post-card__media">${ctx.media.img(r.image, { alt: r.title, sizes: "(min-width: 900px) 50vw, 100vw", ratio: 4 / 3, label: r.category })}</div>
        <p class="post-card__meta">${esc(r.category)}</p>
        <h3 class="post-card__title">${esc(r.title)}</h3>
      </a></article>`,
    )}
  </div>
</section>
${ctaBand(ctx, { image: project?.images[1] })}
`;
  return {
    url,
    title: a.seoTitle || a.title,
    description: a.description,
    ogType: "article",
    article: { published: a.date, section: a.category },
    ogImage: imgPub ? { url: imgPub.original, width: a.image.width, height: a.image.height, alt: a.title } : null,
    bodyClass: "page-article",
    jsonld: [
      webPageNode({ url, title: a.title, description: a.description, image: imgPub?.original, breadcrumb: true, extra: { mainEntity: { "@id": `${abs(url)}#article` } } }),
      {
        "@type": "BlogPosting",
        "@id": `${abs(url)}#article`,
        headline: a.title,
        description: a.description,
        datePublished: a.date,
        dateModified: a.date,
        articleSection: a.category,
        wordCount: wordCount(articleText(a)),
        timeRequired: `PT${minutes}M`,
        inLanguage: "en-US",
        author: { "@id": ids.ORG },
        publisher: { "@id": ids.ORG },
        mainEntityOfPage: { "@id": `${abs(url)}#webpage` },
        about: a.keyTakeaways,
        ...(imgPub ? { image: abs(imgPub.original) } : {}),
      },
      breadcrumbNode(url, [{ name: "Journal", url: "/journal/" }, { name: a.title, url }]),
    ],
    body,
  };
}

export function journalFeed(ctx) {
  const items = ctx.articles
    .map(
      (a) => `  <item>
    <title>${esc(a.title)}</title>
    <link>${abs(`/journal/${a.slug}/`)}</link>
    <guid>${abs(`/journal/${a.slug}/`)}</guid>
    <pubDate>${new Date(`${a.date}T12:00:00Z`).toUTCString()}</pubDate>
    <category>${esc(a.category)}</category>
    <description>${esc(a.description)}</description>
  </item>`,
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>${esc(site.name)} Journal</title>
  <link>${abs("/journal/")}</link>
  <atom:link href="${abs("/journal/feed.xml")}" rel="self" type="application/rss+xml"/>
  <description>${esc(site.shortDescription)}</description>
  <language>en-us</language>
${items}
</channel>
</rss>
`;
}
