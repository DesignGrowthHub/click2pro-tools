// Structured data (schema.org JSON-LD). One connected @graph per page so
// search engines and AI answer engines resolve the studio, its founder,
// its work and its location as a single, consistent entity.
import { site } from "../site.config.mjs";

const ORG = `${site.url}/#organization`;
const PERSON = `${site.url}/#lauren-rautbord`;
const WEBSITE = `${site.url}/#website`;

export const abs = (p) => (/^https?:/.test(p) ? p : `${site.url}${p.startsWith("/") ? "" : "/"}${p}`);

const postalAddress = () => ({
  "@type": "PostalAddress",
  streetAddress: site.address.street,
  addressLocality: site.address.city,
  addressRegion: site.address.region,
  postalCode: site.address.postal,
  addressCountry: site.address.country,
});

export function organizationNode({ logoUrl, imageUrl, services = [] } = {}) {
  return {
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": ORG,
    additionalType: "http://www.productontology.org/id/Interior_design",
    name: site.name,
    legalName: site.legalName,
    alternateName: [site.legalName, "Paul Lauren Design Consultants"].filter((v, i, a) => a.indexOf(v) === i),
    url: `${site.url}/`,
    description: site.description,
    slogan: site.tagline,
    telephone: site.phoneE164,
    email: site.email,
    address: postalAddress(),
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${site.name}, ${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postal}`)}`,
    areaServed: site.areaServed.map((name) => ({ "@type": "Place", name })),
    founder: { "@id": PERSON },
    employee: { "@id": PERSON },
    knowsAbout: [
      "Interior design",
      "Luxury residential interior design",
      "New construction interior design",
      "Home renovation design",
      "Furniture and textile selection",
      "Second home and vacation home design",
      "Desert modern interiors",
      "Neutral palette interiors",
    ],
    sameAs: Object.values(site.social).map((s) => s.url),
    ...(logoUrl ? { logo: { "@type": "ImageObject", url: abs(logoUrl) } } : {}),
    ...(imageUrl ? { image: abs(imageUrl) } : {}),
    ...(services.length
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Interior design services",
            itemListElement: services.map((s) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: s.title, description: s.text, url: abs(`/services/#${s.id}`) },
            })),
          },
        }
      : {}),
  };
}

export function personNode({ imageUrl } = {}) {
  return {
    "@type": "Person",
    "@id": PERSON,
    name: site.founder.name,
    jobTitle: site.founder.jobTitle,
    worksFor: { "@id": ORG },
    alumniOf: { "@type": "EducationalOrganization", name: "Harrington College of Design", address: { "@type": "PostalAddress", addressLocality: "Chicago", addressRegion: "IL" } },
    knowsAbout: ["Interior design", "Luxury residential interiors", "Textiles and upholstery", "Vintage and contemporary furniture"],
    description: `Principal designer and founder of ${site.name}, with ${site.founder.experience} of interior design experience in Chicago and Scottsdale.`,
    url: abs("/studio/"),
    ...(imageUrl ? { image: abs(imageUrl) } : {}),
  };
}

export function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE,
    url: `${site.url}/`,
    name: site.name,
    description: site.shortDescription,
    publisher: { "@id": ORG },
    inLanguage: "en-US",
  };
}

export function breadcrumbNode(url, trail) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${abs(url)}#breadcrumb`,
    itemListElement: [{ name: "Home", url: "/" }, ...trail].map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: abs(c.url),
    })),
  };
}

export function webPageNode({ url, type = "WebPage", title, description, image, breadcrumb, dateModified, extra = {} }) {
  return {
    "@type": type,
    "@id": `${abs(url)}#webpage`,
    url: abs(url),
    name: title,
    description,
    isPartOf: { "@id": WEBSITE },
    about: { "@id": ORG },
    inLanguage: "en-US",
    ...(image ? { primaryImageOfPage: { "@type": "ImageObject", url: abs(image) } } : {}),
    ...(breadcrumb ? { breadcrumb: { "@id": `${abs(url)}#breadcrumb` } } : {}),
    ...(dateModified ? { dateModified } : {}),
    ...extra,
  };
}

export function imageObject(img, caption) {
  return {
    "@type": "ImageObject",
    contentUrl: abs(img.url),
    ...(img.width ? { width: img.width, height: img.height } : {}),
    caption,
    creator: { "@id": ORG },
    creditText: site.name,
    copyrightHolder: { "@id": ORG },
    copyrightNotice: `© ${site.name}`,
  };
}

export function faqNode(url, faqs) {
  return {
    "@type": "FAQPage",
    "@id": `${abs(url)}#faq`,
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}

export const ids = { ORG, PERSON, WEBSITE };

export const graph = (nodes) => JSON.stringify({ "@context": "https://schema.org", "@graph": nodes.filter(Boolean) }).replace(/</g, "\\u003c");
