// src/data/tours.ts
/** Virtual tour data. Add properties/scenes here to extend the tour. */

import lobby from "../assets/Lobby-01.jpg";
import lounge from "../assets/lounge.jpg";
import mainBuilding from "../assets/main-building.png";
import techBazaarFront from "../assets/takmeel/tech-bazaar-front.jpg";
import bazaarEntrance from "../assets/takmeel/bazaar-entrance.jpg";
import bazaarAtrium from "../assets/takmeel/bazaar-atrium.jpg";
import bazaarAtrium2 from "../assets/takmeel/bazaar-atrium-2.jpg";
import sarafaBazaar from "../assets/takmeel/sarafa-bazaar.jpg";
import techBazaar from "../assets/takmeel/tech-bazaar.jpg";
import restaurantStreet from "../assets/takmeel/restaurant-street.jpg";
import rooftopLounge from "../assets/takmeel/rooftop-lounge.jpg";
import rooftopFoodCourt from "../assets/takmeel/rooftop-food-court.jpg";
import hVillaStreet from "../assets/takmeel/home/villa-street.jpg";
import hVillaFront from "../assets/takmeel/home/villa-front.jpg";
import hPorch from "../assets/takmeel/home/porch.jpg";
import hEntrance from "../assets/takmeel/home/entrance.jpg";
import hLawn from "../assets/takmeel/home/lawn.jpg";
import hLobby from "../assets/takmeel/home/lobby.jpg";
import hGfLounge from "../assets/takmeel/home/gf-lounge.jpg";
import hGfLounge2 from "../assets/takmeel/home/gf-lounge-2.jpg";
import hGfLounge3 from "../assets/takmeel/home/gf-lounge-3.jpg";
import hDrawing from "../assets/takmeel/home/drawing.jpg";
import hDrawing2 from "../assets/takmeel/home/drawing-2.jpg";
import hDrawingTop from "../assets/takmeel/home/drawing-top.jpg";
import hDining from "../assets/takmeel/home/dining.jpg";
import hDining2 from "../assets/takmeel/home/dining-2.jpg";
import hKitchen from "../assets/takmeel/home/kitchen.jpg";
import hStair from "../assets/takmeel/home/stair.jpg";
import hStair2 from "../assets/takmeel/home/stair-2.jpg";
import hFfLounge from "../assets/takmeel/home/ff-lounge.jpg";
import hFfLounge2 from "../assets/takmeel/home/ff-lounge-2.jpg";
import hFfLounge3 from "../assets/takmeel/home/ff-lounge-3.jpg";
import hBed1 from "../assets/takmeel/home/bed1.jpg";
import hBed12 from "../assets/takmeel/home/bed1-2.jpg";
import hBed13 from "../assets/takmeel/home/bed1-3.jpg";
import hBath1 from "../assets/takmeel/home/bath1.jpg";
import hBath12 from "../assets/takmeel/home/bath1-2.jpg";
import hBed2 from "../assets/takmeel/home/bed2.jpg";
import hBed22 from "../assets/takmeel/home/bed2-2.jpg";
import hBed23 from "../assets/takmeel/home/bed2-3.jpg";
import hBed24 from "../assets/takmeel/home/bed2-4.jpg";
import hBath2 from "../assets/takmeel/home/bath2.jpg";
import hBath22 from "../assets/takmeel/home/bath2-2.jpg";
import hBath3 from "../assets/takmeel/home/bath3.jpg";
import hBath32 from "../assets/takmeel/home/bath3-2.jpg";
import foodCourt from "../assets/takmeel/food-court.jpg";
import glowPark from "../assets/takmeel/glow-park.jpg";
import bazaarFacadeHq from "../assets/takmeel/hq/bazaar-facade-hq.jpg";
import sarafaFacadeHq from "../assets/takmeel/hq/sarafa-facade-hq.jpg";
import rangeelaCorridorHq from "../assets/takmeel/hq/rangeela-corridor-hq.jpg";
import bazaarStreet from "../assets/takmeel/hq/bazaar-street.jpg";
import bazaarGatehouse from "../assets/takmeel/hq/bazaar-gatehouse.jpg";
import bazaarShuttle from "../assets/takmeel/hq/bazaar-shuttle.jpg";
import squareAerialDay from "../assets/takmeel/hq/square-aerial-day.jpg";
import squareAerialNight from "../assets/takmeel/hq/square-aerial-night.jpg";
import squareBoulevardDay from "../assets/takmeel/hq/square-boulevard-day.jpg";
import squarePlazaLogo from "../assets/takmeel/hq/square-plaza-logo.jpg";
import squarePlazaCorner from "../assets/takmeel/hq/square-plaza-corner.jpg";
import squareCanopyStreet from "../assets/takmeel/hq/square-canopy-street.jpg";
import squareCanopyWalk from "../assets/takmeel/hq/square-canopy-walk.jpg";
import squareCafeCanopy from "../assets/takmeel/hq/square-cafe-canopy.jpg";
import squareParkParking from "../assets/takmeel/hq/square-park-parking.jpg";
import squareSunsetCourt from "../assets/takmeel/hq/square-sunset-court.jpg";
import squareSunsetGlass from "../assets/takmeel/hq/square-sunset-glass.jpg";

export interface TourScene {
  id: string;
  title: string;
  image: string;
  /** Hotspots: x/y in % of the frame, linking to another scene. */
  links: { to: string; x: number; y: number; label: string }[];
}

export interface TourProperty {
  /** Matches the URL hash: /tour#tour-{id} */
  id: string;
  category: "Square" | "Homes" | "Bazaar" | "Park" | "Restaurants";
  name: string;
  location: string;
  scenes: TourScene[];
}

export const tours: TourProperty[] = [
  /* --------------------------- TAKMEEL SQUARE ------------------------- */
  {
    id: "square",
    category: "Square",
    name: "Takmeel Square",
    location: "DHA Bahawalpur",
    scenes: [
      {
        id: "aerial",
        title: "Takmeel Square from above",
        image: squareAerialDay,
        links: [{ to: "boulevard", x: 70, y: 70, label: "Arrive on the Main Boulevard" }],
      },
      {
        id: "boulevard",
        title: "Main Boulevard frontage",
        image: squareBoulevardDay,
        links: [
          { to: "plaza", x: 60, y: 62, label: "Walk to the plaza" },
          { to: "aerial", x: 12, y: 85, label: "Back to aerial view" },
        ],
      },
      {
        id: "plaza",
        title: "Signature plaza",
        image: squarePlazaLogo,
        links: [
          { to: "plaza-corner", x: 75, y: 70, label: "Plaza corner" },
          { to: "canopy-street", x: 20, y: 70, label: "Canopy street" },
          { to: "boulevard", x: 50, y: 88, label: "Back to boulevard" },
        ],
      },
      {
        id: "plaza-corner",
        title: "Plaza corner",
        image: squarePlazaCorner,
        links: [{ to: "plaza", x: 20, y: 80, label: "Back to plaza" }],
      },
      {
        id: "canopy-street",
        title: "Canopy street",
        image: squareCanopyStreet,
        links: [
          { to: "walkways", x: 70, y: 62, label: "Illuminated walkways" },
          { to: "plaza", x: 15, y: 85, label: "Back to plaza" },
        ],
      },
      {
        id: "walkways",
        title: "Illuminated walkways",
        image: squareCanopyWalk,
        links: [
          { to: "court", x: 60, y: 62, label: "Central court" },
          { to: "canopy-street", x: 15, y: 85, label: "Back to canopy street" },
        ],
      },
      {
        id: "court",
        title: "Central court at sunset",
        image: squareSunsetCourt,
        links: [
          { to: "tower", x: 70, y: 55, label: "Signature tower" },
          { to: "walkways", x: 15, y: 85, label: "Back to walkways" },
        ],
      },
      {
        id: "tower",
        title: "Signature tower at sunset",
        image: squareSunsetGlass,
        links: [
          { to: "night", x: 50, y: 30, label: "See Takmeel Square by night" },
          { to: "court", x: 15, y: 85, label: "Back to central court" },
        ],
      },
      {
        id: "night",
        title: "Takmeel Square by night",
        image: squareAerialNight,
        links: [{ to: "aerial", x: 50, y: 75, label: "Back to day view" }],
      },
    ],
  },

  /* --------------------------- TAKMEEL HOMES -------------------------- */
  {
    id: "house",
    category: "Homes",
    name: "Takmeel Homes — Villa, bedrooms & bathrooms",
    location: "DHA Bahawalpur",
    scenes: [
      {
        id: "street",
        title: "Street view",
        image: hVillaStreet,
        links: [
          { to: "front", x: 50, y: 62, label: "Walk to the villa" },
        ],
      },
      {
        id: "front",
        title: "Villa front",
        image: hVillaFront,
        links: [
          { to: "porch", x: 55, y: 66, label: "Enter the car porch" },
          { to: "street", x: 12, y: 85, label: "Back to street" },
        ],
      },
      {
        id: "porch",
        title: "Car porch",
        image: hPorch,
        links: [
          { to: "entrance", x: 70, y: 55, label: "Main entrance" },
          { to: "lawn", x: 15, y: 70, label: "Side lawn" },
          { to: "front", x: 85, y: 85, label: "Back to villa front" },
        ],
      },
      {
        id: "lawn",
        title: "Side lawn",
        image: hLawn,
        links: [
          { to: "porch", x: 12, y: 85, label: "Back to porch" },
        ],
      },
      {
        id: "entrance",
        title: "Main entrance",
        image: hEntrance,
        links: [
          { to: "lobby", x: 55, y: 55, label: "Enter the house" },
          { to: "porch", x: 12, y: 85, label: "Back to porch" },
        ],
      },
      {
        id: "lobby",
        title: "Entry lobby",
        image: hLobby,
        links: [
          { to: "lounge", x: 30, y: 60, label: "Ground floor lounge" },
          { to: "drawing", x: 75, y: 60, label: "Drawing room" },
          { to: "stair", x: 88, y: 55, label: "Staircase to first floor" },
          { to: "entrance", x: 50, y: 88, label: "Go outside" },
        ],
      },
      {
        id: "lounge",
        title: "Ground floor lounge",
        image: hGfLounge,
        links: [
          { to: "lounge-2", x: 75, y: 60, label: "TV wall" },
          { to: "dining", x: 20, y: 60, label: "Dining" },
          { to: "lobby", x: 50, y: 88, label: "Back to lobby" },
        ],
      },
      {
        id: "lounge-2",
        title: "Lounge — TV wall",
        image: hGfLounge2,
        links: [
          { to: "lounge-3", x: 70, y: 62, label: "Seating corner" },
          { to: "lounge", x: 15, y: 85, label: "Back" },
        ],
      },
      {
        id: "lounge-3",
        title: "Lounge — seating corner",
        image: hGfLounge3,
        links: [
          { to: "lounge", x: 15, y: 85, label: "Back to lounge" },
        ],
      },
      {
        id: "drawing",
        title: "Drawing room",
        image: hDrawing,
        links: [
          { to: "drawing-2", x: 70, y: 60, label: "Sitting area" },
          { to: "drawing-top", x: 30, y: 45, label: "Top view" },
          { to: "lobby", x: 50, y: 88, label: "Back to lobby" },
        ],
      },
      {
        id: "drawing-2",
        title: "Drawing room — sitting area",
        image: hDrawing2,
        links: [
          { to: "drawing", x: 15, y: 85, label: "Back" },
        ],
      },
      {
        id: "drawing-top",
        title: "Drawing room — top view",
        image: hDrawingTop,
        links: [
          { to: "drawing", x: 15, y: 85, label: "Back" },
        ],
      },
      {
        id: "dining",
        title: "Dining room",
        image: hDining,
        links: [
          { to: "dining-2", x: 70, y: 60, label: "Other side" },
          { to: "kitchen", x: 20, y: 60, label: "Kitchen" },
          { to: "lounge", x: 50, y: 88, label: "Back to lounge" },
        ],
      },
      {
        id: "dining-2",
        title: "Dining — other side",
        image: hDining2,
        links: [
          { to: "dining", x: 15, y: 85, label: "Back" },
        ],
      },
      {
        id: "kitchen",
        title: "Kitchen",
        image: hKitchen,
        links: [
          { to: "dining", x: 50, y: 88, label: "Back to dining" },
        ],
      },
      {
        id: "stair",
        title: "Staircase",
        image: hStair,
        links: [
          { to: "stair-2", x: 50, y: 45, label: "Go upstairs" },
          { to: "lobby", x: 15, y: 85, label: "Back to lobby" },
        ],
      },
      {
        id: "stair-2",
        title: "Upper landing",
        image: hStair2,
        links: [
          { to: "ff-lounge", x: 50, y: 55, label: "First floor lounge" },
          { to: "stair", x: 15, y: 85, label: "Back downstairs" },
        ],
      },
      {
        id: "ff-lounge",
        title: "First floor lounge",
        image: hFfLounge,
        links: [
          { to: "ff-lounge-2", x: 70, y: 58, label: "TV & kitchenette" },
          { to: "bed1", x: 20, y: 58, label: "Bedroom 1" },
          { to: "stair-2", x: 50, y: 88, label: "Back to landing" },
        ],
      },
      {
        id: "ff-lounge-2",
        title: "First floor lounge — TV wall",
        image: hFfLounge2,
        links: [
          { to: "ff-lounge-3", x: 70, y: 60, label: "Seating" },
          { to: "bed2", x: 20, y: 60, label: "Bedroom 2" },
          { to: "ff-lounge", x: 50, y: 88, label: "Back" },
        ],
      },
      {
        id: "ff-lounge-3",
        title: "First floor lounge — seating",
        image: hFfLounge3,
        links: [
          { to: "ff-lounge", x: 15, y: 85, label: "Back" },
        ],
      },
      {
        id: "bed1",
        title: "Bedroom 1",
        image: hBed1,
        links: [
          { to: "bed1-2", x: 70, y: 60, label: "Sitting corner" },
          { to: "bath1", x: 20, y: 55, label: "En-suite bathroom" },
          { to: "ff-lounge", x: 50, y: 88, label: "Back to lounge" },
        ],
      },
      {
        id: "bed1-2",
        title: "Bedroom 1 — sitting corner",
        image: hBed12,
        links: [
          { to: "bed1-3", x: 70, y: 60, label: "TV & shelving" },
          { to: "bed1", x: 15, y: 85, label: "Back" },
        ],
      },
      {
        id: "bed1-3",
        title: "Bedroom 1 — TV & shelving",
        image: hBed13,
        links: [
          { to: "bed1", x: 15, y: 85, label: "Back to bed" },
        ],
      },
      {
        id: "bath1",
        title: "Bathroom 1",
        image: hBath1,
        links: [
          { to: "bath1-2", x: 70, y: 60, label: "Shower" },
          { to: "bed1", x: 15, y: 85, label: "Back to Bedroom 1" },
        ],
      },
      {
        id: "bath1-2",
        title: "Bathroom 1 — shower",
        image: hBath12,
        links: [
          { to: "bath1", x: 15, y: 85, label: "Back" },
        ],
      },
      {
        id: "bed2",
        title: "Bedroom 2",
        image: hBed2,
        links: [
          { to: "bed2-2", x: 70, y: 60, label: "Bed view" },
          { to: "bath2", x: 20, y: 55, label: "En-suite bathroom" },
          { to: "ff-lounge-2", x: 50, y: 88, label: "Back to lounge" },
        ],
      },
      {
        id: "bed2-2",
        title: "Bedroom 2 — bed view",
        image: hBed22,
        links: [
          { to: "bed2-3", x: 70, y: 60, label: "TV wall" },
          { to: "bed2", x: 15, y: 85, label: "Back" },
        ],
      },
      {
        id: "bed2-3",
        title: "Bedroom 2 — TV wall",
        image: hBed23,
        links: [
          { to: "bed2-4", x: 70, y: 60, label: "Window side" },
          { to: "bed2-2", x: 15, y: 85, label: "Back" },
        ],
      },
      {
        id: "bed2-4",
        title: "Bedroom 2 — window side",
        image: hBed24,
        links: [
          { to: "bed2", x: 15, y: 85, label: "Back to bed" },
        ],
      },
      {
        id: "bath2",
        title: "Bathroom 2",
        image: hBath2,
        links: [
          { to: "bath2-2", x: 70, y: 60, label: "Vanity" },
          { to: "bath3", x: 30, y: 55, label: "Bathroom 3" },
          { to: "bed2", x: 15, y: 85, label: "Back to Bedroom 2" },
        ],
      },
      {
        id: "bath2-2",
        title: "Bathroom 2 — vanity",
        image: hBath22,
        links: [
          { to: "bath2", x: 15, y: 85, label: "Back" },
        ],
      },
      {
        id: "bath3",
        title: "Bathroom 3",
        image: hBath3,
        links: [
          { to: "bath3-2", x: 70, y: 60, label: "Vanity & shower" },
          { to: "bath2", x: 15, y: 85, label: "Back" },
        ],
      },
      {
        id: "bath3-2",
        title: "Bathroom 3 — vanity & shower",
        image: hBath32,
        links: [
          { to: "bath3", x: 15, y: 85, label: "Back" },
        ],
      },
    ],
  },

  /* --------------------------- TAKMEEL BAZAAR ------------------------- */
  {
    id: "bazaar",
    category: "Bazaar",
    name: "Takmeel Bazaar — 260 shops, 7 floors",
    location: "Takmeel Square, DHA Bahawalpur",
    scenes: [
      {
        id: "front",
        title: "Takmeel Bazaar frontage",
        image: bazaarFacadeHq,
        links: [
          { to: "corner", x: 85, y: 60, label: "Corner view" },
          { to: "tech-front", x: 50, y: 72, label: "Walk to the entrance" },
          { to: "sarafa-facade", x: 15, y: 66, label: "Sarafa Bazaar facade" },
        ],
      },
      {
        id: "atrium",
        title: "Grand atrium",
        image: bazaarAtrium,
        links: [
          { to: "atrium-2", x: 50, y: 45, label: "Take the escalator" },
          { to: "rangeela", x: 15, y: 60, label: "New Rangeela Bazaar" },
          { to: "entrance", x: 50, y: 88, label: "Back to entrance" },
        ],
      },
      {
        id: "rangeela",
        title: "New Rangeela Bazaar — Cloth market",
        image: rangeelaCorridorHq,
        links: [
          { to: "sarafa", x: 50, y: 55, label: "Walk to Sarafa Bazaar" },
          { to: "atrium", x: 20, y: 85, label: "Back to atrium" },
        ],
      },
      {
        id: "sarafa",
        title: "New Sarafa Bazaar — Jewellery market",
        image: sarafaBazaar,
        links: [
          { to: "tech", x: 50, y: 55, label: "Walk to Tech Bazaar" },
          { to: "rangeela", x: 20, y: 85, label: "Back to Rangeela Bazaar" },
        ],
      },
      {
        id: "tech",
        title: "New Tech Bazaar — Mobile market",
        image: techBazaar,
        links: [
          { to: "atrium-2", x: 50, y: 55, label: "Back to escalators" },
          { to: "sarafa", x: 20, y: 85, label: "Back to Sarafa Bazaar" },
        ],
      },
      {
        id: "atrium-2",
        title: "Escalators & upper floors",
        image: bazaarAtrium2,
        links: [
          { to: "sarafa", x: 25, y: 55, label: "New Sarafa Bazaar" },
          { to: "tech", x: 75, y: 60, label: "New Tech Bazaar" },
          { to: "atrium", x: 50, y: 88, label: "Back to atrium" },
        ],
      },
      {
        id: "entrance",
        title: "Main entrance",
        image: bazaarEntrance,
        links: [
          { to: "atrium", x: 55, y: 35, label: "Enter the bazaar" },
          { to: "tech-front", x: 15, y: 80, label: "Back outside" },
        ],
      },
      {
        id: "tech-front",
        title: "New Tech Bazaar entrance",
        image: techBazaarFront,
        links: [
          { to: "entrance", x: 45, y: 68, label: "Climb the entrance steps" },
          { to: "front", x: 85, y: 85, label: "Back to frontage" },
        ],
      },
      {
        id: "sarafa-facade",
        title: "New Sarafa Bazaar facade",
        image: sarafaFacadeHq,
        links: [
          { to: "front", x: 50, y: 80, label: "Back to frontage" },
        ],
      },
      {
        id: "corner",
        title: "Corner view",
        image: mainBuilding,
        links: [
          { to: "street", x: 70, y: 75, label: "Walk down the boulevard" },
          { to: "front", x: 15, y: 70, label: "Main frontage" },
        ],
      },
      {
        id: "street",
        title: "Bazaar boulevard",
        image: bazaarStreet,
        links: [
          { to: "gatehouse", x: 75, y: 70, label: "Gatehouse & drop-off" },
          { to: "corner", x: 15, y: 80, label: "Back to corner view" },
        ],
      },
      {
        id: "gatehouse",
        title: "Gatehouse & drop-off",
        image: bazaarGatehouse,
        links: [
          { to: "shuttle", x: 75, y: 70, label: "Shuttle service" },
          { to: "street", x: 15, y: 80, label: "Back to boulevard" },
        ],
      },
      {
        id: "shuttle",
        title: "Shuttle service",
        image: bazaarShuttle,
        links: [
          { to: "tech-front", x: 50, y: 72, label: "Walk to the entrance" },
          { to: "gatehouse", x: 15, y: 80, label: "Back to gatehouse" },
        ],
      },
    ],
  },

  /* ------------------------------ GLOW PARK ---------------------------- */
  {
    id: "park",
    category: "Park",
    name: "Glow Park — 4 acres",
    location: "Takmeel Square, DHA Bahawalpur",
    scenes: [
      {
        id: "glow",
        title: "Glow Park by night",
        image: glowPark,
        links: [
          { to: "gardens", x: 65, y: 62, label: "Walk into the gardens" },
          { to: "cafe", x: 20, y: 70, label: "Café under the canopies" },
        ],
      },
      {
        id: "gardens",
        title: "Park gardens & parking",
        image: squareParkParking,
        links: [
          { to: "cafe", x: 30, y: 45, label: "Café under the canopies" },
          { to: "glow", x: 80, y: 85, label: "Back to Glow Park" },
        ],
      },
      {
        id: "cafe",
        title: "Café under the canopies",
        image: squareCafeCanopy,
        links: [{ to: "glow", x: 80, y: 85, label: "Back to Glow Park" }],
      },
    ],
  },

  /* ------------------------ ROOFTOP RESTAURANTS ----------------------- */
  {
    id: "restaurants",
    category: "Restaurants",
    name: "Rooftop Restaurants & Food Court",
    location: "Takmeel Square, DHA Bahawalpur",
    scenes: [
      {
        id: "street",
        title: "Restaurant street",
        image: restaurantStreet,
        links: [
          { to: "rooftop", x: 60, y: 30, label: "Go up to the rooftop" },
          { to: "food-court", x: 15, y: 70, label: "Glow Park food court" },
        ],
      },
      {
        id: "rooftop",
        title: "Rooftop lounge",
        image: rooftopLounge,
        links: [
          { to: "rooftop-court", x: 80, y: 60, label: "Rooftop food court" },
          { to: "street", x: 15, y: 85, label: "Back to street" },
        ],
      },
      {
        id: "rooftop-court",
        title: "Rooftop food court",
        image: rooftopFoodCourt,
        links: [
          { to: "rooftop", x: 20, y: 70, label: "Back to lounge" },
          { to: "street", x: 70, y: 85, label: "Go downstairs" },
        ],
      },
      {
        id: "food-court",
        title: "Glow Park food court",
        image: foodCourt,
        links: [{ to: "street", x: 80, y: 80, label: "Back to restaurant street" }],
      },
    ],
  },
];
