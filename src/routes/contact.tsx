// src/routes/contact.tsx
import { createFileRoute } from "@tanstack/react-router";
import { seo, faqSchema } from "@/lib/seo";
import { PageShell } from "@/components/apartments/PageShell";
import { Contact } from "@/components/contact/Contact";
import { Location } from "@/components/sections/Location";
import { Faq } from "@/components/sections/Faq";
export const Route = createFileRoute("/contact")({ head: () =>
    seo({
      title: "Contact Takmeel Square — Book a Site Visit | UAN +92 311 1555559",
      description:
        "Contact Takmeel Square for pricing, availability and site visits. UAN +92 311 1555559, info@takmeel.pk. Offices in DHA Bahawalpur, Lahore and Dubai.",
      path: "/contact",
      keywords: ["Takmeel Square contact", "Takmeel Square phone number", "book site visit Bahawalpur"],
      schemas: [faqSchema],
    }), component: () => <PageShell><div id="schedule" className="pt-20"><Contact headingAs="h1"/><Location/><Faq/></div></PageShell> });
