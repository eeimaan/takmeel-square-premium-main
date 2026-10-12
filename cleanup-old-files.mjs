// Run once from the project folder:  node cleanup-old-files.mjs
// Removes the dummy apartment pages, the empty /experience page and the fake partner logos.
import { rmSync } from "node:fs";
const remove = [
  "src/routes/apartments.index.tsx",
  "src/routes/apartments.$id.tsx",
  "src/routes/experience.tsx",
  "src/data/apartments.ts",
  "src/components/apartments/RequestModal.tsx",
  "public/logos",
];
for (const p of remove) {
  rmSync(p, { recursive: true, force: true });
  console.log("removed", p);
}
console.log("Done. Now run: npm install && npm run dev");
