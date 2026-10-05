// Single source of truth for business facts (NAP), brand voice and SEO
// defaults. Every page, the JSON-LD graph, llms.txt and the sitemap read
// from here, so a change in one place stays consistent everywhere. Facts
// marked "verify" are listed in CONTENT-REVIEW.md.
export const site = {
  name: "Paul Lauren Designs",
  legalName: "Paul Lauren Design Consultants",
  url: "https://paullaurendesigns.com",
  locale: "en_US",
  language: "en",
  tagline: "Serene, quietly luxurious interiors",
  description:
    "Paul Lauren Designs is a Scottsdale, Arizona interior design studio led by principal designer Lauren Rautbord and partner Kendra Vaughn, creating serene, uncluttered and quietly luxurious homes across Arizona, Chicago and the Mountain West.",
  shortDescription:
    "Scottsdale interior design studio led by Lauren Rautbord and Kendra Vaughn — serene, uncluttered, quietly luxurious homes.",

  founder: {
    name: "Lauren Rautbord",
    jobTitle: "Principal Designer & Founder",
    experience: "more than 30 years",
    education: "Harrington School of Design, Chicago",
    cofounder: "the late Paul Marchetti, one of Chicago's leading style makers for decades",
  },

  partner: {
    name: "Kendra Vaughn",
    jobTitle: "Partner",
  },

  phone: "480-664-6765",
  phoneE164: "+14806646765",
  email: "info@paullaurendesigns.com",
  address: {
    street: "16419 N 91st St, Bldg A125",
    city: "Scottsdale",
    region: "AZ",
    regionName: "Arizona",
    postal: "85260",
    country: "US",
  },
  hours: "By appointment",

  social: {
    instagram: { label: "Instagram", handle: "@paullaurendesigns", url: "https://www.instagram.com/paullaurendesigns/" },
    facebook: { label: "Facebook", handle: "LaurenRautbordStyle", url: "https://www.facebook.com/LaurenRautbordStyle/" },
  },

  // Where the studio has completed work (from the live portfolio) plus the
  // Valley communities it serves from its Scottsdale studio.
  areaServed: [
    "Scottsdale, AZ",
    "Paradise Valley, AZ",
    "Phoenix, AZ",
    "Silverleaf & DC Ranch, Scottsdale",
    "Chicago, IL",
    "Wilmette & the North Shore, IL",
    "Aspen, CO",
    "Sun Valley, ID",
    "Coeur d'Alene, ID",
    "Pacific Palisades, CA",
  ],

  // Contact form: set to a form backend (Formspree, Basin, Netlify Forms,
  // a WordPress endpoint…). Empty = the form opens the visitor's mail app.
  formEndpoint: "",

  nav: [
    { label: "Portfolio", href: "/portfolio/" },
    { label: "Studio", href: "/studio/" },
    { label: "Services", href: "/services/" },
    { label: "Featured", href: "/featured/" },
    { label: "Journal", href: "/journal/" },
    { label: "Contact", href: "/contact/" },
  ],

  footerNav: [
    { label: "Portfolio", href: "/portfolio/" },
    { label: "The Studio", href: "/studio/" },
    { label: "Services", href: "/services/" },
    { label: "Our Process", href: "/process/" },
    { label: "Featured", href: "/featured/" },
    { label: "Journal", href: "/journal/" },
    { label: "Areas We Serve", href: "/areas-we-serve/" },
    { label: "Scottsdale Interior Designer", href: "/scottsdale-interior-designer/" },
    { label: "FAQ", href: "/faq/" },
    { label: "Contact", href: "/contact/" },
  ],

  legalNav: [
    { label: "Privacy Policy", href: "/privacy-policy/" },
    { label: "Accessibility", href: "/accessibility-statement/" },
  ],
};

export const fullAddress = (a = site.address) => `${a.street}, ${a.city}, ${a.region} ${a.postal}`;
