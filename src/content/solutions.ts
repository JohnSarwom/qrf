import type { ProcessStep, SolutionCard } from "./types";

export const solutions: SolutionCard[] = [
  {
    id: "isp-business-internet",
    title: "ISP & Business Internet",
    description:
      "Reliable business connectivity for offices, branches and operational sites.",
    image: "/assets/qrf/isp/business-internet.webp",
    icon: "globe-2",
    href: "/solutions/isp-business-internet",
    featured: true,
  },
  {
    id: "starlink-connectivity",
    title: "Starlink Connectivity",
    description:
      "Satellite connectivity solutions for regional, remote and difficult-to-reach locations.",
    image: "/assets/qrf/starlink/starlink-field-operation.webp",
    icon: "satellite",
    href: "/solutions/starlink-connectivity",
    featured: true,
  },
  {
    id: "radio-communications",
    title: "Motorola Radio Communications",
    description:
      "Professional two-way radio systems for dependable team communications.",
    image: "/assets/qrf/radio/motorola-radios.webp",
    icon: "radio-tower",
    href: "/solutions/radio-communications",
    featured: true,
  },
  {
    id: "cctv-video-security",
    title: "CCTV & Video Security",
    description:
      "Video surveillance and monitoring systems designed for operational awareness.",
    image: "/assets/qrf/cctv/camera-range.webp",
    icon: "cctv",
    href: "/solutions/cctv-video-security",
    featured: true,
  },
  {
    id: "network-infrastructure",
    title: "Enterprise Network Infrastructure",
    description:
      "Structured, scalable network infrastructure for dependable business operations.",
    image: "/assets/qrf/networks/network-city-pom-no-landmark.webp",
    icon: "network",
    href: "/solutions/network-infrastructure",
    featured: true,
  },
  {
    id: "integrated-security",
    title: "Integrated Security Systems",
    description:
      "Access control, intrusion detection and connected security technologies.",
    image: "/assets/qrf/cctv/integrated-security.webp",
    icon: "shield-check",
    href: "/solutions/integrated-security",
  },
  {
    id: "technical-support",
    title: "Monitoring & Technical Support",
    description:
      "Maintenance, troubleshooting and local technical support across the solution lifecycle.",
    image: "/assets/qrf/backgrounds/operations-centre.webp",
    icon: "headset",
    href: "/solutions/technical-support",
  },
];

export const deliveryProcess: ProcessStep[] = [
  {
    number: "01",
    title: "Assess",
    description:
      "We evaluate your environment, requirements and objectives.",
    icon: "scan-search",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We develop a tailored solution designed for performance and reliability.",
    icon: "panels-top-left",
  },
  {
    number: "03",
    title: "Deploy",
    description:
      "Our team installs, configures and tests the complete system.",
    icon: "truck",
  },
  {
    number: "04",
    title: "Support",
    description:
      "We provide maintenance, troubleshooting and technical support.",
    icon: "life-buoy",
  },
];

export const connectivityCapabilities = [
  "Business Internet",
  "Remote-Site Connectivity",
  "Backup and Redundancy",
  "Managed Networking",
] as const;

export const supportCapabilities = [
  "Preventive Maintenance",
  "Remote Support",
  "On-Site Troubleshooting",
  "System Upgrades",
  "Network Optimisation",
  "Warranty Coordination",
  "User Training",
  "Documentation",
] as const;
