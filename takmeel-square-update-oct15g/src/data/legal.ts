// src/data/legal.ts
/**
 * Legal page content. Review with the client / legal advisor before publishing.
 * Update LAST_UPDATED whenever the wording changes.
 */
export const LAST_UPDATED = "11 October 2026";

export interface LegalDoc {
  slug: "privacy-policy" | "terms" | "disclaimer";
  title: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
}

const CONTACT =
  "Takmeel Square, DHA Bahawalpur, Punjab, Pakistan · UAN +92 311 1555559 · info@takmeel.pk";

export const legalDocs: Record<LegalDoc["slug"], LegalDoc> = {
  "privacy-policy": {
    slug: "privacy-policy",
    title: "Privacy Policy",
    intro:
      "This Privacy Policy explains how Takmeel Square (“we”, “us”, “our”) collects, uses and protects the personal information you share with us through this website.",
    sections: [
      {
        heading: "Information we collect",
        body: [
          "When you submit an enquiry, book a site visit, schedule a call, use the chat form or subscribe to our newsletter, we collect the details you provide, such as your name, phone or WhatsApp number, email address, area of interest, preferred date and time, and any message you choose to include.",
          "We do not knowingly collect information from children, and we do not ask for sensitive personal information through this website.",
        ],
      },
      {
        heading: "How we use your information",
        body: [
          "We use your information only to respond to your enquiry, arrange and confirm site visits or calls, share project information you have requested, and keep you informed about Takmeel Square if you have asked us to.",
          "**We do not sell, rent or trade your personal information to third parties.**",
        ],
      },
      {
        heading: "WhatsApp, email and third-party services",
        body: [
          "Some forms open WhatsApp or your email application with your details pre-filled so you can send them to us. Messages sent this way are handled by those services under their own privacy policies.",
          "This website may embed third-party content such as Google Maps and hosted video. These services may collect technical information (for example, your IP address) in line with their own policies.",
        ],
      },
      {
        heading: "Cookies",
        body: [
          "This website does not currently use advertising or analytics cookies. Your browser may store basic technical data needed for the site to work. If we introduce analytics or tracking in future, we will update this policy and ask for your consent where required.",
        ],
      },
      {
        heading: "Data retention and security",
        body: [
          "We keep your information only for as long as needed to handle your enquiry and any resulting sale or after-sales service, or as required by law. We take reasonable measures to protect it from unauthorised access, loss or misuse.",
        ],
      },
      {
        heading: "Your choices",
        body: [
          "You may ask us to access, correct or delete the personal information we hold about you, or to stop contacting you, at any time by writing to info@takmeel.pk.",
        ],
      },
      {
        heading: "Changes to this policy",
        body: [
          "We may update this Privacy Policy from time to time. The latest version will always be available on this page with the date it was last updated.",
        ],
      },
      { heading: "Contact us", body: [CONTACT] },
    ],
  },

  terms: {
    slug: "terms",
    title: "Terms & Conditions",
    intro:
      "By accessing or using this website, you agree to the following terms. If you do not agree, please do not use the website.",
    sections: [
      {
        heading: "Use of this website",
        body: [
          "This website is provided for general information about Takmeel Square and its developments in DHA Bahawalpur. You agree to use it lawfully and not to interfere with its operation or security.",
        ],
      },
      {
        heading: "Information, not an offer",
        body: [
          "Content on this website, including descriptions, specifications, sizes, layouts, amenities, images and virtual tours, is for information purposes only and does not constitute an offer, contract or binding commitment.",
          "Prices, payment plans, availability and specifications are subject to change without notice. All sales and bookings are governed solely by the formal documents issued and signed by Takmeel Square.",
        ],
      },
      {
        heading: "Enquiries and bookings",
        body: [
          "Submitting an enquiry or booking request through this website does not reserve or allocate any unit. A site visit or call is confirmed only when our team contacts you to confirm it.",
        ],
      },
      {
        heading: "Intellectual property",
        body: [
          "All content on this website, including the Takmeel Square name and logo, text, renders, photographs, plans and virtual tours, is owned by or licensed to Takmeel Square. All images, renders and photographs are copyrighted and may not be downloaded, copied, reproduced, distributed or used commercially without our prior written permission.",
        ],
      },
      {
        heading: "Third-party links",
        body: [
          "This website may link to third-party websites and services (such as Google Maps, WhatsApp and social media). We are not responsible for their content or practices.",
        ],
      },
      {
        heading: "Limitation of liability",
        body: [
          "While we make every effort to keep information accurate and up to date, we do not guarantee that the website is free of errors or interruptions. Takmeel Square is not liable for any loss arising from reliance on the content of this website.",
        ],
      },
      {
        heading: "Governing law",
        body: ["These terms are governed by the laws of Pakistan. Any disputes shall be subject to the jurisdiction of the courts of Pakistan."],
      },
      { heading: "Contact us", body: [CONTACT] },
    ],
  },

  disclaimer: {
    slug: "disclaimer",
    title: "Disclaimer",
    intro:
      "Please read this disclaimer carefully before relying on any information presented on this website.",
    sections: [
      {
        heading: "Artistic impressions",
        body: [
          "All images, 3D renders, virtual tours, videos, site plans and maps on this website are artistic impressions intended to illustrate the development. They are indicative only and may differ from the final built product.",
        ],
      },
      {
        heading: "Specifications and measurements",
        body: [
          "Areas, unit sizes, floor counts, distances, amenities and other specifications are approximate and subject to change during design and construction, or as required by the relevant authorities.",
        ],
      },
      {
        heading: "Furniture and finishes",
        body: [
          "Furniture, fixtures, décor, landscaping and finishes shown in interior and exterior images are for illustration and are not necessarily included in any unit.",
        ],
      },
      {
        heading: "Pricing and availability",
        body: [
          "Prices, payment plans and availability are not stated on this website and must be confirmed directly with the Takmeel Square sales team.",
        ],
      },
      {
        heading: "Independent advice",
        body: [
          "Buyers and investors are advised to visit the site, review all official documentation and seek independent legal and financial advice before making any decision.",
        ],
      },
      { heading: "Contact us", body: [CONTACT] },
    ],
  },
};
