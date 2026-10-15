// src/data/projects.ts
/** Takmeel Square projects, content from the official Takmeel Square presentation. */

import bazaarA from "../assets/main-building.png";
import bazaarB from "../assets/bazaarB.png";
import lounge from "../assets/lounge.jpg";
import bedroomA from "../assets/BedroomA.jpg";
import room from "../assets/Bedroom 1_03.jpg";
import view01 from "../assets/View 01.jpg";
import view02 from "../assets/View 02.jpg";
import view03 from "../assets/View 03.jpg";
import view04 from "../assets/View 04.jpg";
import view06 from "../assets/View 06.jpg";
import lawn from "../assets/LAWN.jpeg";
import lobby from "../assets/Lobby-01.jpg";
import lobbyStair from "../assets/Lobby Stair_02-03.jpg";

import squareGate from "../assets/takmeel/square-gate.jpg";
import squareExterior from "../assets/takmeel/square-exterior.jpg";
import squareCourtyard from "../assets/takmeel/square-courtyard.jpg";
import squareBoulevard from "../assets/takmeel/square-boulevard.jpg";
import squareStreet from "../assets/takmeel/square-street.jpg";
import glowPark from "../assets/takmeel/glow-park.jpg";
import foodCourt from "../assets/takmeel/food-court.jpg";
import alFatah from "../assets/takmeel/al-fatah.jpg";
import restaurantStreet from "../assets/takmeel/restaurant-street.jpg";
import techBazaarFront from "../assets/takmeel/tech-bazaar-front.jpg";
import bazaarEntrance from "../assets/takmeel/bazaar-entrance.jpg";
import bazaarAtrium from "../assets/takmeel/bazaar-atrium.jpg";
import bazaarAtrium2 from "../assets/takmeel/bazaar-atrium-2.jpg";
import rangeelaBazaar from "../assets/takmeel/rangeela-bazaar.jpg";
import techBazaar from "../assets/takmeel/tech-bazaar.jpg";
import sarafaBazaar from "../assets/takmeel/sarafa-bazaar.jpg";
import rooftopLounge from "../assets/takmeel/rooftop-lounge.jpg";
import rooftopFoodCourt from "../assets/takmeel/rooftop-food-court.jpg";
import sitePlan from "../assets/takmeel/site-plan.jpg";
import masterPlan from "../assets/takmeel/dha-master-plan.jpg";
import locationMap from "../assets/takmeel/location-map.jpg";

// High-quality renders supplied by Takmeel Square
import squareAerialDay from "../assets/takmeel/hq/square-aerial-day.jpg";
import squareAerialNight from "../assets/takmeel/hq/square-aerial-night.jpg";
import squareBoulevardDay from "../assets/takmeel/hq/square-boulevard-day.jpg";
import squarePlazaCorner from "../assets/takmeel/hq/square-plaza-corner.jpg";
import squarePlazaLogo from "../assets/takmeel/hq/square-plaza-logo.jpg";
import squareCanopyStreet from "../assets/takmeel/hq/square-canopy-street.jpg";
import squareSunsetGlass from "../assets/takmeel/hq/square-sunset-glass.jpg";
import squareCanopyWalk from "../assets/takmeel/hq/square-canopy-walk.jpg";
import bazaarGatehouse from "../assets/takmeel/hq/bazaar-gatehouse.jpg";
import bazaarStreet from "../assets/takmeel/hq/bazaar-street.jpg";
import bazaarShuttle from "../assets/takmeel/hq/bazaar-shuttle.jpg";
import squareCafeCanopy from "../assets/takmeel/hq/square-cafe-canopy.jpg";
import squareParkParking from "../assets/takmeel/hq/square-park-parking.jpg";
import squareSunsetCourt from "../assets/takmeel/hq/square-sunset-court.jpg";
import bazaarFacadeHq from "../assets/takmeel/hq/bazaar-facade-hq.jpg";
import rangeelaCorridorHq from "../assets/takmeel/hq/rangeela-corridor-hq.jpg";
import sarafaFacadeHq from "../assets/takmeel/hq/sarafa-facade-hq.jpg";
import squareMasterRender from "../assets/takmeel/hq/square-master-render.jpg";
import villaStreet from "../assets/takmeel/home/villa-street.jpg";
import homeDining from "../assets/takmeel/home/dining.jpg";
import homeKitchen from "../assets/takmeel/home/kitchen.jpg";
import bazaarTechExterior from "../assets/takmeel/hq/bazaar-tech-exterior.jpg";

// High-quality AI renders & Glow Park renders (src/assets/takmeel/ren)
import renSqAerial from "../assets/takmeel/ren/sq-aerial.jpg";
import renSqDistrict from "../assets/takmeel/ren/sq-district.jpg";
import renSqBoulevard from "../assets/takmeel/ren/sq-boulevard.jpg";
import renBzBoulevard from "../assets/takmeel/ren/bz-boulevard.jpg";
import renBzGallery from "../assets/takmeel/ren/bz-gallery.jpg";
import renBzEscalator from "../assets/takmeel/ren/bz-escalator.jpg";
import renBzTextile from "../assets/takmeel/ren/bz-textile.jpg";
import renRangeela from "../assets/takmeel/ren/rangeela.jpg";
import renRangeela2 from "../assets/takmeel/ren/rangeela2.jpg";
import renSarafa from "../assets/takmeel/ren/sarafa.jpg";
import renTech from "../assets/takmeel/ren/tech.jpg";
import renTech2 from "../assets/takmeel/ren/tech2.jpg";
import renHomeKanal from "../assets/takmeel/ren/home-kanal.jpg";
import renAlfatah from "../assets/takmeel/ren/alfatah.jpg";
import renAlfatah2 from "../assets/takmeel/ren/alfatah2.jpg";
import renCoffee from "../assets/takmeel/ren/coffee.jpg";
import renGym from "../assets/takmeel/ren/gym.jpg";
import renGlowWalk from "../assets/takmeel/ren/glow-walk.jpg";
import renGlowEvening from "../assets/takmeel/ren/glow-evening.jpg";
import renGlowOasis from "../assets/takmeel/ren/glow-oasis.jpg";
import renGlowRestaurant from "../assets/takmeel/ren/glow-restaurant.jpg";
import renGlowEntrance from "../assets/takmeel/ren/glow-entrance.jpg";
import renGlowParking from "../assets/takmeel/ren/glow-parking.jpg";
import renGlowFoodcourt from "../assets/takmeel/ren/glow-foodcourt.jpg";
import renGlowDay from "../assets/takmeel/ren/glow-day.jpg";

export const images = {
  // New high-quality renders
  renGlowDay,
  renSqAerial,
  renSqDistrict,
  renSqBoulevard,
  renBzBoulevard,
  renBzGallery,
  renBzEscalator,
  renBzTextile,
  renRangeela,
  renRangeela2,
  renSarafa,
  renTech,
  renTech2,
  renHomeKanal,
  renAlfatah,
  renAlfatah2,
  renCoffee,
  renGym,
  renGlowWalk,
  renGlowEvening,
  renGlowOasis,
  renGlowRestaurant,
  renGlowEntrance,
  renGlowParking,
  renGlowFoodcourt,
  // High-quality renders
  squareAerialDay,
  squareAerialNight,
  squareBoulevardDay,
  squarePlazaCorner,
  squarePlazaLogo,
  squareCanopyStreet,
  squareSunsetGlass,
  squareCanopyWalk,
  bazaarGatehouse,
  bazaarStreet,
  bazaarShuttle,
  squareCafeCanopy,
  squareParkParking,
  squareSunsetCourt,
  bazaarFacadeHq,
  rangeelaCorridorHq,
  sarafaFacadeHq,
  squareMasterRender,
  villaStreet,
  homeDining,
  homeKitchen,
  bazaarTechExterior,
  // Takmeel Bazaar
  bazaarA,
  bazaarB,
  techBazaarFront,
  bazaarEntrance,
  bazaarAtrium,
  bazaarAtrium2,
  rangeelaBazaar,
  techBazaar,
  sarafaBazaar,
  // Takmeel Square
  squareGate,
  squareExterior,
  squareCourtyard,
  squareBoulevard,
  squareStreet,
  alFatah,
  sitePlan,
  masterPlan,
  locationMap,
  // Glow Park, food court & restaurants
  glowPark,
  foodCourt,
  restaurantStreet,
  rooftopLounge,
  rooftopFoodCourt,
  // Takmeel Homes
  lounge,
  bedroomA,
  bedroomB: room,
  houseView01: view01,
  houseView02: view02,
  houseView03: view03,
  houseView06: view06,
  houseGarden: view04,
  houseLawn: lawn,
  stair: lobbyStair,
  stair02: lobby,
  // Aliases used by existing sections
  interiorDetail: bazaarAtrium,
  exteriorDusk: squareCourtyard,
  aerial: glowPark,
  pool: rooftopLounge,
};

export interface Project {
  id: string;
  name: string;
  location: string;
  type: string;
  status: string;
  description: string;
  image: string;
  stats: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    id: "takmeel-square",
    name: "Takmeel Square",
    location: "DHA Bahawalpur",
    type: "Commercial Hub",
    status: "Flagship",
    description:
      "South Punjab's premier commercial hub, 1.2 million square feet built on an inclusive, integrated retail and open-market model, with A Block facing the Main Boulevard and B Block facing Glow Park.",
    image: images.renSqAerial,
    stats: [
      { label: "Covered area", value: "1.2M sq ft" },
      { label: "4 Marla units", value: "68" },
      { label: "6 Marla units", value: "19" },
    ],
  },
  {
    id: "takmeel-bazaar",
    name: "Takmeel Bazaar",
    location: "Takmeel Square, DHA Bahawalpur",
    type: "Retail & Open Markets",
    status: "Retail",
    description:
      "A well-planned 7-floor high-rise of 260 shops bringing together three major historical markets of Bahawalpur, New Rangeela Bazaar, New Sarafa Bazaar and New Tech Bazaar, topped with rooftop restaurants.",
    image: images.renBzBoulevard,
    stats: [
      { label: "Shops", value: "260" },
      { label: "Floors", value: "7" },
      { label: "Markets", value: "3" },
    ],
  },
  {
    id: "takmeel-homes",
    name: "Takmeel Homes",
    location: "Sector A & Sector C, DHA Bahawalpur",
    type: "Luxury Villas",
    status: "Residential",
    description:
      "Fully completed luxury homes designed for comfort and modern living, 1 Kanal villas in Sector A and 8 & 10 Marla homes in Sector C of DHA Bahawalpur.",
    image: images.renHomeKanal,
    stats: [
      { label: "Sector A", value: "1 Kanal" },
      { label: "Sector C", value: "8 & 10 Marla" },
      { label: "Homes", value: "Fully built" },
    ],
  },
  {
    id: "glow-park",
    name: "Glow Park",
    location: "Takmeel Square, DHA Bahawalpur",
    type: "Illuminated Park & Food Court",
    status: "Leisure",
    description:
      "An illuminated park spanning 4 acres beside Takmeel Square, a place to relax and gather, with a food court, seating and landscaped walkways.",
    image: images.renGlowWalk,
    stats: [
      { label: "Area", value: "4 Acres" },
      { label: "Seating", value: "600" },
      { label: "Parking", value: "1,100" },
    ],
  },
];

/** Gallery images per project, used on the individual project detail pages (/project/$id). */
export interface GalleryItem {
  src: string;
  name: string;
}

export const projectGalleries: Record<string, GalleryItem[]> = {
  "takmeel-square": [
    { src: images.renSqAerial, name: "Aerial view" },
    { src: images.renSqDistrict, name: "Commercial district" },
    { src: images.renSqBoulevard, name: "Main Boulevard" },
    { src: images.squareCanopyStreet, name: "Canopy street" },
    { src: images.squareSunsetCourt, name: "Central court" },
    { src: images.squareCafeCanopy, name: "Café under the canopies" },
  ],
  "takmeel-bazaar": [
    { src: images.renBzBoulevard, name: "Bazaar boulevard" },
    { src: images.renBzGallery, name: "Grand retail gallery" },
    { src: images.renBzEscalator, name: "Escalator junction" },
    { src: images.renRangeela, name: "New Rangeela Bazaar" },
    { src: images.renSarafa, name: "New Sarafa Bazaar" },
    { src: images.renTech, name: "New Tech Bazaar" },
  ],
  "takmeel-homes": [
    { src: images.houseView02, name: "Villa exterior" },
    { src: images.lounge, name: "Living room" },
    { src: images.homeDining, name: "Dining room" },
    { src: images.homeKitchen, name: "Kitchen" },
    { src: images.bedroomA, name: "Master bedroom" },
    { src: images.houseLawn, name: "Private lawn" },
  ],
  "glow-park": [
    { src: images.renGlowWalk, name: "Park walkway" },
    { src: images.renGlowEvening, name: "Evening piazza" },
    { src: images.renGlowOasis, name: "Horticultural oasis" },
    { src: images.renGlowRestaurant, name: "Park restaurant" },
    { src: images.renGlowEntrance, name: "Park entrance" },
    { src: images.renGlowFoodcourt, name: "Food court" },
  ],
};

export interface PropertyType {
  id: string;
  title: string;
  blurb: string;
  image: string;
}

export const propertyTypes: PropertyType[] = [
  {
    id: "commercial-units",
    title: "Commercial Units",
    blurb: "4 Marla (68 units) and 6 Marla (19 units), 7 floors each, in A & B Blocks.",
    image: images.squareCanopyStreet,
  },
  {
    id: "rangeela-bazaar",
    title: "New Rangeela Bazaar",
    blurb: "A dedicated cloth market inside Takmeel Bazaar.",
    image: images.rangeelaCorridorHq,
  },
  {
    id: "sarafa-bazaar",
    title: "New Sarafa Bazaar",
    blurb: "A dedicated gold and jewellery market inside Takmeel Bazaar.",
    image: images.sarafaBazaar,
  },
  {
    id: "tech-bazaar",
    title: "New Tech Bazaar",
    blurb: "A dedicated mobile and technology market inside Takmeel Bazaar.",
    image: images.techBazaar,
  },
  {
    id: "rooftop-restaurants",
    title: "Rooftop Restaurants",
    blurb: "Open-air rooftop dining and a food court above Takmeel Bazaar.",
    image: images.rooftopFoodCourt,
  },
  {
    id: "villas",
    title: "Luxury Villas",
    blurb: "Takmeel Homes, 1 Kanal in Sector A, 8 & 10 Marla in Sector C.",
    image: images.villaStreet,
  },
];

/** Order matches `projects`, the showcase uses one image per project. */
export const galleryImages = [
  images.squareSunsetCourt,
  images.bazaarFacadeHq,
  images.houseView03,
  images.squareParkParking,
  images.squareCafeCanopy,
  images.squareBoulevardDay,
];

/** Lifestyle wall, 15 frames. Images here are not used in the other home-page sections. */
export const lifestyleReel = [
  { image: images.squareMasterRender, title: "Takmeel Square by night", place: "DHA Bahawalpur" },
  { image: images.lounge, title: "Living room", place: "Takmeel Homes" },
  { image: images.homeDining, title: "Dining room", place: "Takmeel Homes" },
  { image: images.houseLawn, title: "Private garden", place: "Takmeel Homes" },
  { image: images.squareBoulevardDay, title: "Main Boulevard", place: "Takmeel Square" },
  { image: images.bedroomA, title: "Master suite", place: "Takmeel Homes" },
  { image: images.squareCafeCanopy, title: "Café under the canopies", place: "Takmeel Square" },
  { image: images.bazaarGatehouse, title: "Bazaar arrival", place: "Takmeel Bazaar" },
  { image: images.homeKitchen, title: "Kitchen", place: "Takmeel Homes" },
  { image: images.restaurantStreet, title: "Restaurant street", place: "Takmeel Square" },
  { image: images.squareAerialNight, title: "Evening skyline", place: "Takmeel Square" },
  { image: images.bazaarAtrium2, title: "Bazaar atrium", place: "Takmeel Bazaar" },
  { image: images.houseView06, title: "Villa entrance", place: "Takmeel Homes" },
  { image: images.stair02, title: "Entry lobby", place: "Takmeel Homes" },
  { image: images.techBazaarFront, title: "New Tech Bazaar", place: "Takmeel Bazaar" },
];
