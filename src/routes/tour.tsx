// src/routes/tour.tsx
import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { PageShell } from "@/components/apartments/PageShell";
import { VirtualTour } from "@/components/tour/VirtualTour";
export const Route = createFileRoute("/tour")({ head: () =>
    seo({
      title: "Virtual Tour, Takmeel Square, Homes, Bazaar & Glow Park | DHA Bahawalpur",
      description:
        "Take a virtual tour of Takmeel Square in DHA Bahawalpur, walk through Takmeel Homes villas, bedrooms and bathrooms, Takmeel Bazaar shops, Glow Park and the rooftop restaurants.",
      path: "/tour",
      keywords: ["Takmeel Square virtual tour", "DHA Bahawalpur villa tour", "Takmeel Bazaar tour"],
    }), component: () => <PageShell><div className="pt-10"><VirtualTour headingAs="h1"/></div></PageShell> });
