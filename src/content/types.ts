export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface Cta {
  label: string;
  href: string;
}

export interface SolutionCard {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  href: string;
  featured?: boolean;
}

export interface Industry {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  sector: string | null;
  location: string | null;
  scope: string | null;
  technologies: string[];
  outcome: string | null;
  image: string | null;
  approvedForPublication: boolean;
}

export interface Partner {
  id: string;
  name: string;
  relationshipWording: string | null;
  logo: string | null;
  approvedForPublication: boolean;
}

