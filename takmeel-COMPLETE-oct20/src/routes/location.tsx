// src/routes/location.tsx
import { createFileRoute } from "@tanstack/react-router";
import { seo, areaSchema } from "@/lib/seo";
import { AreaGuide } from "@/components/sections/AreaGuide";
import { PageShell } from "@/components/apartments/PageShell";
import { Shell } from "@/components/sections/Section";
export const Route = createFileRoute("/location")({ head: () =>
    seo({
      title: "Location, Takmeel Square, Main Boulevard, DHA Bahawalpur",
      description:
        "Takmeel Square is on the Main Boulevard of DHA Bahawalpur, 3.6 KM from Bahawalpur Airport and 4.9 KM from Bahawalpur Cantt. Get directions on Google Maps.",
      path: "/location",
      keywords: ["Takmeel Square location", "DHA Bahawalpur map", "Takmeel Square directions", "DHA Bahawalpur area guide"],
      schemas: [areaSchema],
    }), component: () => (
    <PageShell>
      {/* Header + map merged into one continuous block (no white gap) */}
      <section className="surface-dark pb-6 pt-40 md:pb-8 md:pt-48">
        <Shell>
          <span className="eyebrow text-gold">Location</span>
          <h1 className="display mt-6 max-w-4xl text-[clamp(2.6rem,7vw,6rem)]">
            Find us in <em className="text-gold">DHA Bahawalpur.</em>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/65 md:text-lg">
            Takmeel Square sits on the Main Boulevard of DHA Bahawalpur, minutes from the Airport and Cantt, with direct
            access via the DHA Main Gate.
          </p>
        </Shell>
      </section>
      <AreaGuide />
    </PageShell>
  ) });
