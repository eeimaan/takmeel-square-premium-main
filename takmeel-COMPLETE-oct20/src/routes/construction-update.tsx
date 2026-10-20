// src/routes/construction-update.tsx
import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { PageShell } from "@/components/apartments/PageShell";
import { Shell } from "@/components/sections/Section";
import { ConstructionUpdates } from "@/components/sections/ConstructionUpdates";

export const Route = createFileRoute("/construction-update")({
  head: () =>
    seo({
      title: "Construction Update, Takmeel Square Development Progress | DHA Bahawalpur",
      description:
        "Follow the construction and development progress of Takmeel Square, Takmeel Bazaar, Takmeel Homes and Glow Park in DHA Bahawalpur, updated regularly.",
      path: "/construction-update",
      keywords: [
        "Takmeel Square construction update",
        "Takmeel Square development progress",
        "Takmeel Bazaar construction",
        "DHA Bahawalpur project progress",
      ],
    }),
  component: () => (
    <PageShell>
      <section className="surface-dark pb-16 pt-40 md:pb-20 md:pt-48">
        <Shell>
          <span className="eyebrow text-gold">Construction Update</span>
          <h1 className="display mt-6 max-w-4xl text-[clamp(2.6rem,7vw,6rem)]">
            Progress on <em className="text-gold">site.</em>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/65 md:text-lg">
            A running record of how Takmeel Square is taking shape in DHA Bahawalpur, from foundations to finishing.
          </p>
        </Shell>
      </section>
      <ConstructionUpdates />
    </PageShell>
  ),
});
