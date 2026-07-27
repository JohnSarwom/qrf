import type { Cta } from "./types";

export const homepage = {
  hero: {
    eyebrow: "TELECOMMUNICATIONS • CONNECTIVITY • SECURITY",
    title: "Mission-Critical Communications. Connected PNG.",
    highlightedWords: ["Connected PNG"],
    description:
      "QRF delivers secure, resilient and high-performance communications, internet, Starlink, radio, CCTV and network infrastructure solutions for businesses, government agencies and operational sites across Papua New Guinea.",
    primaryCta: {
      label: "Explore Our Solutions",
      href: "/solutions",
    } satisfies Cta,
    secondaryCta: {
      label: "Talk to Our Team",
      href: "/contact",
    } satisfies Cta,
    images: {
      desktop: "/assets/qrf/hero/hero-desktop.webp",
      tablet: "/assets/qrf/hero/hero-tablet.webp",
      mobile: "/assets/qrf/hero/hero-mobile.webp",
      alt: "Telecommunications tower and satellite dish in a blue-hour tropical operating environment",
    },
  },
  capabilityIntro:
    "Integrated technologies designed to connect, protect and support organisations operating across Papua New Guinea.",
  whyQrf: {
    title: "Why Organisations Choose QRF",
    items: [
      {
        title: "Practical Experience",
        description:
          "Practical experience supporting communications, security and enterprise technology environments.",
      },
      {
        title: "Secure and Reliable",
        description:
          "Solutions designed for dependable operation, resilience and long-term performance.",
      },
      {
        title: "Experienced Technical Team",
        description:
          "Assessment, design, installation, integration and ongoing support.",
      },
      {
        title: "PNG Operating Context",
        description:
          "Solutions for metropolitan, regional and remote operating environments throughout Papua New Guinea.",
      },
    ],
  },
  operations: {
    title: "Operations You Can Trust",
    description:
      "QRF designs, deploys and supports technology that keeps teams connected, systems protected and operations running. From site assessment to installation, commissioning and ongoing maintenance, our team supports the complete solution lifecycle.",
    cta: {
      label: "Request a Consultation",
      href: "/contact",
    } satisfies Cta,
  },
  connectivity: {
    label: "INTERNET & SATELLITE CONNECTIVITY",
    title: "Reliable Connectivity from City Offices to Remote Sites",
    description:
      "QRF provides business internet, Starlink satellite connectivity, wireless networking and managed infrastructure for organisations requiring dependable access across metropolitan, regional and remote environments.",
    primaryCta: {
      label: "Explore Connectivity Solutions",
      href: "/solutions/isp-business-internet",
    } satisfies Cta,
    secondaryCta: {
      label: "Request a Site Assessment",
      href: "/contact",
    } satisfies Cta,
  },
  pngContext: {
    title: "Built for Papua New Guinea",
    description:
      "QRF provides solutions designed for Papua New Guinea’s metropolitan, regional and remote operating environments. Our approach considers connectivity limitations, terrain, power availability, environmental exposure and the need for responsive local support.",
  },
  finalCta: {
    title: "Let’s Build a Stronger, More Connected Operation",
    description:
      "Speak with QRF about your internet, communications, security or network infrastructure requirements.",
    primary: {
      label: "Request a Consultation",
      href: "/contact",
    } satisfies Cta,
    secondary: {
      label: "Contact QRF",
      href: "/contact",
    } satisfies Cta,
  },
} as const;

