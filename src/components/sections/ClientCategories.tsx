// src/components/sections/ClientCategories.tsx
import { Building2, Home } from "lucide-react";
import { Section, Shell, Eyebrow } from "./Section";
import { commercialClients, residentialClients, type Client } from "@/data/clients";
import { copy } from "@/content/site";

function ClientGrid({ clients }: { clients: Client[] }) {
  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {clients.map((c, i) => (
        <div
          key={c.name}
          className="border border-border bg-background p-6 transition-colors duration-500 hover:border-gold"
          data-reveal
          data-reveal-delay={`${Math.min(i, 5) * 60}`}
        >
          <p className="display text-lg text-forest">{c.name}</p>
          <p className="mt-2 text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground">{c.note}</p>
        </div>
      ))}
    </div>
  );
}

/** Two client-category sections: Commercial Clients and Residential Clients. */
export function ClientCategories() {
  return (
    <Section id="clients" className="py-14 md:py-20">
      <Shell>
        <Eyebrow>{copy.clients.eyebrow}</Eyebrow>
        <h2 className="display mt-8 max-w-[18ch] text-[clamp(2rem,4.4vw,3.8rem)]" data-reveal>
          {copy.clients.heading}
        </h2>

        {/* Commercial */}
        <div className="mt-16 border-t border-border pt-12">
          <div className="flex items-center gap-3">
            <Building2 size={18} className="text-gold-deep" />
            <h3 className="display text-2xl text-forest md:text-3xl">Commercial Clients</h3>
          </div>
          <ClientGrid clients={commercialClients} />
        </div>

        {/* Residential */}
        <div className="mt-16 border-t border-border pt-12">
          <div className="flex items-center gap-3">
            <Home size={18} className="text-gold-deep" />
            <h3 className="display text-2xl text-forest md:text-3xl">Residential Clients</h3>
          </div>
          <ClientGrid clients={residentialClients} />
        </div>
      </Shell>
    </Section>
  );
}
