// src/routes/careers.tsx
import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { PageShell } from "@/components/apartments/PageShell";
import { Careers } from "@/components/careers/Careers";

export const Route = createFileRoute("/careers")({
  head: () =>
    seo({
      title: "Careers at Takmeel Square, Join Our Team | DHA Bahawalpur",
      description:
        "Explore careers at Takmeel Square, DHA Bahawalpur. View open positions in construction, sales, marketing and more, and apply online.",
      path: "/careers",
      keywords: ["Takmeel Square careers", "jobs DHA Bahawalpur", "real estate jobs Bahawalpur"],
    }),
  component: () => (
    <PageShell>
      <Careers />
    </PageShell>
  ),
});
