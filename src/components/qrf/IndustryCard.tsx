import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface IndustryCardProps {
  description: string;
  href: string;
  icon: LucideIcon;
  title: string;
}

export function IndustryCard({
  description,
  href,
  icon: Icon,
  title,
}: IndustryCardProps) {
  return (
    <Link
      className="group qrf-card-surface qrf-card-padding flex min-h-60 flex-col transition-[transform,border-color,background-color] duration-200 hover:-translate-y-1 hover:border-qrf-bright/60 hover:bg-qrf-raised focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-qrf-cyan"
      to={href}
    >
      <div className="flex items-start justify-between gap-4">
        <Icon aria-hidden="true" className="h-8 w-8 text-qrf-cyan" />
        <ArrowRight
          aria-hidden="true"
          className="h-5 w-5 text-qrf-muted transition-transform group-hover:translate-x-1 group-hover:text-qrf-cyan"
        />
      </div>
      <div className="mt-auto pt-10">
        <h3 className="font-heading text-xl font-bold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-qrf-soft">{description}</p>
      </div>
    </Link>
  );
}
