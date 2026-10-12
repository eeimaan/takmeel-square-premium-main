// src/routes/location.tsx
import { createFileRoute } from "@tanstack/react-router";
import { seo, areaSchema } from "@/lib/seo";
import { AreaGuide } from "@/components/sections/AreaGuide";
import { PageShell } from "@/components/apartments/PageShell";
import { Location } from "@/components/sections/Location";
export const Route = createFileRoute("/location")({ head: () =>
    seo({
      title: "Location — Takmeel Square, Main Boulevard, DHA Bahawalpur",
      description:
        "Takmeel Square is on the Main Boulevard of DHA Bahawalpur — 3.6 KM from Bahawalpur Airport and 4.9 KM from Bahawalpur Cantt. Get directions on Google Maps.",
      path: "/location",
      keywords: ["Takmeel Square location", "DHA Bahawalpur map", "Takmeel Square directions", "DHA Bahawalpur area guide"],
      schemas: [areaSchema],
    }), component: () => <PageShell><div className="pt-20"><Location headingAs="h1"/><AreaGuide/></div></PageShell> });
