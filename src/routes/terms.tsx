// src/routes/terms.tsx
import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { PageShell } from "@/components/apartments/PageShell";
import { LegalPage } from "@/components/legal/LegalPage";
import { legalDocs } from "@/data/legal";

export const Route = createFileRoute("/terms")({
  head: () =>
    seo({
      title: "Terms & Conditions — Takmeel Square",
      description: "Terms and conditions for using the Takmeel Square website, including information, bookings and intellectual property.",
      path: "/terms",
    }),
  component: () => (
    <PageShell>
      <LegalPage doc={legalDocs["terms"]} />
    </PageShell>
  ),
});
