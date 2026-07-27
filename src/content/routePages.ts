export interface RoutePageDefinition {
  path: string;
  eyebrow: string;
  title: string;
  description: string;
  parent?: {
    label: string;
    href: string;
  };
}

/**
 * Placeholder routes only. Pages with real content are routed explicitly in
 * App.tsx: /solutions and its detail pages, /about, /contact, /industries,
 * /projects and /support.
 */
export const routePages: RoutePageDefinition[] = [
  {
    path: "/privacy",
    eyebrow: "Legal",
    title: "Privacy policy",
    description:
      "Approved privacy information will be published before production launch.",
  },
  {
    path: "/terms",
    eyebrow: "Legal",
    title: "Terms of use",
    description:
      "Approved website terms will be published before production launch.",
  },
  {
    path: "/disclaimer",
    eyebrow: "Legal",
    title: "Website disclaimer",
    description:
      "Approved disclaimer content will be published before production launch.",
  },
];
