// src/routes/projects.tsx
import { createFileRoute } from "@tanstack/react-router";
import { seo, projectsSchema } from "@/lib/seo";
import { PageShell } from "@/components/apartments/PageShell";
import { FeaturedProjects } from "@/components/projects/FeaturedProjects";
import { HorizontalShowcase } from "@/components/projects/HorizontalShowcase";
import { ProjectSpecs } from "@/components/projects/ProjectSpecs";
import { PropertyTypes } from "@/components/sections/PropertyTypes";
export const Route = createFileRoute("/projects")({ head: () =>
    seo({
      title: "Projects — Takmeel Square, Takmeel Bazaar, Takmeel Homes & Glow Park | DHA Bahawalpur",
      description:
        "Explore Takmeel Square developments in DHA Bahawalpur: 4 & 6 Marla commercial units, Takmeel Bazaar with 260 shops, Takmeel Homes 1 Kanal, 8 & 10 Marla villas, and the 4-acre Glow Park.",
      path: "/projects",
      keywords: ["4 Marla commercial DHA Bahawalpur", "6 Marla commercial Bahawalpur", "shops in Takmeel Bazaar", "villas DHA Bahawalpur"],
      schemas: [projectsSchema],
    }), component: () => <PageShell><div className="pt-32"><FeaturedProjects headingAs="h1"/><ProjectSpecs/><HorizontalShowcase/><PropertyTypes/></div></PageShell> });
