// src/data/specs.ts
/**
 * Factual specifications per project and the surrounding area.
 * Single source for the Projects-page specs, the Location-page area guide and their structured data.
 * All figures are from the official Takmeel Square presentation.
 */

export interface ProjectSpec {
  id: string;
  name: string;
  /** schema.org type used in structured data */
  schemaType: string;
  /** 1–2 sentence factual summary, written to be quoted by search engines. */
  summary: string;
  rows: { label: string; value: string }[];
  amenities: string[];
}

export const projectSpecs: ProjectSpec[] = [
  {
    id: "takmeel-square",
    name: "Takmeel Square",
    schemaType: "ShoppingCenter",
    summary:
      "Takmeel Square is a 1.2 million sq ft commercial hub on the Main Boulevard of DHA Bahawalpur, offering 68 four-marla and 19 six-marla commercial units of 7 floors each.",
    rows: [
      { label: "Location", value: "Main Boulevard, DHA Bahawalpur" },
      { label: "Covered area", value: "1.2 million sq ft" },
      { label: "4 Marla units", value: "68 units · 7 floors" },
      { label: "6 Marla units", value: "19 units · 7 floors" },
      { label: "A Block", value: "Faces Main Boulevard" },
      { label: "B Block", value: "Faces Glow Park" },
    ],
    amenities: ["IT Hub", "Builders Mall", "Al-Fatah", "Active piazzas", "CCTV"],
  },
  {
    id: "takmeel-bazaar",
    name: "Takmeel Bazaar",
    schemaType: "ShoppingCenter",
    summary:
      "Takmeel Bazaar is a 7-floor retail building with 260 shops inside Takmeel Square, DHA Bahawalpur, housing New Rangeela Bazaar, New Sarafa Bazaar and New Tech Bazaar with rooftop restaurants.",
    rows: [
      { label: "Location", value: "Takmeel Square, DHA Bahawalpur" },
      { label: "Floors", value: "7" },
      { label: "Shops", value: "260" },
      { label: "New Rangeela Bazaar", value: "Cloth market" },
      { label: "New Sarafa Bazaar", value: "Gold & jewellery market" },
      { label: "New Tech Bazaar", value: "Mobile & technology market" },
    ],
    amenities: ["Rooftop restaurants", "Food court", "Escalators", "Shuttle service"],
  },
  {
    id: "takmeel-homes",
    name: "Takmeel Homes",
    schemaType: "SingleFamilyResidence",
    summary:
      "Takmeel Homes are fully built luxury villas in DHA Bahawalpur, 1 Kanal homes in Sector A and 8 and 10 Marla homes in Sector C.",
    rows: [
      { label: "Location", value: "DHA Bahawalpur" },
      { label: "Sector A", value: "1 Kanal villas" },
      { label: "Sector C", value: "8 & 10 Marla homes" },
      { label: "Type", value: "Fully built luxury villas" },
    ],
    amenities: ["Car porch", "Private lawn", "Drawing & dining", "Kitchen", "En-suite bathrooms", "First-floor lounge"],
  },
  {
    id: "glow-park",
    name: "Glow Park",
    schemaType: "Park",
    summary:
      "Glow Park is a 4-acre illuminated park beside Takmeel Square in DHA Bahawalpur, with a food court, seating for 600 and parking for 1,100 cars.",
    rows: [
      { label: "Location", value: "Takmeel Square, DHA Bahawalpur" },
      { label: "Area", value: "4 acres" },
      { label: "Seating", value: "600" },
      { label: "Parking", value: "1,100 spaces, incl. underground" },
    ],
    amenities: ["Food court", "Illuminated walkways", "Washrooms"],
  },
];

/** Landmarks around Takmeel Square, from the official location map. */
export const areaSummary =
  "Takmeel Square sits at the centre of DHA Bahawalpur, next to the DHA Main Gate and the Southern Bypass, about 3.6 KM from Bahawalpur Airport and 4.9 KM from Bahawalpur Cantt.";

export const landmarks: { name: string; detail: string }[] = [
  { name: "Bahawalpur Airport", detail: "3.6 KM" },
  { name: "Bahawalpur Cantt", detail: "4.9 KM" },
  { name: "DHA Bahawalpur Main Gate", detail: "Beside Takmeel Square" },
  { name: "Southern Bypass", detail: "Direct access via DHA Main Gate" },
  { name: "DHA Club & Allied Facilities", detail: "Next to Takmeel Square" },
  { name: "DHA Office", detail: "Within DHA Bahawalpur" },
  { name: "Takmeel Homes, Sector A & C", detail: "Within DHA Bahawalpur" },
  { name: "Villa Community", detail: "Within DHA Bahawalpur" },
  { name: "CMH Institute of Medical Sciences", detail: "DHA Bahawalpur" },
  { name: "Cholistan University of Veterinary & Animal Sciences", detail: "Near DHA Bahawalpur" },
  { name: "Yazman Road", detail: "East of DHA Bahawalpur" },
];
