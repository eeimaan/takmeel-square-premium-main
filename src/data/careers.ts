// src/data/careers.ts
/**
 * Careers content. Applications open the visitor's email app addressed to CAREERS_EMAIL,
 * with the subject pre-formatted as:  Website applicant - {Role} - {Applicant name}
 *
 * >>> Change CAREERS_EMAIL to the HR inbox that should receive applications. <<<
 */
export const CAREERS_EMAIL = "info@takmeel.pk";

export interface Role {
  id: string;
  title: string;
  type: string;        // Full-time / Part-time
  location: string;
  positions: string;   // e.g. "2 positions"
  overview: string;
  responsibilities: string[];
  requirements: string[];
}

export const roles: Role[] = [
  {
    id: "site-supervisor",
    title: "Site Supervisor",
    type: "Full-time",
    location: "Takmeel Square, DHA Bahawalpur",
    positions: "2 positions",
    overview:
      "Oversee day-to-day construction activities on site, ensuring work is carried out to schedule, quality and safety standards.",
    responsibilities: [
      "Supervise contractors and labour on site",
      "Track daily progress against the construction schedule",
      "Enforce safety and quality standards",
      "Coordinate with engineers and report to the project manager",
    ],
    requirements: [
      "Diploma or degree in Civil Technology / Engineering",
      "3+ years of site supervision experience",
      "Strong knowledge of construction drawings and materials",
    ],
  },
  {
    id: "civil-engineer",
    title: "Civil Engineer",
    type: "Full-time",
    location: "Takmeel Square, DHA Bahawalpur",
    positions: "1 position",
    overview:
      "Plan, execute and monitor civil works for commercial and residential developments at Takmeel Square.",
    responsibilities: [
      "Prepare and review structural and execution drawings",
      "Estimate materials and quantities (BOQs)",
      "Ensure quality control and compliance with specifications",
      "Coordinate with consultants and site teams",
    ],
    requirements: [
      "BSc / BE in Civil Engineering",
      "2+ years in building construction",
      "Proficiency in AutoCAD and MS Office",
    ],
  },
  {
    id: "sales-executive",
    title: "Sales Executive",
    type: "Full-time",
    location: "DHA Bahawalpur / Lahore",
    positions: "4 positions",
    overview:
      "Drive sales of commercial units, shops and homes by guiding clients through the Takmeel Square portfolio.",
    responsibilities: [
      "Respond to enquiries and conduct site visits",
      "Present projects, pricing and payment plans",
      "Follow up with leads and close bookings",
      "Maintain accurate records of clients and deals",
    ],
    requirements: [
      "Bachelor's degree; real-estate experience preferred",
      "Excellent communication and negotiation skills",
      "Confident, presentable and target-driven",
    ],
  },
  {
    id: "marketing-officer",
    title: "Marketing Officer",
    type: "Full-time",
    location: "DHA Bahawalpur",
    positions: "1 position",
    overview:
      "Plan and run marketing campaigns across digital and on-ground channels to generate quality leads.",
    responsibilities: [
      "Manage social media and digital advertising",
      "Coordinate content, shoots and collateral",
      "Track campaign performance and leads",
      "Support events and activations",
    ],
    requirements: [
      "Degree in Marketing / Media / related field",
      "2+ years in marketing, ideally real estate",
      "Hands-on with Meta/Google Ads and analytics",
    ],
  },
  {
    id: "accounts-officer",
    title: "Accounts Officer",
    type: "Full-time",
    location: "Takmeel Square, DHA Bahawalpur",
    positions: "1 position",
    overview:
      "Maintain accurate financial records, process payments and support month-end reporting.",
    responsibilities: [
      "Record daily transactions and reconcile accounts",
      "Manage client receivables and vendor payments",
      "Assist with audits and financial reporting",
    ],
    requirements: [
      "B.Com / BBA (Finance) or equivalent",
      "2+ years in accounts",
      "Proficiency in accounting software and Excel",
    ],
  },
  {
    id: "customer-relations-officer",
    title: "Customer Relations Officer",
    type: "Full-time",
    location: "Takmeel Square, DHA Bahawalpur",
    positions: "2 positions",
    overview:
      "Be the first point of contact for clients, handling queries and after-sales support with care.",
    responsibilities: [
      "Attend to walk-in, phone and online enquiries",
      "Coordinate documentation and bookings",
      "Resolve client concerns and maintain relationships",
    ],
    requirements: [
      "Bachelor's degree",
      "Strong interpersonal and communication skills",
      "Customer-service mindset; fluent in Urdu and English",
    ],
  },
];
