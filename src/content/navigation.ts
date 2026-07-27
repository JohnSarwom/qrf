import type { NavigationItem } from "./types";

export const primaryNavigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      {
        label: "ISP & Business Internet",
        href: "/solutions/isp-business-internet",
      },
      {
        label: "Starlink Connectivity",
        href: "/solutions/starlink-connectivity",
      },
      {
        label: "Motorola Radio Communications",
        href: "/solutions/radio-communications",
      },
      {
        label: "CCTV & Video Security",
        href: "/solutions/cctv-video-security",
      },
      {
        label: "Network Infrastructure",
        href: "/solutions/network-infrastructure",
      },
      {
        label: "Integrated Security",
        href: "/solutions/integrated-security",
      },
      {
        label: "Technical Support",
        href: "/solutions/technical-support",
      },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Support", href: "/support" },
  { label: "Contact", href: "/contact" },
];

export const footerNavigation = {
  solutions: primaryNavigation[1].children ?? [],
  company: [
    { label: "About QRF", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Industries", href: "/industries" },
    { label: "Support", href: "/support" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Website Disclaimer", href: "/disclaimer" },
  ],
} satisfies Record<string, NavigationItem[]>;
