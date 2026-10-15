// src/data/navigation.ts
export interface NavItem {
  label: string;
  target: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const navItems: NavItem[] = [
  { label: "Home", target: "hero", href: "/" },
  { label: "About", target: "about", href: "/about", children: [{ label: "Our story", href: "/about" }, { label: "Leadership", href: "/about#leadership" }, { label: "Location", href: "/location" }, { label: "Construction Update", href: "/construction-update" }, { label: "Testimonials", href: "/testimonials" }, { label: "Careers", href: "/careers" }] },
  {
    label: "Projects",
    target: "projects",
    href: "/projects",
    children: [
      { label: "Takmeel Square", href: "/projects#takmeel-square" },
      { label: "Takmeel Bazaar", href: "/projects#takmeel-bazaar" },
      { label: "Takmeel Homes", href: "/projects#takmeel-homes" },
      { label: "Glow Park", href: "/project/glow-park" },
    ],
  },
  {
    label: "VR Tour",
    target: "tour",
    href: "/tour",
    children: [
      { label: "Takmeel Square", href: "/tour#tour-square" },
      { label: "Takmeel Homes", href: "/tour#tour-house" },
      { label: "Takmeel Bazaar", href: "/tour#tour-bazaar" },
      { label: "Glow Park", href: "/tour#tour-park" },
      { label: "Rooftop Restaurants", href: "/tour#tour-restaurants" },
    ],
  },
  { label: "Contact", target: "contact", href: "/contact" },
];

export const offices = [
  { label: "Head Office", value: "Takmeel Square, DHA Bahawalpur, Punjab, Pakistan" },
  { label: "Lahore Office", value: "Unit # CP 28, Commercial Fairways, Defence Raya, Lahore" },
  { label: "Dubai Office", value: "Conrad Business Tower, Office 1703, Sheikh Zayed Road, Dubai" },
];

export const site = {
  name: "Takmeel Square",
  tagline: "Largest commercial hub of South Punjab.",
  statement:
    "Takmeel Square, encompassing 1.2 million square feet, is South Punjab's premier commercial hub in DHA Bahawalpur.",
  address: "Takmeel Square, DHA Bahawalpur, Punjab, Pakistan",
  phone: "+92 311 1555559",
  email: "info@takmeel.pk",
  website: "www.takmeel.pk",
  locationUrl: "https://share.google/sgDdVnAH0Y18rndqv",
  socials: [
    { label: "Instagram", href: "https://instagram.com/takmeelsquare?obrf=MXR4NmJha3VmbGFrZQ%3D%3D&utm_source=qr" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/80787229" },
    { label: "Facebook", href: "https://www.facebook.com/takmeelsquare" },
    { label: "YouTube", href: "https://www.youtube.com/channel/UCoviyxhfd8qNC1Lj2HXgJTQ" },
  ],
};
