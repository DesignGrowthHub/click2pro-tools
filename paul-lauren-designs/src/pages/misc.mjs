import { site, fullAddress } from "../site.config.mjs";
import { esc, html } from "../lib/html.mjs";
import { breadcrumbNode, webPageNode, organizationNode } from "../lib/seo.mjs";
import { breadcrumbs, pageIntro } from "../templates/components.mjs";

export function renderContact(ctx) {
  const image = ctx.fallbackGallery[0];
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${site.name} ${fullAddress()}`)}`;
  const body = html`
<section class="contact">
  <div class="contact__intro">
    ${breadcrumbs([{ name: "Contact", url: "/contact/" }])}
    <p class="eyebrow">Contact</p>
    <h1 class="display">Begin a <em>conversation</em></h1>
    <p class="lead">Tell us about your home, your timeline and what you'd love it to feel like. Lauren will be in touch personally.</p>
    <div class="contact__details">
      <div>
        <p class="eyebrow">Studio</p>
        <address><a href="${mapsUrl}" rel="noopener" target="_blank">${esc(site.address.street)}<br>${esc(site.address.city)}, ${site.address.region} ${site.address.postal}</a></address>
        <p class="muted">${esc(site.hours)}</p>
      </div>
      <div>
        <p class="eyebrow">Call or write</p>
        <p><a href="tel:${site.phoneE164}">${site.phone}</a><br><a href="mailto:${site.email}">${site.email}</a></p>
      </div>
      <div>
        <p class="eyebrow">Follow</p>
        <p><a href="${site.social.instagram.url}" rel="noopener" target="_blank">Instagram</a><br><a href="${site.social.facebook.url}" rel="noopener" target="_blank">Facebook</a></p>
      </div>
    </div>
  </div>
  <form class="contact-form" method="post" action="${esc(site.formEndpoint || `mailto:${site.email}`)}" data-endpoint="${esc(site.formEndpoint)}" data-email="${site.email}" novalidate>
    <div class="field-row">
      <label class="field"><span>Name</span><input name="name" autocomplete="name" required></label>
      <label class="field"><span>Email</span><input name="email" type="email" autocomplete="email" required></label>
    </div>
    <div class="field-row">
      <label class="field"><span>Phone</span><input name="phone" type="tel" autocomplete="tel"></label>
      <label class="field"><span>Project location</span><input name="location" placeholder="e.g. Scottsdale, AZ"></label>
    </div>
    <div class="field-row">
      <label class="field"><span>Project type</span>
        <select name="type">
          <option value="">Select…</option>
          <option>New construction</option>
          <option>Renovation</option>
          <option>Furnishing an existing home</option>
          <option>Second home / turnkey</option>
          <option>Design consultation</option>
          <option>Other</option>
        </select>
      </label>
      <label class="field"><span>Timeline</span>
        <select name="timeline">
          <option value="">Select…</option>
          <option>As soon as possible</option>
          <option>Within 6 months</option>
          <option>6–12 months</option>
          <option>12 months +</option>
        </select>
      </label>
    </div>
    <label class="field"><span>Tell us about your project</span><textarea name="message" rows="6" required></textarea></label>
    <input type="hidden" name="project" value="">
    <label class="hp" aria-hidden="true">Leave empty<input name="company_website" tabindex="-1" autocomplete="off"></label>
    <button class="button" type="submit">Send inquiry</button>
    <p class="form-status" role="status" aria-live="polite"></p>
  </form>
</section>
<section class="wide-image reveal">${ctx.media.img(image, { alt: "Interior by Paul Lauren Designs", sizes: "100vw", ratio: 21 / 9, label: "Studio interior" })}</section>
`;
  return {
    url: "/contact/",
    title: "Contact | Scottsdale Interior Design Studio",
    description: `Contact Paul Lauren Designs in Scottsdale, AZ. Call ${site.phone} or email ${site.email} to begin your interior design project.`,
    bodyClass: "page-contact",
    jsonld: [
      webPageNode({ url: "/contact/", type: "ContactPage", title: "Contact", description: "Contact Paul Lauren Designs.", breadcrumb: true }),
      organizationNode({ logoUrl: ctx.logoUrl }),
      breadcrumbNode("/contact/", [{ name: "Contact", url: "/contact/" }]),
    ],
    body,
  };
}

function legalPage({ url, title, description, sections }) {
  const body = html`
${pageIntro({ trail: [{ name: title, url }], title, cls: "page-intro--compact" })}
<section class="legal prose">
  ${sections.map(([h, ps]) => `<h2>${esc(h)}</h2>${ps.map((p) => `<p>${p}</p>`).join("")}`)}
</section>`;
  return { url, title, description, bodyClass: "page-legal", jsonld: [webPageNode({ url, title, description, breadcrumb: true }), breadcrumbNode(url, [{ name: title, url }])], body };
}

export const renderPrivacy = () =>
  legalPage({
    url: "/privacy-policy/",
    title: "Privacy Policy",
    description: "How Paul Lauren Designs collects, uses and protects personal information.",
    sections: [
      ["Overview", [`This policy explains how ${esc(site.legalName)} (“${esc(site.name)}”, “we”) handles personal information collected through this website.`]],
      ["Information we collect", ["Information you choose to send us through the contact form or by email or phone, such as your name, email address, phone number, project location and project details. Like most websites, our hosting provider may also record basic technical information (for example IP address, browser type and pages visited) in server logs."]],
      ["How we use it", ["We use your information only to respond to your inquiry, provide our design services and communicate with you about your project. We do not sell personal information."]],
      ["Cookies", ["This website does not use advertising or tracking cookies. If analytics are added in future, this policy will be updated to describe them."]],
      ["Sharing", ["We share information only with service providers who help us operate our business (for example email and website hosting), or where required by law."]],
      ["Your choices", [`You may ask us to access, correct or delete the personal information we hold about you by emailing <a href="mailto:${site.email}">${site.email}</a>.`]],
      ["Contact", [`${esc(site.legalName)}, ${esc(fullAddress())}. Phone <a href="tel:${site.phoneE164}">${site.phone}</a>.`]],
    ],
  });

export const renderAccessibility = () =>
  legalPage({
    url: "/accessibility-statement/",
    title: "Accessibility Statement",
    description: "Paul Lauren Designs is committed to digital accessibility for people with disabilities.",
    sections: [
      ["Our commitment", [`${esc(site.name)} is committed to making this website accessible to everyone, including people with disabilities, and aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.2 at Level AA.`]],
      ["Measures we take", ["Semantic HTML and landmarks, descriptive alternative text for images, keyboard-accessible navigation and image viewer, visible focus states, sufficient color contrast, a pause control for the background film, and respect for reduced-motion preferences."]],
      ["Feedback", [`If you encounter any barrier on this website, please contact us at <a href="mailto:${site.email}">${site.email}</a> or <a href="tel:${site.phoneE164}">${site.phone}</a> and we will do our best to help.`]],
    ],
  });

export function render404(ctx) {
  const body = html`
<section class="not-found">
  <p class="eyebrow">Page not found</p>
  <h1 class="display">This room is <em>empty.</em></h1>
  <p class="lead">The page you're looking for may have moved. Try the portfolio or start from the beginning.</p>
  <p><a class="button" href="/portfolio/">View the portfolio</a> <a class="link-arrow" href="/">Home</a></p>
</section>`;
  return { url: "/404.html", title: "Page not found", description: "The page you were looking for could not be found. Explore the Paul Lauren Designs portfolio of serene, luxurious interiors.", noindex: true, bodyClass: "page-404", jsonld: [], body };
}
