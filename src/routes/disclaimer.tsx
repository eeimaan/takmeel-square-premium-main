// src/routes/disclaimer.tsx
import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { PageShell } from "@/components/apartments/PageShell";
import { LegalPage } from "@/components/legal/LegalPage";
import { legalDocs } from "@/data/legal";

export const Route = createFileRoute("/disclaimer")({
  head: () =>
    seo({
      title: "Disclaimer, Takmeel Square",
      description: "Images, renders and virtual tours on the Takmeel Square website are artistic impressions; specifications and availability are subject to change.",
      path: "/disclaimer",
    }),
  component: () => (
    <PageShell>
      <LegalPage doc={legalDocs["disclaimer"]} />
    </PageShell>
  ),
});
