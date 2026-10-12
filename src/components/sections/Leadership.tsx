// src/components/sections/Leadership.tsx
import { Section, Shell, Eyebrow } from "./Section";
import saeraFazal from "@/assets/takmeel/saera-fazal.jpg";
const leaders: { name: string; role: string; image: string; position?: string }[] = [
  { name: "Capt (R) Dr. Kamran Fazal", role: "Chief Executive Officer", image: "https://www.takmeel.pk/wp-content/uploads/2021/09/WhatsApp-Image-2025-01-08-at-4.56.09-PM.jpeg" },
  { name: "Dr. Qaisra Fazal", role: "Director", image: "https://www.takmeel.pk/wp-content/uploads/2025/02/madam.jpg" },
  { name: "Humaira Fazal", role: "Director", image: "https://www.takmeel.pk/wp-content/uploads/2025/01/humaira-mam.jpeg" },
  { name: "Capt Saera Fazal", role: "Director", image: saeraFazal, position: "50% 22%" },
];
export function Leadership() { return <Section id="leadership" className="py-24 md:py-36"><Shell><Eyebrow>Our leadership</Eyebrow><h2 className="display mt-8 text-[clamp(2.5rem,5vw,4.8rem)] text-forest">The people behind the vision.</h2><div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{leaders.map((person) => <article key={person.name} data-reveal><div className="aspect-[4/4.5] overflow-hidden bg-forest"><img src={person.image} alt={person.name} loading="lazy" style={person.position ? { objectPosition: person.position } : undefined} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"/></div><p className="eyebrow mt-6">{person.role} · Takmeel Square</p><h3 className="display mt-2 text-3xl text-forest">{person.name}</h3></article>)}</div></Shell></Section>; }
