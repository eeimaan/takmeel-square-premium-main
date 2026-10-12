// src/routes/privacy-policy.tsx
import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { PageShell } from "@/components/apartments/PageShell";
import { LegalPage } from "@/components/legal/LegalPage";
import { legalDocs } from "@/data/legal";

export const Route = createFileRoute("/privacy-policy")({
  head: () =>
    seo({
      title: "Privacy Policy — Takmeel Square",
      description: "How Takmeel Square collects, uses and protects personal information submitted through takmeel.pk enquiry and booking forms.",
      path: "/privacy-policy",
    }),
  component: () => (
    <PageShell>
      <LegalPage doc={legalDocs["privacy-policy"]} />
    </PageShell>
  ),
});
