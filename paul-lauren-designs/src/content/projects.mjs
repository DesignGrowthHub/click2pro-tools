// The 20 projects in the live paullaurendesigns.com portfolio, in the live
// order. `slug` is the expected live URL (/west-loop-chicago/ is confirmed);
// when assets/manifest.json exists the build matches each project to its live
// page by URL or title and keeps the live URL, so existing links and search
// rankings carry over.
//
// `summary` is DRAFT copy. When the live page's own text is in the manifest
// it is used instead (see CONTENT-REVIEW.md). `location` is only filled
// where the project name itself states it.
export const regions = {
  arizona: "Arizona",
  chicago: "Chicago & North Shore",
  mountain: "Mountain & Lake",
  california: "California",
};

export const projects = [
  {
    slug: "west-loop-chicago",
    title: "West Loop Chicago",
    location: "West Loop, Chicago, Illinois",
    region: "chicago",
    type: "City residence",
    summary:
      "A city residence in Chicago's West Loop, where industrial bones meet the studio's signature calm — soft neutrals, sumptuous textiles and furnishings with warmth and personality.",
  },
  {
    slug: "the-village-of-silverleaf",
    title: "The Village of Silverleaf",
    location: "Silverleaf, Scottsdale, Arizona",
    region: "arizona",
    type: "Residence",
    summary:
      "A Silverleaf home in North Scottsdale composed as a serene retreat: an uncluttered sequence of rooms in a refined neutral palette, framed by desert and mountain views.",
  },
  {
    slug: "desert-classic",
    title: "Desert Classic",
    location: null,
    region: "arizona",
    type: "Residence",
    summary:
      "Classic proportions and timeless materials, tuned for desert light — a home that feels collected and calm rather than of-the-moment.",
  },
  {
    slug: "silverleaf-modern-ranch",
    title: "Silverleaf Modern Ranch",
    location: "Silverleaf, Scottsdale, Arizona",
    region: "arizona",
    type: "Residence",
    summary:
      "The ease of a ranch house with a modern, pared-back sensibility: generous rooms, tactile natural materials and an open conversation with the landscape.",
  },
  {
    slug: "pacific-palisades",
    title: "Pacific Palisades",
    location: "Pacific Palisades, California",
    region: "california",
    type: "Residence",
    summary:
      "A California residence where light, air and a quiet neutral palette let the coastal setting lead.",
  },
  {
    slug: "solitude",
    title: "Solitude",
    location: null,
    region: null,
    type: "Residence",
    summary:
      "True to its name — a home designed around stillness, with layered textures, restrained color and space to breathe.",
  },
  {
    slug: "aspen-renovation",
    title: "Aspen Renovation",
    location: "Aspen, Colorado",
    region: "mountain",
    type: "Renovation",
    summary:
      "A mountain renovation in Aspen that trades heaviness for warmth: rich textiles, natural wood and stone, and rooms that turn toward the views.",
  },
  {
    slug: "sun-valley-renovation",
    title: "Sun Valley Renovation",
    location: "Sun Valley, Idaho",
    region: "mountain",
    type: "Renovation",
    summary:
      "A Sun Valley renovation reimagined for four-season living — relaxed, refined and built around gathering.",
  },
  {
    slug: "silverleaf-mediterranean",
    title: "Silverleaf Mediterranean",
    location: "Silverleaf, Scottsdale, Arizona",
    region: "arizona",
    type: "Residence",
    summary:
      "Old-world Mediterranean architecture softened with an edited, contemporary hand — vintage and new pieces in quiet dialogue.",
  },
  {
    slug: "silverleaf-transitional",
    title: "Silverleaf Transitional",
    location: "Silverleaf, Scottsdale, Arizona",
    region: "arizona",
    type: "Residence",
    summary:
      "A transitional Silverleaf residence balancing classic comfort with clean lines, in a palette of warm whites, stone and wood.",
  },
  {
    slug: "gozzer-flats",
    title: "Gozzer Flats",
    location: null,
    region: "mountain",
    type: "Residence",
    summary:
      "A lake-and-mountain retreat designed for long summers and easy hosting, with natural textures and a relaxed, refined ease.",
  },
  {
    slug: "lakefront-condo-i-ii",
    title: "Lakefront Condo I & II",
    location: null,
    region: null,
    type: "Condominium",
    summary:
      "Two lakefront residences where the water is the focal point — interiors kept light and edited so every room looks out.",
  },
  {
    slug: "cabin-with-a-view",
    title: "Cabin with a View",
    location: null,
    region: "mountain",
    type: "Cabin",
    summary:
      "A cabin oriented entirely around its outlook: warm materials and soft layers inside, the view doing the rest.",
  },
  {
    slug: "cabin-on-the-fairway",
    title: "Cabin on the Fairway",
    location: null,
    region: "mountain",
    type: "Cabin",
    summary:
      "A fairway cabin that pairs lodge-style comfort with the studio's clean, uncluttered approach.",
  },
  {
    slug: "cabin-on-the-lake",
    title: "Cabin on the Lake",
    location: null,
    region: "mountain",
    type: "Cabin",
    summary:
      "A lakeside cabin made for unhurried days — natural textures, relaxed upholstery and light that moves with the water.",
  },
  {
    slug: "cda-lakehouse",
    title: "CDA Lakehouse",
    location: "Coeur d'Alene, Idaho",
    region: "mountain",
    type: "Lake house",
    summary:
      "A Coeur d'Alene lake house that is calm, generous and built for family summers, with every room turned toward the lake.",
  },
  {
    slug: "lakefront-corner-condo",
    title: "Lakefront Corner Condo",
    location: null,
    region: null,
    type: "Condominium",
    summary:
      "A corner residence with water on two sides, furnished simply and luxuriously so the light and views lead.",
  },
  {
    slug: "silverleaf-spec",
    title: "Silverleaf Spec",
    location: "Silverleaf, Scottsdale, Arizona",
    region: "arizona",
    type: "Spec home",
    summary:
      "A Silverleaf spec home finished and furnished to feel personal from the first showing — warm, quiet and move-in ready.",
  },
  {
    slug: "biltmore-residence",
    title: "Biltmore Residence",
    location: "Biltmore, Phoenix, Arizona",
    region: "arizona",
    type: "Residence",
    summary:
      "A residence in Phoenix's Biltmore area, where classic architecture meets a fresh, edited interior of soft neutrals and luxurious fabrics.",
  },
  {
    slug: "wilmette-residence",
    title: "Wilmette Residence",
    location: "Wilmette, Illinois",
    region: "chicago",
    type: "Residence",
    summary:
      "A North Shore family home in Wilmette that is timeless, comfortable and quietly elegant, with vintage and contemporary pieces at ease together.",
  },
];

// Home page "Selected Work" order (swap once real photography is in).
export const featuredSlugs = [
  "the-village-of-silverleaf",
  "west-loop-chicago",
  "pacific-palisades",
  "aspen-renovation",
  "cda-lakehouse",
  "silverleaf-modern-ranch",
];
