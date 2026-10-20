// src/content/site.ts
// ─────────────────────────────────────────────────────────────────────────────
//  SINGLE SOURCE OF TRUTH for the website's editable copy & links.
//  Edit text, headings, contact details, social links, nav and leader profiles
//  here — components read from this file, so you never have to hunt through them.
//  (Project / spec / FAQ / testimonial / career data live in their own files
//   under src/data, which are the data-heavy tables.)
// ─────────────────────────────────────────────────────────────────────────────

import kamranFazal from "@/assets/takmeel/leaders/kamran.jpg";
import qaisraFazal from "@/assets/takmeel/leaders/qaisra.jpg";
import humairaFazal from "@/assets/takmeel/leaders/humaira.jpg";
import saeraFazal from "@/assets/takmeel/saera-fazal.jpg";

/* ─── Brand & contact ─────────────────────────────────────────────────────── */
export const site = {
  name: "Takmeel Square",
  tagline: "Largest commercial hub of South Punjab.",
  statement:
    "Takmeel Square, encompassing 1.2 million square feet, is South Punjab's premier commercial hub in DHA Bahawalpur.",
  address: "Takmeel Square, DHA Bahawalpur, Punjab, Pakistan",
  phone: "+92 311 1555559",
  whatsapp: "923111555559",
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

export const offices = [
  { label: "Head Office", value: "Takmeel Square, DHA Bahawalpur, Punjab, Pakistan" },
  { label: "Lahore Office", value: "Unit # CP 28, Commercial Fairways, Defence Raya, Lahore" },
  { label: "Dubai Office", value: "Conrad Business Tower, Office 1703, Sheikh Zayed Road, Dubai" },
];

/* ─── Navigation ──────────────────────────────────────────────────────────── */
export interface NavItem {
  label: string;
  target: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const navItems: NavItem[] = [
  { label: "Home", target: "hero", href: "/" },
  {
    label: "About",
    target: "about",
    href: "/about",
    children: [
      { label: "Our story", href: "/about" },
      { label: "Leadership", href: "/about#leadership" },
      { label: "Location", href: "/location" },
      { label: "Construction Update", href: "/construction-update" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    label: "Projects",
    target: "projects",
    href: "/projects",
    children: [
      { label: "Takmeel Square", href: "/project/takmeel-square" },
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
      { label: "Al-Fatah", href: "/tour#tour-alfatah" },
    ],
  },
  { label: "Contact", target: "contact", href: "/contact" },
];

/* ─── Leadership ──────────────────────────────────────────────────────────── */
export interface LeaderProfileSection {
  heading: string;
  paragraphs?: string[];
  items?: string[];
  groups?: { subheading: string; items: string[] }[];
}

export interface Leader {
  id: string;
  name: string;
  role: string;
  image: string;
  position?: string;        // object-position for the card image
  headline?: string;        // one-line professional headline
  tagline?: string;         // short motto
  profile?: LeaderProfileSection[];  // full profile shown on /leadership/$id
}

export const leaders: Leader[] = [
  { id: "kamran-fazal", name: "Capt (R) Dr. Kamran Fazal", role: "Chief Executive Officer", image: kamranFazal },
  { id: "qaisra-fazal", name: "Dr. Qaisra Fazal", role: "Director", image: qaisraFazal },
  {
    id: "humaira-fazal",
    name: "Humaira Fazal",
    role: "Director",
    image: humairaFazal,
    headline:
      "Interior Designer | Construction & Real Estate Development Professional | Entrepreneur | Business Leader",
    tagline: "Designing with vision. Building with purpose. Leading with excellence.",
    profile: [
      {
        heading: "Professional Profile",
        paragraphs: [
          "Humaira Fazal is an accomplished interior designer, construction and real estate development professional, entrepreneur, and business leader with over 15 years of professional experience spanning interior architecture, residential and commercial construction, furniture design, project management, finance, and business operations.",
          "Her professional approach combines creative vision with technical expertise, financial discipline, and strategic leadership. She has contributed to a diverse portfolio of residential, commercial, hospitality, and recreational developments, with work associated with DHA Lahore, Islamabad, Multan, and Bahawalpur, as well as projects in Dubai.",
        ],
      },
      {
        heading: "Education & Professional Development",
        items: [
          "Interior Design Degree from the National College of Arts (NCA), Pakistan.",
          "Academic degrees in Literature from Bahauddin Zakariya University (BZU), Multan.",
          "Postgraduate Diploma in Information Technology.",
          "Four-week professional course from the Lahore University of Management Sciences (LUMS).",
          "High Performance Leadership Workshop, National Defence University (NDU), completed 11–13 December 2025.",
        ],
      },
      {
        heading: "Leadership & Business Management",
        paragraphs: [
          "Humaira serves as CEO of Humaira Fazal Designs, Humaira Fazal Design & Construction (Pvt.) Ltd., and Kollaage Interiors. She also serves as COO of Takmeel Square (Pvt.) Ltd.",
          "Her leadership responsibilities encompass creative direction, project planning and execution, procurement, vendor management, budgeting, financial administration, contractor supervision, construction operations, and strategic business development.",
          "Through professional engagement with DHA Multan, she has developed experience in managing complex projects, coordinating multidisciplinary teams, controlling costs, and delivering work to defined quality standards.",
        ],
      },
      {
        heading: "Selected Projects & Portfolio",
        groups: [
          {
            subheading: "Residential Developments",
            items: [
              "Design of 519 houses at Gardenia Homes, DHA Bahawalpur.",
              "Design of a five-kanal PD House.",
              "Residential projects associated with DHA Lahore, DHA Islamabad, DHA Multan, and DHA Bahawalpur.",
              "Luxury residential interiors, space planning, material selection, finishing, and furniture coordination.",
            ],
          },
          {
            subheading: "Commercial & Development Projects",
            items: [
              "Takmeel Square, a 14-acre commercial hub.",
              "Glow Park, a four-acre recreational development.",
              "Takmeel Courtyard.",
              "Takmeel Homes.",
              "Takmeel Bazaar.",
              "CHF Showroom, Gulberg, Lahore.",
              "Finishing works associated with Centaurus Mall, Islamabad.",
            ],
          },
          {
            subheading: "Hospitality, Retail & International Projects",
            items: [
              "Design of Bundu Khan Café and its furniture.",
              "Projects associated with Conrad Dubai.",
              "Furniture, joinery, interior detailing, and finishing assignments for commercial and hospitality environments.",
            ],
          },
        ],
      },
      {
        heading: "Technical Expertise",
        paragraphs: [
          "Her areas of expertise include interior architecture, space planning, furniture and joinery design, material and finish selection, façade and signage design, electrical and HVAC coordination, procurement, quality control, construction supervision, project completion, contractual coordination, budgeting, cost control, and finance and accounts administration.",
          "Her combined design and financial experience allows her to balance aesthetic quality, technical requirements, project timelines, and commercial objectives.",
        ],
      },
      {
        heading: "Professional Leadership & Community Service",
        paragraphs: [
          "Humaira is a corporate member of the Lahore Chamber of Commerce and serves as Club Administration Chair for Rotary Year 2026–2027 at the Rotary Club of Lahore City, contributing to club administration, organizational coordination, and community engagement.",
          "Her participation in initiatives includes a tree plantation drive in 2026 and a Thalassemia Day event at the Punjab Assembly, reflecting her commitment to community service and social responsibility.",
          "In 2026, Humaira became involved with the FPCCI Central Standing Committee on National Economic Policies & Reforms, complementing her experience in construction, finance, entrepreneurship, and business operations.",
        ],
      },
      {
        heading: "Awards & Professional Recognition",
        items: [
          "Three awards from the Project Director, DHA Multan, during 2020–2022.",
          "Recognition from the President of Pakistan in 2024.",
          "Punjab Ki Beti Award, 2025.",
          "Recognition associated with the Swiss Ministry, 2025.",
          "WEPX Award.",
          "Iconic Woman Award, 2026.",
          "An appreciation letter from the Sarhad Chamber of Commerce & Industry for design and consultation.",
        ],
      },
      {
        heading: "Professional Philosophy",
        paragraphs: [
          "As a woman entrepreneur and business leader, Humaira believes that successful development requires more than attractive design. It demands thoughtful planning, technical excellence, financial responsibility, quality workmanship, and a clear understanding of the people and communities a project serves.",
          "Her work reflects a commitment to creating spaces that are functional, distinctive, commercially valuable, and built to last. Her philosophy is simple: design with purpose, build with integrity, lead with confidence, and create a lasting legacy of excellence.",
        ],
      },
    ],
  },
  {
    id: "saera-fazal",
    name: "Capt Saera Fazal",
    role: "Director",
    image: saeraFazal,
    position: "50% 22%",
    headline: "CEO | Entrepreneur | Pilot | Visionary Leader",
    tagline: "Empowering lives. Elevating potential. Inspiring purposeful living.",
    profile: [
      {
        heading: "Professional Profile",
        paragraphs: [
          "Capt. Saera Fazal is a dynamic leader, entrepreneur, and pilot with a passion for personal growth, holistic wellness, and purposeful living. With a unique blend of analytical expertise, business acumen, and spiritual wisdom, she empowers individuals and organizations to unlock their highest potential and create meaningful impact.",
          "Across wellness, design, and lifestyle sectors, her work is defined by discipline, vision, and a commitment to inspiring others to live with clarity, confidence, and connection.",
        ],
      },
      {
        heading: "Education & Professional Development",
        items: [
          "MSc in Mathematics from Government College University, Lahore, Pakistan.",
          "MBA from Government College University, Lahore, Pakistan.",
        ],
      },
      {
        heading: "Leadership & Business Management",
        paragraphs: [
          "Saera serves as CEO of Kollaage Concepts (Pvt.) Ltd., Panash (Pvt.) Ltd., Sukh House, and Saera Manntaq, leading multiple successful ventures across the wellness, design, and lifestyle sectors.",
          "Her leadership blends strategic thinking with intuition and empathy, enabling her to build and scale purpose-driven businesses while mentoring and empowering the teams around her.",
        ],
      },
      {
        heading: "Entrepreneurial Ventures & Milestones",
        items: [
          "Founder of Saera Mann Taq, an innovative and transformative personal growth program launched in 2003, integrating mind, heart, body, and soul to guide individuals towards holistic self-discovery, spiritual alignment, and empowerment.",
          "Co-founder of an upcoming comfortable shoe brand, where she holds an 85% stake, driven by her passion for innovation and style.",
          "Holder of an official Pilot Permit (SPP), granting her the ability to fly aircraft up to 600 kg, a testament to her adventurous spirit, discipline, and relentless pursuit of excellence.",
          "Embarked on a profound spiritual journey in 2003, sharing the wisdom of mindfulness, meditation, and inner growth to inspire purposeful and harmonious living.",
        ],
      },
      {
        heading: "Core Strengths",
        items: [
          "Visionary Leadership.",
          "Holistic Wellness Advocacy.",
          "Aviation & Discipline.",
          "Strategic Thinking.",
          "Spiritual Insight.",
          "Entrepreneurial Excellence.",
          "Creative Expression.",
          "Global Perspective.",
        ],
      },
      {
        heading: "Awards & Professional Recognition",
        items: [
          "Recipient of the Best Women Entrepreneur 2023 Presidential Award, recognizing her outstanding contributions to business and leadership.",
        ],
      },
      {
        heading: "Personal Interests & Lifestyle",
        paragraphs: [
          "Saera embodies a vibrant, multi-faceted personality, thriving in outdoor activities such as golf, horse riding, swimming, archery, polo, and shooting, reflecting her love for challenge and precision.",
          "Her dedication to wellness is evident in her commitment to yoga and meditation, achieving balance between physical vitality and mental clarity. An enthusiastic reader and skilled violinist, she blends intellectual curiosity with artistic expression.",
        ],
      },
      {
        heading: "Professional Philosophy",
        paragraphs: [
          "Saera believes that true leadership is rooted in purpose, self-mastery, and service to others, and that lasting success comes from aligning ambition with integrity, wellness, and meaning.",
          "Her philosophy is simple: “I believe in living a life of purpose, connecting with the universe, and empowering others to rise, align, and shine.”",
        ],
      },
    ],
  },
];

/* ─── Section copy (headings, eyebrows, subtitles, labels) ────────────────── */
export const copy = {
  hero: {
    titleWords: ["Takmeel", "Square"],
    blurb:
      "The largest commercial hub of South Punjab, 1.2 million sq ft of retail, business and leisure at the heart of DHA Bahawalpur.",
    cta: "Explore projects",
  },
  about: {
    eyebrow: "About Takmeel Square",
    heading: "South Punjab's premier commercial hub.",
    paragraphs: [
      "Takmeel Square, encompassing 1.2 million square feet, is the largest commercial hub of Southern Punjab, an inclusive integrated retail and open market model, empowering investors and business owners to become the architects of their future success.",
      "Set within DHA Bahawalpur's sustainable, master planned community, Takmeel Square brings together Takmeel Bazaar, Takmeel Homes and the 4 acre Glow Park, fostering business, elevating lifestyles and shaping South Punjab's economic future.",
    ],
    bannerEyebrow: "Takmeel Square · DHA Bahawalpur",
    bannerHeading: "Largest commercial hub of Southern Punjab.",
    discover: "Discover Takmeel Square",
  },
  vision: {
    eyebrow: "Our vision",
    statement: "Redefining Pakistan's commercial real estate through innovation and detail.",
    captionEyebrow: "Takmeel Square · DHA Bahawalpur",
    captionHeading: "Gateway to your ultimate dreams.",
    pillars: [
      { title: "What we believe in", body: "Redefining commercial real estate in Pakistan with innovation, client trust and timely delivery." },
      { title: "Economic growth", body: "Addressing the gap in commercial spaces, creating job opportunities and a vibrant business community." },
      { title: "Sustainability", body: "Eco friendly practices that minimise environmental impact, for long term success." },
    ],
  },
  featuredProjects: {
    eyebrow: "Featured projects",
    heading: "Three destinations, one address",
    subtitle:
      "1.2 million sq ft of commerce, retail and homes, with 260 shops and a 4 acre Glow Park, all at one address in DHA Bahawalpur.",
  },
  leadership: {
    eyebrow: "Our leadership",
    heading: "The people behind the vision.",
    learnMore: "Learn more",
  },
  testimonials: { heading: "Hear it from our clients." },
  clients: { eyebrow: "Our clients", heading: "Trusted across every category." },
  faq: {
    eyebrow: "FAQs",
    heading: "Questions buyers and investors ask.",
    help: "Can't find what you're looking for? Call UAN +92 311 1555559 or email info@takmeel.pk.",
  },
  gallery: { eyebrow: "Lifestyle", heading: "The everyday, made a little better." },
  construction: {
    eyebrow: "Development updates",
    heading: "Watch Takmeel Square rise.",
    subtitle: "Video progress from site, updated regularly so investors and owners can follow construction from anywhere.",
  },
  location: {
    eyebrow: "Location & connectivity",
    heading: ["At the centre of", "the city's growth."],
    note: "At the heart of DHA Bahawalpur, facing the Main Boulevard, 3.6 KM from Bahawalpur Airport and 4.9 KM from Cantt.",
  },
  contact: {
    eyebrow: "Contact",
    heading: "Let's talk about what you're looking for.",
  },
};
