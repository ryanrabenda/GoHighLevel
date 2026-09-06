// Centralized business data. Update phone, address, services, and links here —
// nothing else in the codebase should hard-code this information.

export const SPECIAL_SERVICES_URL = "PASTE-EXTERNAL-URL-HERE";

export const business = {
  name: "Tarzan Treescaping",
  shortName: "Tarzan",
  phoneDisplay: "(845) 518-0133",
  phoneHref: "tel:+18455180133",
  email: "info@tarzantreescaping.com",
  location: "Newburgh, NY",
  region: "Hudson Valley",
  streetAddress: "32 Commonwealth Avenue",
  addressLocality: "Newburgh",
  addressRegion: "NY",
  fullAddress: "32 Commonwealth Avenue, Newburgh, NY",
  tagline: "Taming the Jungle in Your Yard.",
  specialServicesUrl: SPECIAL_SERVICES_URL,
  googleRating: 4.9,
  googleReviewCount: 35,
  googleMapsUrl:
    "https://www.google.com/maps/place/?q=Tarzan+Treescaping,32+Commonwealth+Ave,Newburgh,NY",
  googleMapsEmbedSrc:
    "https://maps.google.com/maps?q=32+Commonwealth+Ave,+Newburgh,+NY&z=14&output=embed",
  serviceCounties: ["Orange County", "Dutchess County", "Ulster County", "Putnam County"],
  serviceTowns: [
    "Newburgh",
    "New Windsor",
    "Cornwall",
    "Beacon",
    "Fishkill",
    "Wappingers Falls",
    "Middletown",
    "Marlboro",
    "Highland",
    "Poughkeepsie",
  ],
} as const;

export type ServiceId =
  | "tree-removal"
  | "tree-pruning"
  | "landscaping"
  | "junk-removal"
  | "land-clearing"
  | "stonework";

export interface Service {
  id: ServiceId;
  name: string;
  shortName: string;
  summary: string;
  image: string;
  imageAlt: string;
}

export const services: Service[] = [
  {
    id: "tree-removal",
    name: "Tree Removal",
    shortName: "Tree Removal",
    summary:
      "Safe, controlled removal of unwanted, damaged, dead or problematic trees — including difficult trees near homes, driveways and developed areas.",
    image: "/images/service-tree-removal.jpg",
    imageAlt:
      "Arborist using rigging ropes to safely lower a large cut tree section near a Hudson Valley home",
  },
  {
    id: "tree-pruning",
    name: "Tree Pruning",
    shortName: "Pruning",
    summary:
      "Strategic trimming and pruning to improve clearance, appearance and tree structure while opening up your property.",
    image: "/images/service-tree-pruning.jpg",
    imageAlt: "Arborist carefully pruning a mature tree canopy near a driveway",
  },
  {
    id: "landscaping",
    name: "Landscaping",
    shortName: "Landscaping",
    summary:
      "Transform rough or outdated outdoor spaces into clean, functional landscapes designed around your property.",
    image: "/images/service-landscaping.jpg",
    imageAlt: "Freshly landscaped Hudson Valley front yard with new mulch beds and clean lawn edging",
  },
  {
    id: "junk-removal",
    name: "Junk Removal",
    shortName: "Junk Removal",
    summary:
      "Clear unwanted outdoor debris, brush, yard waste and bulky material so your property is clean and usable again.",
    image: "/images/service-junk-removal.jpg",
    imageAlt: "Crew loading brush and yard debris into a dump trailer",
  },
  {
    id: "land-clearing",
    name: "Land Clearing",
    shortName: "Land Clearing",
    summary:
      "Open up overgrown lots, wooded areas and neglected sections of property for better access, visibility and future use.",
    image: "/images/service-land-clearing.jpg",
    imageAlt: "Dense wooded Hudson Valley lot being professionally cleared",
  },
  {
    id: "stonework",
    name: "Stonework",
    shortName: "Stonework",
    summary:
      "Add structure and character to your property with natural-looking stonework and hardscape improvements.",
    image: "/images/stonework.jpg",
    imageAlt: "Natural stone retaining wall built along a landscaped Hudson Valley property",
  },
];

export const images = {
  // The actual icon mark (no wordmark) — background-removed only, no
  // regeneration. Used as a mask shape in Logo.tsx, filled with solid
  // gold, so there is no background layer of its own.
  logo: "/images/logo.webp",
  hero: "/images/hero.jpg",
  introBefore: "/images/intro-before.jpg",
  introAfter: "/images/intro-after.jpg",
  treescaping: {
    tree: "/images/treescaping-tree.jpg",
    clear: "/images/treescaping-clear.jpg",
    clean: "/images/treescaping-clean.jpg",
    transform: "/images/treescaping-transform.jpg",
  },
  equipment: "/images/equipment.jpg",
  about: "/images/about.jpg",
  demolition: "/images/demolition.jpg",
};

export interface PortfolioItem {
  id: string;
  category: "tree-work" | "land-clearing" | "landscaping" | "stonework" | "cleanups";
  title: string;
  image: string;
  imageAlt: string;
  orientation: "landscape" | "portrait";
}

export const portfolio: PortfolioItem[] = [
  {
    id: "p1",
    category: "tree-work",
    title: "Large Tree Removal, Newburgh",
    image: "/images/portfolio-1.jpg",
    imageAlt: "Large mature tree removal near a suburban Hudson Valley home",
    orientation: "landscape",
  },
  {
    id: "p2",
    category: "tree-work",
    title: "Rigging in a Mature Oak",
    image: "/images/portfolio-2.jpg",
    imageAlt: "Worker using climbing ropes high in a mature oak tree",
    orientation: "portrait",
  },
  {
    id: "p3",
    category: "land-clearing",
    title: "Cleared Wooded Lot",
    image: "/images/portfolio-3.jpg",
    imageAlt: "Cleared wooded property with stacked logs at the tree line",
    orientation: "landscape",
  },
  {
    id: "p4",
    category: "landscaping",
    title: "Finished Front Yard",
    image: "/images/portfolio-4.jpg",
    imageAlt: "Finished landscaped front yard with mulch beds and stone edging",
    orientation: "landscape",
  },
  {
    id: "p5",
    category: "stonework",
    title: "Natural Stone Retaining Wall",
    image: "/images/stonework.jpg",
    imageAlt: "Natural stone retaining wall with dry-stack craftsmanship",
    orientation: "landscape",
  },
  {
    id: "p6",
    category: "cleanups",
    title: "Full Property Cleanup",
    image: "/images/portfolio-6.jpg",
    imageAlt: "Large brush and yard debris cleanup staged near a dump trailer",
    orientation: "landscape",
  },
  {
    id: "p7",
    category: "land-clearing",
    title: "Before: Overgrown Lot",
    image: "/images/portfolio-7.jpg",
    imageAlt: "Overgrown neglected residential lot before clearing",
    orientation: "landscape",
  },
  {
    id: "p8",
    category: "land-clearing",
    title: "After: Open Usable Property",
    image: "/images/portfolio-8.jpg",
    imageAlt: "Finished open Hudson Valley property after land clearing",
    orientation: "landscape",
  },
  {
    id: "p9",
    category: "tree-work",
    title: "Pruning Over the Driveway",
    image: "/images/portfolio-9.jpg",
    imageAlt: "Arborist pruning a tree limb directly over a residential driveway",
    orientation: "portrait",
  },
  {
    id: "p10",
    category: "cleanups",
    title: "Chipping Crew at Work",
    image: "/images/portfolio-10.jpg",
    imageAlt: "Crew feeding cut limbs into a wood chipper",
    orientation: "landscape",
  },
];
