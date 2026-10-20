// src/data/updates.ts
/**
 * Construction / development updates, shown newest-first on the /construction-update page.
 *
 * >>> PLACEHOLDER CONTENT <<<
 *  - Replace each `image` with a real site photo (drop the files in src/assets and import them,
 *    the same way projects.ts does), and update the `date`, `title`, `summary` and `progress`.
 *  - `video` is optional: paste a YouTube watch/share link to show a "Watch update" button
 *    (for example the monthly drone walkthrough). Leave it out if there is no video.
 */
import { images } from "./projects";
import { TEMP_VIDEO } from "@/lib/youtube";

export interface ConstructionUpdate {
  id: string;
  date: string;        // e.g. "October 2026"
  title: string;
  summary: string;
  progress: number;    // 0–100, overall completion shown as a bar
  image: string;       // poster shown before the video plays
  video: string;       // YouTube link — TEMP placeholder, replace with final URL
}

export const constructionUpdates: ConstructionUpdate[] = [
  {
    id: "oct-2026",
    date: "October 2026",
    title: "Takmeel Square, structure topping out",
    summary:
      "Grey structure of A Block facing the Main Boulevard is nearing completion, with B Block facing Glow Park following close behind. Façade and glazing works have begun on the lower floors.",
    progress: 72,
    image: images.squareAerialDay,
    video: TEMP_VIDEO,
  },
  {
    id: "aug-2026",
    date: "August 2026",
    title: "Takmeel Bazaar, upper floors in progress",
    summary:
      "Concrete works have reached the upper retail floors of the 7 floor Takmeel Bazaar. Internal partitions for New Rangeela, New Sarafa and New Tech Bazaar are being laid out.",
    progress: 58,
    image: images.bazaarFacadeHq,
    video: TEMP_VIDEO,
  },
  {
    id: "jun-2026",
    date: "June 2026",
    title: "Glow Park, landscaping and hardscape",
    summary:
      "Earthworks and hardscaping are underway across the 4 acre Glow Park, alongside the food court foundations and the surrounding parking and walkways.",
    progress: 40,
    image: images.squareParkParking,
    video: TEMP_VIDEO,
  },
  {
    id: "mar-2026",
    date: "March 2026",
    title: "Takmeel Homes, Sector A and C handovers",
    summary:
      "Fully built luxury villas in Sector A (1 Kanal) and Sector C (8 & 10 Marla) are complete, with finishing and handovers continuing to owners.",
    progress: 100,
    image: images.houseView02,
    video: TEMP_VIDEO,
  },
  {
    id: "dec-2025",
    date: "December 2025",
    title: "Site mobilisation and foundations",
    summary:
      "Site mobilisation, excavation and raft foundations completed for the Takmeel Square commercial blocks on the Main Boulevard of DHA Bahawalpur.",
    progress: 20,
    image: images.squareBoulevardDay,
    video: TEMP_VIDEO,
  },
];
