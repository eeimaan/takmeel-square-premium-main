// src/data/clients.ts
/**
 * Client categories, shown in two sections on the home page:
 *   Commercial Clients  — shop / unit / investment buyers
 *   Residential Clients — Takmeel Homes owners
 *
 * >>> PLACEHOLDER CONTENT <<< Replace the names and notes with real, approved clients.
 */
export interface Client {
  name: string;
  note: string; // unit / project they bought, or a short label
}

export const commercialClients: Client[] = [
  { name: "Muhammad Imran", note: "Takmeel Bazaar, New Tech Bazaar" },
  { name: "Bilal Ahmed", note: "6 Marla Commercial" },
  { name: "Sana Tariq", note: "4 Marla Commercial" },
  { name: "Hassan Raza", note: "Takmeel Bazaar, New Sarafa Bazaar" },
  { name: "Imtiaz and Sons", note: "Rooftop Restaurant" },
  { name: "Zahid Enterprises", note: "Builders Mall Unit" },
  { name: "Al Noor Traders", note: "New Rangeela Bazaar" },
  { name: "Usman Textiles", note: "4 Marla Commercial" },
];

export const residentialClients: Client[] = [
  { name: "Ayesha Siddiqui", note: "Takmeel Homes, Sector A" },
  { name: "Fatima Noor", note: "Takmeel Homes, Sector C" },
  { name: "Dr. Kashif Mehmood", note: "1 Kanal Villa, Sector A" },
  { name: "Nadia & Faisal", note: "10 Marla Home, Sector C" },
  { name: "Rizwan Family", note: "8 Marla Home, Sector C" },
  { name: "Saadia Khan", note: "1 Kanal Villa, Sector A" },
];
