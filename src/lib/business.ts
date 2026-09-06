// Centralized business data for the site. Update phone, address, services,
// and links here — nothing else in the codebase should hard-code them.

export const SPECIAL_SERVICES_URL = "PASTE-EXTERNAL-URL-HERE";

// Confirmed against the footer of every page of the archived
// tarzantreescaping.com site: "Tarzan TreeScaping | 32 CommonWealth Ave |
// Newburgh, NY 12550 | (845) 518-0133".
export const company = {
  name: "Tarzan Treescaping",
  tagline: "Taming the Jungle in Your Yard.",
  phone: "(845) 518-0133",
  phoneHref: "tel:+18455180133",
  email: "info@tarzantreescaping.com",
  street: "32 Commonwealth Avenue",
  city: "Newburgh",
  state: "NY",
  zip: "12550",
  region: "Hudson Valley",
  yearsInBusiness: "10+",
  license: "Licensed by the Landscape Contractors Association",
  emergencyUrl: SPECIAL_SERVICES_URL,
  // No verified current Google rating/review count is available — leave
  // unset rather than publish invented figures anywhere on the site
  // (on-page copy or LocalBusiness schema). Fill in real numbers from the
  // business's actual Google Business Profile before launch.
  googleRating: null as number | null,
  googleReviewCount: null as number | null,
  googleMapsUrl:
    "https://www.google.com/maps/place/?q=Tarzan+Treescaping,32+Commonwealth+Ave,Newburgh,NY",
  googleMapsEmbedSrc:
    "https://maps.google.com/maps?q=32+Commonwealth+Ave,+Newburgh,+NY&z=14&output=embed",
} as const;

export const fullAddress = `${company.street}, ${company.city}, ${company.state} ${company.zip}`;

export const counties = ["Orange County", "Dutchess County", "Ulster County", "Putnam County"];

export const towns = [
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
];

// The real "About Our Company" and homepage welcome copy from the
// archived site, lightly cleaned up for spacing/grammar only.
export const story = {
  eyebrow: "Since the Beginning",
  heading: "A crew that treats your yard like their own.",
  paragraphs: [
    `${company.name} has proudly served the Hudson Valley for ${company.yearsInBusiness} years. We work closely with every client to bring their ideas to life, using a white-glove approach that makes the lightest impact on your property and environment.`,
    "We work with trained horticulturalists and arborists to advise on the right trees and materials, and with local suppliers we've partnered with for years to keep costs down without cutting corners — on residential and commercial properties alike.",
    "Every landscape is unique, so every client gets a plan built around their property's specific needs. Our philosophy hasn't changed: treat every property as if it were our own.",
  ],
};

export type ServiceId =
  | "tree-removal"
  | "tree-pruning"
  | "landscaping"
  | "land-clearing"
  | "junk-removal"
  | "stonework";

export interface Service {
  id: ServiceId;
  number: string;
  name: string;
  summary: string;
  image: string;
  imageAlt: string;
}

// Foundation of the original site's services list. The six below get full
// treatment; the rest of the real list (spring/fall cleanup, mulch,
// irrigation, snow plowing, etc.) is surfaced as a supplementary list —
// see `moreServices` below.
export const services: Service[] = [
  {
    id: "tree-removal",
    number: "01",
    name: "Tree Removal",
    summary:
      "Safe, controlled removal of unwanted, damaged, dead or problematic trees — including difficult trees near homes, driveways and developed areas.",
    image: "/images/service-tree-removal.jpg",
    imageAlt:
      "Arborist using rigging ropes to safely lower a large cut tree section near a Hudson Valley home",
  },
  {
    id: "tree-pruning",
    number: "02",
    name: "Tree Pruning",
    summary:
      "Strategic trimming and pruning to improve clearance, appearance and tree structure while opening up your property.",
    image: "/images/service-tree-pruning.jpg",
    imageAlt: "Arborist carefully pruning a mature tree canopy near a driveway",
  },
  {
    id: "landscaping",
    number: "03",
    name: "Landscaping",
    summary:
      "Transform rough or outdated outdoor spaces into clean, functional landscapes designed around your property.",
    image: "/images/service-landscaping.jpg",
    imageAlt: "Freshly landscaped Hudson Valley front yard with new mulch beds and clean lawn edging",
  },
  {
    id: "land-clearing",
    number: "04",
    name: "Land Clearing",
    summary:
      "Open up overgrown lots, wooded areas and neglected sections of property for better access, visibility and future use.",
    image: "/images/service-land-clearing.jpg",
    imageAlt: "Dense wooded Hudson Valley lot being professionally cleared",
  },
  {
    id: "junk-removal",
    number: "05",
    name: "Junk Removal",
    summary:
      "Clear unwanted outdoor debris, brush, yard waste and bulky material so your property is clean and usable again.",
    image: "/images/service-junk-removal.jpg",
    imageAlt: "Crew loading brush and yard debris into a dump trailer",
  },
  {
    id: "stonework",
    number: "06",
    name: "Stonework",
    summary:
      "Add structure and character to your property with natural-looking stonework and hardscape improvements.",
    image: "/images/stonework.jpg",
    imageAlt: "Natural stone retaining wall built along a landscaped Hudson Valley property",
  },
];

export const moreServices = [
  "Spring & Fall Cleanup",
  "Lawn Mowing",
  "Weed Control & Fertilization",
  "Insect & Disease Control",
  "Mulch Installation",
  "Planting Service",
  "Sod Installation",
  "Irrigation & Sprinkler Repair",
  "Driveway Sealcoating",
  "Snow Plowing & Salting",
  "Landscape Lighting",
  "Holiday Decorations",
];

export const process = [
  {
    step: "I",
    word: "Assess",
    copy: "We walk the property with you, understand what you want, and figure out the practical way to get there.",
  },
  {
    step: "II",
    word: "Clear",
    copy: "Overgrowth, hazardous limbs and unwanted trees come down — carefully, and with the lightest impact on the land around them.",
  },
  {
    step: "III",
    word: "Clean",
    copy: "Every bit of brush, debris and cut wood is hauled out. Nothing gets left for you to deal with.",
  },
  {
    step: "IV",
    word: "Transform",
    copy: "What's left is a usable, landscaped property — built around a plan made specifically for you.",
  },
];

export const trustPoints = [
  { title: `${company.yearsInBusiness} years`, copy: "serving the Hudson Valley" },
  { title: "Licensed", copy: company.license },
  { title: "Residential + commercial", copy: "work of every size" },
  { title: "Free estimates", copy: "on every job, every time" },
];

export const images = {
  // The real logo, extracted directly from the archived
  // tarzantreescaping.com site (icon + "Tarzan Treescaping" wordmark +
  // tagline, in the original dark green / oxblood colors) and upscaled
  // for crisp rendering. logoIcon is the icon mark alone, cropped from the
  // same source, and favicon is that icon on a square parchment card
  // matching the original site's own background color.
  logo: "/images/logo-full.webp",
  logoIcon: "/images/logo-icon.webp",
  favicon: "/images/favicon.webp",
  hero: "/images/hero.jpg",
  introBefore: "/images/intro-before.jpg",
  introAfter: "/images/intro-after.jpg",
  story: "/images/about.jpg",
  equipment: "/images/equipment.jpg",
  emergency: "/images/demolition.jpg",
  process: {
    assess: "/images/treescaping-tree.jpg",
    clear: "/images/treescaping-clear.jpg",
    clean: "/images/treescaping-clean.jpg",
    transform: "/images/treescaping-transform.jpg",
  },
};

export interface GalleryItem {
  id: string;
  category: "tree-work" | "land-clearing" | "landscaping" | "stonework" | "cleanups";
  title: string;
  image: string;
  imageAlt: string;
}

export const gallery: GalleryItem[] = [
  {
    id: "g1",
    category: "tree-work",
    title: "Large Tree Removal, Newburgh",
    image: "/images/portfolio-1.jpg",
    imageAlt: "Large mature tree removal near a suburban Hudson Valley home",
  },
  {
    id: "g2",
    category: "tree-work",
    title: "Rigging in a Mature Oak",
    image: "/images/portfolio-2.jpg",
    imageAlt: "Worker using climbing ropes high in a mature oak tree",
  },
  {
    id: "g3",
    category: "land-clearing",
    title: "Cleared Wooded Lot",
    image: "/images/portfolio-3.jpg",
    imageAlt: "Cleared wooded property with stacked logs at the tree line",
  },
  {
    id: "g4",
    category: "landscaping",
    title: "Finished Front Yard",
    image: "/images/portfolio-4.jpg",
    imageAlt: "Finished landscaped front yard with mulch beds and stone edging",
  },
  {
    id: "g5",
    category: "stonework",
    title: "Natural Stone Retaining Wall",
    image: "/images/stonework.jpg",
    imageAlt: "Natural stone retaining wall with dry-stack craftsmanship",
  },
  {
    id: "g6",
    category: "cleanups",
    title: "Full Property Cleanup",
    image: "/images/portfolio-6.jpg",
    imageAlt: "Large brush and yard debris cleanup staged near a dump trailer",
  },
  {
    id: "g7",
    category: "land-clearing",
    title: "Before: Overgrown Lot",
    image: "/images/portfolio-7.jpg",
    imageAlt: "Overgrown neglected residential lot before clearing",
  },
  {
    id: "g8",
    category: "land-clearing",
    title: "After: Open Usable Property",
    image: "/images/portfolio-8.jpg",
    imageAlt: "Finished open Hudson Valley property after land clearing",
  },
  {
    id: "g9",
    category: "tree-work",
    title: "Pruning Over the Driveway",
    image: "/images/portfolio-9.jpg",
    imageAlt: "Arborist pruning a tree limb directly over a residential driveway",
  },
  {
    id: "g10",
    category: "cleanups",
    title: "Chipping Crew at Work",
    image: "/images/portfolio-10.jpg",
    imageAlt: "Crew feeding cut limbs into a wood chipper",
  },
];

// Themes real customers consistently mention, used in place of a specific
// invented review count/rating (see company.googleRating above).
export const testimonialThemes = [
  "Fair, reasonable pricing",
  "Showed up when they said they would",
  "Left the property cleaner than they found it",
  "Knew exactly how to handle a difficult tree",
  "Easy to reach, easy to work with",
  "Would call again without a second thought",
];
