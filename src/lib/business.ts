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
    image:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3EUw5wYRncbEeutwZSEgCJ5nayv/hf_20260905_192139_053137b6-91c8-467e-94fb-c9551f9da7fe.png",
    imageAlt:
      "Arborist using rigging ropes to safely lower a large cut tree section near a Hudson Valley home",
  },
  {
    id: "tree-pruning",
    name: "Tree Pruning",
    shortName: "Pruning",
    summary:
      "Strategic trimming and pruning to improve clearance, appearance and tree structure while opening up your property.",
    image:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3EUw5wYRncbEeutwZSEgCJ5nayv/hf_20260905_192137_85d653b3-7d26-4e49-a8ae-ab340fd226f5.png",
    imageAlt: "Arborist carefully pruning a mature tree canopy near a driveway",
  },
  {
    id: "landscaping",
    name: "Landscaping",
    shortName: "Landscaping",
    summary:
      "Transform rough or outdated outdoor spaces into clean, functional landscapes designed around your property.",
    image:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3EUw5wYRncbEeutwZSEgCJ5nayv/hf_20260905_192650_c75e9641-ffbe-460d-8f32-0c56ee13f57d.png",
    imageAlt: "Freshly landscaped Hudson Valley front yard with new mulch beds and clean lawn edging",
  },
  {
    id: "junk-removal",
    name: "Junk Removal",
    shortName: "Junk Removal",
    summary:
      "Clear unwanted outdoor debris, brush, yard waste and bulky material so your property is clean and usable again.",
    image:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3EUw5wYRncbEeutwZSEgCJ5nayv/hf_20260905_192138_c02f4542-e232-414d-acfb-edcaaa286404.png",
    imageAlt: "Crew loading brush and yard debris into a dump trailer",
  },
  {
    id: "land-clearing",
    name: "Land Clearing",
    shortName: "Land Clearing",
    summary:
      "Open up overgrown lots, wooded areas and neglected sections of property for better access, visibility and future use.",
    image:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3EUw5wYRncbEeutwZSEgCJ5nayv/hf_20260905_192137_71310e06-6b87-4b57-a07a-c6cb62056bb2.png",
    imageAlt: "Dense wooded Hudson Valley lot being professionally cleared",
  },
  {
    id: "stonework",
    name: "Stonework",
    shortName: "Stonework",
    summary:
      "Add structure and character to your property with natural-looking stonework and hardscape improvements.",
    image:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3EUw5wYRncbEeutwZSEgCJ5nayv/hf_20260905_192543_eb6c93a8-c87b-456a-8f25-0bc85799cd9a.png",
    imageAlt: "Natural stone retaining wall built along a landscaped Hudson Valley property",
  },
];

export const images = {
  // The user's exact final file, used as-is with its own baked-in dark
  // green background — no background removal or any other processing.
  // The background color already matches the site's dark forest tone.
  logo: "https://d2ol7oe51mr4n9.cloudfront.net/user_3EUw5wYRncbEeutwZSEgCJ5nayv/fd9163e3-8c3b-4c8a-9c67-fb9d8ae8c4ff.png",
  hero: "https://d8j0ntlcm91z4.cloudfront.net/user_3EUw5wYRncbEeutwZSEgCJ5nayv/hf_20260905_192651_776fa55c-2e02-4d5d-bcc7-e7bd45bbc91c.png",
  introBefore:
    "https://d8j0ntlcm91z4.cloudfront.net/user_3EUw5wYRncbEeutwZSEgCJ5nayv/hf_20260905_192543_92d3f829-053a-4099-8989-4d674db98493.png",
  introAfter:
    "https://d8j0ntlcm91z4.cloudfront.net/user_3EUw5wYRncbEeutwZSEgCJ5nayv/hf_20260905_192137_d2b1e1c5-9b0b-4b56-9ace-46d0e04d02d4.png",
  treescaping: {
    tree: "https://d8j0ntlcm91z4.cloudfront.net/user_3EUw5wYRncbEeutwZSEgCJ5nayv/hf_20260905_192543_e27811aa-059e-42cc-a9c2-83dcc08ee68f.png",
    clear:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3EUw5wYRncbEeutwZSEgCJ5nayv/hf_20260905_192137_35250016-6ff6-4200-b989-02bff0e8293c.png",
    clean:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3EUw5wYRncbEeutwZSEgCJ5nayv/hf_20260905_192139_87519caf-91f5-44bb-b6f9-77ab2bc94dae.png",
    transform:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3EUw5wYRncbEeutwZSEgCJ5nayv/hf_20260905_192651_7bebd774-3f70-42ec-88a2-e3146644959f.png",
  },
  equipment:
    "https://d8j0ntlcm91z4.cloudfront.net/user_3EUw5wYRncbEeutwZSEgCJ5nayv/hf_20260905_192650_138d0638-79cf-4076-a2b1-5be1037a21e5.png",
  about:
    "https://d8j0ntlcm91z4.cloudfront.net/user_3EUw5wYRncbEeutwZSEgCJ5nayv/hf_20260905_192739_3cba3a9d-cab8-47ac-be6d-ba4b91f668a7.png",
  demolition:
    "https://d8j0ntlcm91z4.cloudfront.net/user_3EUw5wYRncbEeutwZSEgCJ5nayv/hf_20260905_192739_4f5a09c9-bd55-4679-ba1f-f973be5cdd4d.png",
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
    image:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3EUw5wYRncbEeutwZSEgCJ5nayv/hf_20260905_192543_c3d8b419-4607-40d0-a8d9-4243252cf866.png",
    imageAlt: "Large mature tree removal near a suburban Hudson Valley home",
    orientation: "landscape",
  },
  {
    id: "p2",
    category: "tree-work",
    title: "Rigging in a Mature Oak",
    image:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3EUw5wYRncbEeutwZSEgCJ5nayv/hf_20260905_192543_87927466-15fd-4a36-9b47-c6fc1c41b031.png",
    imageAlt: "Worker using climbing ropes high in a mature oak tree",
    orientation: "portrait",
  },
  {
    id: "p3",
    category: "land-clearing",
    title: "Cleared Wooded Lot",
    image:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3EUw5wYRncbEeutwZSEgCJ5nayv/hf_20260905_192543_9985f985-58d1-456e-99e4-71b70f8d5104.png",
    imageAlt: "Cleared wooded property with stacked logs at the tree line",
    orientation: "landscape",
  },
  {
    id: "p4",
    category: "landscaping",
    title: "Finished Front Yard",
    image:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3EUw5wYRncbEeutwZSEgCJ5nayv/hf_20260905_192543_4473cf76-896f-4dfd-a8c2-1c728c1460f8.png",
    imageAlt: "Finished landscaped front yard with mulch beds and stone edging",
    orientation: "landscape",
  },
  {
    id: "p5",
    category: "stonework",
    title: "Natural Stone Retaining Wall",
    image:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3EUw5wYRncbEeutwZSEgCJ5nayv/hf_20260905_192543_eb6c93a8-c87b-456a-8f25-0bc85799cd9a.png",
    imageAlt: "Natural stone retaining wall with dry-stack craftsmanship",
    orientation: "landscape",
  },
  {
    id: "p6",
    category: "cleanups",
    title: "Full Property Cleanup",
    image:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3EUw5wYRncbEeutwZSEgCJ5nayv/hf_20260905_192739_c8638115-de26-4669-b9c1-1d063cd781bf.png",
    imageAlt: "Large brush and yard debris cleanup staged near a dump trailer",
    orientation: "landscape",
  },
  {
    id: "p7",
    category: "land-clearing",
    title: "Before: Overgrown Lot",
    image:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3EUw5wYRncbEeutwZSEgCJ5nayv/hf_20260905_192739_2e69e4f9-78b7-478f-99f8-5848cbf91c10.png",
    imageAlt: "Overgrown neglected residential lot before clearing",
    orientation: "landscape",
  },
  {
    id: "p8",
    category: "land-clearing",
    title: "After: Open Usable Property",
    image:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3EUw5wYRncbEeutwZSEgCJ5nayv/hf_20260905_192739_b6910799-6c58-4511-ae3d-ba184941f7da.png",
    imageAlt: "Finished open Hudson Valley property after land clearing",
    orientation: "landscape",
  },
  {
    id: "p9",
    category: "tree-work",
    title: "Pruning Over the Driveway",
    image:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3EUw5wYRncbEeutwZSEgCJ5nayv/hf_20260905_192739_6758506e-9c38-4301-8e25-d1c59fce9a54.png",
    imageAlt: "Arborist pruning a tree limb directly over a residential driveway",
    orientation: "portrait",
  },
  {
    id: "p10",
    category: "cleanups",
    title: "Chipping Crew at Work",
    image:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3EUw5wYRncbEeutwZSEgCJ5nayv/hf_20260905_192739_6323e078-bf8b-436e-b958-31b3ec81628b.png",
    imageAlt: "Crew feeding cut limbs into a wood chipper",
    orientation: "landscape",
  },
];
