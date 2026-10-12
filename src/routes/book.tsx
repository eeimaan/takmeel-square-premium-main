// src/routes/book.tsx
import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { PageShell } from "@/components/apartments/PageShell";
import { BookVisit } from "@/components/contact/BookVisit";

export const Route = createFileRoute("/book")({
  head: () =>
    seo({
      title: "Book a Site Visit or Schedule a Call — Takmeel Square, DHA Bahawalpur",
      description:
        "Book a site visit to Takmeel Square in DHA Bahawalpur or schedule a call with our sales team. Choose a date and time that suits you.",
      path: "/book",
      keywords: ["book site visit Takmeel Square", "schedule call Takmeel Square", "visit DHA Bahawalpur"],
    }),
  component: () => (
    <PageShell>
      <BookVisit />
    </PageShell>
  ),
});
