// src/lib/seo.ts
/**
 * Central SEO / GEO configuration.
 * Change SITE_URL once the site is live on its final domain, every canonical URL,
 * Open Graph URL and structured-data URL is built from it.
 */
import { faqs } from "@/data/faqs";
import { areaSummary, landmarks, projectSpecs } from "@/data/specs";

export const SITE_URL = "https://www.takmeel.pk";
export const SITE_NAME = "Takmeel Square";
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

const GEO = { lat: 29.3264156, lng: 71.6792491 };
const PHONE = "+92-311-1555559";
const EMAIL = "info@takmeel.pk";

const SOCIALS = [
  "https://www.facebook.com/takmeelsquare",
  "https://www.instagram.com/takmeelsquare.pk/",
  "https://www.linkedin.com/company/80787229",
  "https://www.youtube.com/channel/UCoviyxhfd8qNC1Lj2HXgJTQ",
];

const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "Takmeel Square, Main Boulevard, DHA Bahawalpur",
  addressLocality: "Bahawalpur",
  addressRegion: "Punjab",
  addressCountry: "PK",
};

/** Organization + local business, rendered on every page. */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: "Takmeel Square (Pvt) Ltd",
      url: SITE_URL,
      logo: `${SITE_URL}/takmeel_square_logo-transparent.png`,
      email: EMAIL,
      telephone: PHONE,
      sameAs: SOCIALS,
      founder: { "@type": "Person", name: "Capt (R) Dr. Kamran Fazal", jobTitle: "Chief Executive Officer" },
    },
    {
      "@type": ["RealEstateAgent", "LocalBusiness"],
      "@id": `${SITE_URL}/#business`,
      name: SITE_NAME,
      description:
        "Takmeel Square is a 1.2 million sq ft commercial hub in DHA Bahawalpur with commercial units, Takmeel Bazaar (260 shops), Takmeel Homes luxury villas and the 4-acre Glow Park.",
      url: SITE_URL,
      image: OG_IMAGE,
      logo: `${SITE_URL}/takmeel_square_logo-transparent.png`,
      telephone: PHONE,
      email: EMAIL,
      address: ADDRESS,
      geo: { "@type": "GeoCoordinates", latitude: GEO.lat, longitude: GEO.lng },
      hasMap: "https://maps.google.com/?q=Takmeel+Square+DHA+Bahawalpur",
      areaServed: ["Bahawalpur", "South Punjab", "Punjab", "Pakistan"],
      parentOrganization: { "@id": `${SITE_URL}/#organization` },
      sameAs: SOCIALS,
      department: [
        {
          "@type": "LocalBusiness",
          name: "Takmeel Square, Lahore Office",
          telephone: PHONE,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Unit # CP 28, Commercial Fairways, Defence Raya",
            addressLocality: "Lahore",
            addressRegion: "Punjab",
            addressCountry: "PK",
          },
        },
        {
          "@type": "LocalBusiness",
          name: "Takmeel Square, Dubai Office",
          telephone: PHONE,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Conrad Business Tower, Office 1703, Sheikh Zayed Road",
            addressLocality: "Dubai",
            addressCountry: "AE",
          },
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

/** FAQ structured data, mirrors the visible FAQ section. */
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

/** Each development with its own schema type, factual summary, specs and amenities. */
export const projectsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Takmeel Square developments in DHA Bahawalpur",
  itemListElement: projectSpecs.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": p.schemaType,
      "@id": `${SITE_URL}/projects#${p.id}`,
      name: p.name,
      description: p.summary,
      url: `${SITE_URL}/projects#${p.id}`,
      address: ADDRESS,
      geo: { "@type": "GeoCoordinates", latitude: GEO.lat, longitude: GEO.lng },
      containedInPlace: { "@type": "Place", name: "DHA Bahawalpur" },
      additionalProperty: p.rows.map((r) => ({ "@type": "PropertyValue", name: r.label, value: r.value })),
      amenityFeature: p.amenities.map((a) => ({ "@type": "LocationFeatureSpecification", name: a, value: true })),
    },
  })),
};

/** Area guide, Takmeel Square as a place inside DHA Bahawalpur, with nearby landmarks. */
export const areaSchema = {
  "@context": "https://schema.org",
  "@type": "Place",
  "@id": `${SITE_URL}/location#place`,
  name: "Takmeel Square, DHA Bahawalpur",
  description: areaSummary,
  address: ADDRESS,
  geo: { "@type": "GeoCoordinates", latitude: GEO.lat, longitude: GEO.lng },
  hasMap: "https://maps.google.com/?q=Takmeel+Square+DHA+Bahawalpur",
  containedInPlace: {
    "@type": "Place",
    name: "DHA Bahawalpur",
    containedInPlace: { "@type": "City", name: "Bahawalpur", containedInPlace: { "@type": "State", name: "Punjab" } },
  },
  additionalProperty: landmarks.map((l) => ({ "@type": "PropertyValue", name: l.name, value: l.detail })),
};

const ld = (data: object) => ({ type: "application/ld+json", children: JSON.stringify(data) });

/**
 * Builds the full <head> for a route: title, description, keywords, canonical,
 * Open Graph / Twitter (with image), geo tags and JSON-LD.
 */
export function seo({
  title,
  description,
  path,
  keywords = [],
  schemas = [],
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  schemas?: object[];
}) {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const baseKeywords = [
    "Takmeel Square",
    "DHA Bahawalpur",
    "commercial property Bahawalpur",
    "shops for sale Bahawalpur",
    "South Punjab commercial hub",
  ];
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: [...keywords, ...baseKeywords].join(", ") },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "en_PK" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Takmeel Square, DHA Bahawalpur" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "geo.region", content: "PK-PB" },
      { name: "geo.placename", content: "Bahawalpur" },
      { name: "geo.position", content: `${GEO.lat};${GEO.lng}` },
      { name: "ICBM", content: `${GEO.lat}, ${GEO.lng}` },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [ld(organizationSchema), ...schemas.map(ld)],
  };
}
