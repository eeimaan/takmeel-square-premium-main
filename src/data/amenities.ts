// src/data/amenities.ts
/** Amenities, reasons and project facts — from the official Takmeel Square presentation. */
import { images } from "./projects";

export interface Amenity {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const amenities: Amenity[] = [
  {
    id: "piazzas",
    title: "Active Piazzas",
    description: "Open plazas at the heart of Takmeel Square for shoppers, families and events.",
    image: images.squareSunsetCourt,
  },
  {
    id: "oasis",
    title: "Horticultural Oasis",
    description: "Landscaped roundabouts and planting that soften the architecture.",
    image: images.squarePlazaCorner,
  },
  {
    id: "walkways",
    title: "Dynamic Walkways",
    description: "Shaded, illuminated walkways connecting every block and market.",
    image: images.squareBoulevard,
  },
  {
    id: "glow-park",
    title: "Glow Park",
    description: "An illuminated park spanning 4 acres, with a food court and seating for 600.",
    image: images.glowPark,
  },
  {
    id: "rooftop",
    title: "Rooftop Restaurants",
    description: "Open-air rooftop dining and a food court above Takmeel Bazaar.",
    image: images.rooftopLounge,
  },
  {
    id: "parking",
    title: "Wide & Underground Parking",
    description: "1,100 parking spaces, including underground parking, plus a shuttle service.",
    image: images.bazaarStreet,
  },
  {
    id: "anchor",
    title: "Al-Fatah",
    description: "An anchor retail destination within Takmeel Square.",
    image: images.alFatah,
  },
  {
    id: "facilities",
    title: "Security & Facilities",
    description: "CCTV surveillance, a gated entrance, prayer area, ablution and washrooms.",
    image: images.bazaarShuttle,
  },
];

export const whyPoints = [
  {
    title: "Prime location",
    body: "Inside DHA Bahawalpur — 3.6 KM from Bahawalpur Airport and 4.9 KM from Cantt, facing the Main Boulevard.",
  },
  {
    title: "Client trust",
    body: "Takmeel Square redefines commercial real estate in Pakistan with innovation, client trust and timely delivery.",
  },
  {
    title: "Integrated model",
    body: "An inclusive integrated retail and open-market model that empowers investors and business owners.",
  },
  {
    title: "Attention to detail",
    body: "Unmatched innovation, meticulous attention to detail and eco-friendly practices throughout.",
  },
];

export const projectDetails = [
  { label: "Development", value: "Takmeel Square" },
  { label: "Location", value: "DHA Bahawalpur" },
  { label: "Typology", value: "Commercial, retail & leisure" },
  { label: "Covered area", value: "1.2 million sq ft" },
  { label: "Commercial units", value: "68 × 4 Marla · 19 × 6 Marla" },
  { label: "Takmeel Bazaar", value: "260 shops · 7 floors" },
  { label: "Parking", value: "1,100 spaces" },
  { label: "Glow Park", value: "4 acres" },
];

export const connectivity = [
  { label: "Bahawalpur Airport", value: "3.6 KM" },
  { label: "Bahawalpur Cantt", value: "4.9 KM" },
  { label: "Frontage", value: "Main Boulevard" },
  { label: "DHA Club & Allied Facilities", value: "Nearby" },
  { label: "CMH Institute of Medical Sciences", value: "DHA Bahawalpur" },
  { label: "Cholistan University", value: "Nearby" },
];
