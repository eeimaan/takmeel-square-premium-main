// src/routes/about.tsx
import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { PageShell } from "@/components/apartments/PageShell";
import { About } from "@/components/sections/About";
import { Stats } from "@/components/sections/Stats";
import { Leadership } from "@/components/sections/Leadership";
import { Vision } from "@/components/sections/Vision";
export const Route = createFileRoute("/about")({ head: () =>
    seo({
      title: "About Takmeel Square — South Punjab's Premier Commercial Hub | Leadership",
      description:
        "Learn about Takmeel Square, the 1.2 million sq ft commercial hub in DHA Bahawalpur, our vision, and the leadership team led by CEO Capt (R) Dr. Kamran Fazal.",
      path: "/about",
      keywords: ["about Takmeel Square", "Kamran Fazal", "Takmeel Square leadership"],
    }), component: () => <PageShell><div className="pt-24"><About headingAs="h1"/><Stats/><Leadership/><Vision/></div></PageShell> });
