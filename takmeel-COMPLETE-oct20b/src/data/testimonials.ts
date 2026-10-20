// src/data/testimonials.ts
/**
 * Video testimonials, shown as poster + play button; clicking opens the YouTube video.
 *
 * >>> PLACEHOLDER CONTENT <<<
 *  - `video`: currently a TEMPORARY placeholder link (TEMP_VIDEO). Replace each with the
 *    final YouTube testimonial URL. The player accepts watch?v=, youtu.be/ or embed links.
 *  - `poster`: the still shown before play. Swap for a real video still if you have one.
 *  - `category`: "Commercial" or "Residential" — also used by the Client Categories sections.
 *  - Replace the quotes, names, context and dates with real, approved testimonials.
 */
import { images } from "./projects";
import { TEMP_VIDEO } from "@/lib/youtube";

export interface Testimonial {
  quote: string;
  name: string;
  context: string;
  date: string;
  category: "Commercial" | "Residential";
  video: string;   // YouTube link — TEMP placeholder, replace with final URL
  poster: string;  // still image shown before the video plays
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Booking a shop in Takmeel Bazaar was the easiest investment decision I have made. The location on the Main Boulevard and the footfall it is going to attract made it an obvious choice.",
    name: "Muhammad Imran",
    context: "Takmeel Bazaar, New Tech Bazaar",
    date: "August 2026",
    category: "Commercial",
    video: TEMP_VIDEO,
    poster: images.bazaarFacadeHq,
  },
  {
    quote:
      "The team guided us through every step and the site visit sealed it for us. Our family now owns a home in Sector A, and the finishing quality speaks for itself.",
    name: "Ayesha Siddiqui",
    context: "Takmeel Homes, Sector A",
    date: "July 2026",
    category: "Residential",
    video: TEMP_VIDEO,
    poster: images.houseView02,
  },
  {
    quote:
      "As an overseas investor I needed trust and transparency. Takmeel Square delivered both, and the virtual tour let me walk through the project before I ever flew back to Pakistan.",
    name: "Bilal Ahmed",
    context: "Takmeel Square, 6 Marla Commercial",
    date: "June 2026",
    category: "Commercial",
    video: TEMP_VIDEO,
    poster: images.squareBoulevardDay,
  },
  {
    quote:
      "A genuinely well planned commercial hub for Bahawalpur. The piazzas, parking and the Glow Park make it a destination, not just a market.",
    name: "Sana Tariq",
    context: "Takmeel Square, 4 Marla Commercial",
    date: "May 2026",
    category: "Commercial",
    video: TEMP_VIDEO,
    poster: images.squareCafeCanopy,
  },
  {
    quote:
      "We compared several projects in South Punjab and Takmeel Square stood out for its scale and master planning. Timely updates from the sales team kept us confident throughout.",
    name: "Hassan Raza",
    context: "Takmeel Bazaar, New Sarafa Bazaar",
    date: "April 2026",
    category: "Commercial",
    video: TEMP_VIDEO,
    poster: images.sarafaFacadeHq,
  },
  {
    quote:
      "From the first call to possession, the process was smooth and professional. Our villa in Sector C exceeded what we had seen in the renders.",
    name: "Fatima Noor",
    context: "Takmeel Homes, Sector C",
    date: "March 2026",
    category: "Residential",
    video: TEMP_VIDEO,
    poster: images.lounge,
  },
];
