// Studio, services, process, press and FAQ copy. Written fresh for the new
// site from the studio's published facts; anything a client might rely on
// (scope, timing, fees) is phrased conservatively and listed in
// CONTENT-REVIEW.md for the studio to confirm.
import { site } from "../site.config.mjs";

export const philosophy = {
  quote:
    "The day I am delegating design decisions to others or hurriedly making selections ‘off the shelf’ will be the day I know we’ve become too large.",
  quoteBy: "Lauren Rautbord",
  pillars: [
    {
      title: "Less, always",
      text: "Rooms are edited until only what matters remains. Uncluttered space is the true luxury, and it lets every piece be seen.",
    },
    {
      title: "Sumptuous, never fussy",
      text: "Luxurious fabrics, a refined neutral palette and furnishings with warmth and personality: sophisticated, comfortable and made to be lived in.",
    },
    {
      title: "Embrace the view",
      text: "Desert, mountain, lake or skyline, the setting is part of the design. Interiors are composed to frame the outlook rather than compete with it.",
    },
    {
      title: "Vintage meets contemporary",
      text: "Collected vintage pieces and contemporary design sit side by side, giving each home a sense of history and a point of view.",
    },
  ],
};

// The designers. Portraits: assets/brand/<id>.jpg (see README).
export const team = [
  {
    id: "lauren-rautbord",
    name: "Lauren Rautbord",
    role: "Founder & Principal Designer",
    short: "Founder of the studio, with more than thirty years of designing serene, quietly luxurious homes, first in Chicago and now from Scottsdale.",
  },
  {
    id: "kendra-vaughn",
    name: "Kendra Vaughn",
    role: "Partner",
    short: "Partner in the studio, Kendra guides projects alongside Lauren from first concept to final installation, with an eye for calm, livable luxury.",
    bio: [
      "Kendra Vaughn is a partner at Paul Lauren Designs, working alongside Lauren on the studio's homes from the first conversation to the final styled room.",
      "She shares the studio's conviction that a home should feel like a deep breath: edited, sumptuous and made to be lived in. Clients work closely with Kendra through every stage, from plans and finish selections to furnishings, procurement and installation.",
      "Together, Lauren and Kendra keep the studio deliberately personal. Every project is led by its designers and never handed off.",
    ],
  },
];

export const services = [
  {
    id: "full-service",
    title: "Full-Service Interior Design",
    lede: "From the first conversation to the final pillow, one designer guiding every decision.",
    text: "Space planning, interior architecture and finish selections, custom furnishings, lighting, window treatments, art and accessories, all designed, specified and managed by the studio, with Lauren and Kendra personally involved in every selection.",
    includes: ["Space planning & furniture layouts", "Finish, fixture & material selections", "Custom furniture & upholstery", "Lighting & window treatments", "Art & accessory curation"],
  },
  {
    id: "new-construction",
    title: "New Construction & Renovation",
    lede: "An interior point of view from the plans stage onward.",
    text: "Working alongside your architect and builder, we shape cabinetry, millwork, stone, tile, plumbing and lighting so the architecture and the interiors read as one, whether it is a new build in Silverleaf or a mountain-home renovation.",
    includes: ["Plan review with architect & builder", "Kitchen & bath design", "Cabinetry & millwork details", "Stone, tile & flooring", "Lighting plans"],
  },
  {
    id: "furnishing",
    title: "Furnishing & Styling",
    lede: "For finished homes ready for their interior layer.",
    text: "A complete furnishing plan, from upholstery and case goods to rugs, linens and objects, sourced from trade-only showrooms and artisans, then installed and styled so the home is ready to live in.",
    includes: ["Furniture plans & sourcing", "Custom upholstery & textiles", "Rugs, linens & bedding", "Installation & styling"],
  },
  {
    id: "second-homes",
    title: "Second Homes & Turnkey Retreats",
    lede: "Arrive to a home that is ready: linens pressed, lamps on.",
    text: "Mountain cabins, lake houses and desert retreats designed and fully outfitted down to the kitchen, bath and bedding, ideal for clients who live elsewhere. The studio has completed homes in Aspen, Sun Valley, Coeur d'Alene and beyond.",
    includes: ["Complete outfitting to move-in", "Remote collaboration", "Kitchen, bath & linen packages", "Seasonal refreshes"],
  },
  {
    id: "spec-homes",
    title: "Builder & Spec Home Design",
    lede: "Design that helps a home sell before it is finished.",
    text: "Finish selections and furnishing for builders and developers, creating a warm, personal sense of home that buyers respond to.",
    includes: ["Finish & fixture packages", "Model & spec furnishing", "Staging-level styling"],
  },
  {
    id: "consultation",
    title: "Design Consultation",
    lede: "Expert direction for a single room or a single decision.",
    text: "Focused sessions for clients who want a professional eye on a layout, palette, furniture plan or finish selection.",
    includes: ["In-home or virtual sessions", "Palette & material direction", "Layout & furniture planning"],
  },
];

export const process = [
  {
    title: "Introduction",
    text: "A conversation about your home, how you live, your timeline and your goals. We'll talk through scope and whether we're the right fit.",
  },
  {
    title: "Discovery & Site Visit",
    text: "We walk the home or the plans, measure, photograph and listen. We look closely at how the light moves, what the views offer and which pieces you love.",
  },
  {
    title: "Concept",
    text: "A design direction in plan, palette, materials and key furnishings, presented in person so every choice can be seen and touched.",
  },
  {
    title: "Design Development",
    text: "Detailed selections: finishes, lighting, custom pieces, fabrics, rugs and window treatments, refined with you until each room is resolved.",
  },
  {
    title: "Procurement & Oversight",
    text: "The studio orders, tracks and receives everything, coordinates with your architect, builder and trades, and keeps the details on course.",
  },
  {
    title: "Installation & Reveal",
    text: "Furniture is placed, art is hung, beds are made and accessories are styled, then we hand you the keys to a finished home.",
  },
];

// Press. The live /featured/ page images (magazine covers, spreads, logos)
// are pulled by fetch-live-assets and shown on /featured/ automatically.
export const press = [
  {
    outlet: "Phoenix Home & Garden",
    title: "Revisiting Old-World Allure",
    date: "February 2019",
    dateISO: "2019-02",
    url: "https://www.phgmag.com/revisiting-old-world-allure/",
    note: "A classic, old-world home in the Valley for clients from Chicago, designed by Lauren Rautbord.",
  },
  {
    outlet: "Houzz",
    title: "Bathroom of the Week",
    date: null,
    dateISO: null,
    url: null,
    note: "A spa-like bath with a custom wood vanity, selected as a Houzz Bathroom of the Week.",
  },
];

export const faqs = [
  {
    q: "Who are the designers behind Paul Lauren Designs?",
    a: `Paul Lauren Designs is led by founder and principal designer Lauren Rautbord, who has ${site.founder.experience} of interior design experience, and partner ${site.partner.name}. Lauren trained at the Harrington School of Design in Chicago and founded the firm with ${site.founder.cofounder}.`,
  },
  {
    q: "Where is Paul Lauren Designs located?",
    a: `The studio is at ${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postal}, in North Scottsdale. Appointments can be made by calling ${site.phone} or emailing ${site.email}.`,
  },
  {
    q: "What areas does Paul Lauren Designs serve?",
    a: "The studio works throughout Scottsdale, Paradise Valley and Phoenix, including Silverleaf, DC Ranch and the Biltmore area, and has long-standing clients in Chicago and the North Shore. It has also completed homes in Aspen, Sun Valley, Coeur d'Alene and Pacific Palisades.",
  },
  {
    q: "What is Lauren Rautbord's design style?",
    a: "Serene, uncluttered and quietly luxurious: sumptuous fabrics, refined neutral palettes and furnishings full of warmth and personality, with vintage and contemporary pieces side by side. The guiding beliefs are that less is always more and that a home's views should be embraced.",
  },
  {
    q: "Do you take on new construction and renovation projects?",
    a: "Yes. The studio works alongside architects and builders on new homes and renovations, including interior architecture, kitchens and baths, cabinetry and millwork, finishes, lighting and furnishings.",
  },
  {
    q: "Can you design a second home if I live out of state?",
    a: "Yes. Many projects are vacation and second homes, including mountain cabins, lake houses and desert retreats. The studio can design and fully outfit a home so it is ready to live in on arrival.",
  },
  {
    q: "Will I work directly with the designers?",
    a: "Yes. The studio stays deliberately small so that clients work directly with Lauren and Kendra, and design decisions are never delegated or made 'off the shelf'.",
  },
  {
    q: "How does the design process work?",
    a: "Six stages: an introductory conversation, discovery and site visit, a design concept, detailed design development, procurement and project oversight, and finally installation and the reveal. Each stage is explained on the Process page.",
  },
  {
    q: "How long does an interior design project take?",
    a: "It depends on scope. Furnishing a finished home typically takes a matter of months, mostly lead time for custom pieces, while new construction follows the build schedule. A realistic timeline is part of the first conversation.",
  },
  {
    q: "How do I start a project with Paul Lauren Designs?",
    a: `Use the contact form, email ${site.email} or call ${site.phone}. Share a little about your home, your timeline and what you would like to achieve, and the studio will arrange an introductory conversation.`,
  },
];
