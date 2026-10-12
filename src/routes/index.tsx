// src/routes/index.tsx
import { createFileRoute } from "@tanstack/react-router";
import { seo, faqSchema } from "@/lib/seo";

import { IntroCurtain } from "@/components/brand/IntroCurtain";
import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/sections/About";
import { Vision } from "@/components/sections/Vision";
import { FeaturedProjects } from "@/components/projects/FeaturedProjects";
import { PropertyTypes } from "@/components/sections/PropertyTypes";
import { Amenities } from "@/components/amenities/Amenities";
import { Location } from "@/components/sections/Location";
import { Architecture } from "@/components/sections/Architecture";
import { Gallery } from "@/components/gallery/Gallery";
import { WhyUs } from "@/components/sections/WhyUs";
import { ProjectDetails } from "@/components/sections/ProjectDetails";
import { CallToAction } from "@/components/sections/CallToAction";
import { Contact } from "@/components/contact/Contact";
import { Faq } from "@/components/sections/Faq";
import { VirtualTour } from "@/components/tour/VirtualTour";
import { useEffect } from "react";
import { scrollToSection } from "@/lib/animations/useSmoothScroll";
import { Stats } from "@/components/sections/Stats";
import { Leadership } from "@/components/sections/Leadership";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { ChatWidget } from "@/components/contact/ChatWidget";
import { Footer } from "@/components/footer/Footer";
import { useReveal } from "@/lib/animations/useReveal";
import { useScrollAnimations } from "@/lib/animations/useScrollAnimations";
import { useSmoothScroll } from "@/lib/animations/useSmoothScroll";
import { ImageLightbox } from "@/components/gallery/ImageLightbox";
import { useState, type MouseEvent } from "react";

export const Route = createFileRoute("/")({
  head: () =>
    seo({
      title: "Takmeel Square — Largest Commercial Hub in DHA Bahawalpur, South Punjab",
      description:
        "Takmeel Square, DHA Bahawalpur: 1.2 million sq ft commercial hub with 4 & 6 Marla commercial units, Takmeel Bazaar (260 shops), Takmeel Homes villas, 4-acre Glow Park and 1,100 parking spaces.",
      path: "/",
      keywords: ["commercial units DHA Bahawalpur", "Takmeel Bazaar", "Takmeel Homes", "Glow Park Bahawalpur", "real estate Bahawalpur"],
      schemas: [faqSchema],
    }),
  component: Index,
});

function Index() {
  const [photo, setPhoto] = useState<{ src: string; alt: string } | null>(null);
  useSmoothScroll();
  useScrollAnimations();
  const ref = useReveal<HTMLDivElement>();
  useEffect(() => {
    const h = window.location.hash.slice(1);
    if (h) window.setTimeout(() => scrollToSection(h.startsWith("tour-") ? "tour" : h, true), 600);
  }, []);

  const openPhoto = (event: MouseEvent<HTMLElement>) => {
    const target = event.target;
    if (!(target instanceof Element) || target.closest("#tour, a, button")) return;
    const frame = target.closest<HTMLElement>("[data-lightbox-image]");
    const image = target instanceof HTMLImageElement
      ? target
      : frame?.querySelector<HTMLImageElement>("img[data-lightbox-current], img");
    if (!image || image.closest("#tour") || image.getAttribute("aria-hidden") === "true") return;
    setPhoto({ src: image.currentSrc || image.src, alt: image.alt });
  };

  return (
    <div ref={ref} className="w-full overflow-x-hidden">
      <IntroCurtain />
      <Navbar />
      <main onClick={openPhoto}>
        <Hero />
        <About />
        <TrustedBy />
        <FeaturedProjects />
        <VirtualTour />
        <Amenities />
        <PropertyTypes />
        <Vision />
        <WhyUs />
        {/* <Architecture /> */}
        <Gallery />
        <ProjectDetails />
        <Leadership />
        <Stats />
        {/* <CallToAction /> */}
        <Faq />
        <Location />
        <Contact />
      </main>
      <ImageLightbox photo={photo} onClose={() => setPhoto(null)} />
      <Footer />
      <ChatWidget />
    </div>
  );
}
