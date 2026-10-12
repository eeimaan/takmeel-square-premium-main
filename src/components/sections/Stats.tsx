// src/components/sections/Stats.tsx
import { Building2, Store, Car, Trees } from "lucide-react";
import { Section, Shell, Eyebrow } from "./Section";
const stats = [
  { icon: Building2, value: "1.2M", label: "Square Feet Commercial Hub" },
  { icon: Store, value: "260", label: "Shops in Takmeel Bazaar" },
  { icon: Car, value: "1,100", label: "Parking Spaces" },
  { icon: Trees, value: "4", label: "Acre Glow Park" },
];
export function Stats() { return <Section className="border-y border-forest/10 py-20 md:py-24"><Shell><Eyebrow>Takmeel at a glance</Eyebrow><div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">{stats.map(({icon: Icon, value, label}) => <div key={label} className="border-l border-gold/50 pl-5" data-reveal><Icon size={28} strokeWidth={1.2} className="text-gold-deep"/><p className="display mt-7 text-[clamp(2.5rem,4vw,4.4rem)] text-forest">{value}</p><p className="mt-3 max-w-[14rem] text-xs uppercase leading-relaxed tracking-[0.12em] text-forest/70">{label}</p></div>)}</div></Shell></Section>; }
