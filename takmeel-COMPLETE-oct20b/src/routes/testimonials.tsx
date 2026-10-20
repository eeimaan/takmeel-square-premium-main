// src/routes/testimonials.tsx
import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { PageShell } from "@/components/apartments/PageShell";
import { Shell } from "@/components/sections/Section";
import { Testimonials } from "@/components/sections/Testimonials";
import { ClientCategories } from "@/components/sections/ClientCategories";

export const Route = createFileRoute("/testimonials")({
  head: () =>
    seo({
      title: "Testimonials, What Our Clients Say | Takmeel Square",
      description:
        "Read what investors and families say about Takmeel Square, Takmeel Bazaar and Takmeel Homes in DHA Bahawalpur.",
      path: "/testimonials",
      keywords: ["Takmeel Square reviews", "Takmeel Square testimonials", "DHA Bahawalpur reviews"],
    }),
  component: () => (
    <PageShell>
      <section className="surface-dark pb-16 pt-40 md:pb-20 md:pt-48">
        <Shell>
          <span className="eyebrow text-gold">Testimonials</span>
          <h1 className="display mt-6 max-w-4xl text-[clamp(2.6rem,7vw,6rem)]">
            What our clients <em className="text-gold">say.</em>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/65 md:text-lg">
            Investors, shop owners and families share their experience of buying at Takmeel Square, DHA Bahawalpur.
          </p>
        </Shell>
      </section>
      <Testimonials />
      <ClientCategories />
    </PageShell>
  ),
});
