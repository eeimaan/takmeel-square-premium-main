// src/components/sections/Leadership.tsx
import { Section, Shell, Eyebrow } from "./Section";
import saeraFazal from "@/assets/takmeel/saera-fazal.jpg";
import kamranFazal from "@/assets/takmeel/leaders/kamran.jpg";
import qaisraFazal from "@/assets/takmeel/leaders/qaisra.jpg";
import humairaFazal from "@/assets/takmeel/leaders/humaira.jpg";
const leaders: { name: string; role: string; image: string; position?: string }[] = [
  { name: "Capt (R) Dr. Kamran Fazal", role: "Chief Executive Officer", image: kamranFazal },
  { name: "Dr. Qaisra Fazal", role: "Director", image: qaisraFazal },
  { name: "Humaira Fazal", role: "Director", image: humairaFazal },
  { name: "Capt Saera Fazal", role: "Director", image: saeraFazal, position: "50% 22%" },
];
export function Leadership() { return <Section id="leadership" className="py-14 md:py-24"><Shell><Eyebrow>Our leadership</Eyebrow><h2 className="display mt-8 text-[clamp(2.5rem,5vw,4.8rem)] text-forest">The people behind the vision.</h2><div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{leaders.map((person) => <article key={person.name} data-reveal><div className="aspect-[4/4.5] overflow-hidden bg-forest"><img src={person.image} alt={person.name} loading="lazy" style={person.position ? { objectPosition: person.position } : undefined} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"/></div><p className="eyebrow mt-6">{person.role} · Takmeel Square</p><h3 className="display mt-2 text-3xl text-forest">{person.name}</h3></article>)}</div></Shell></Section>; }
