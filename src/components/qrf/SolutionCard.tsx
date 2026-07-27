import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface SolutionCardProps {
  description: string;
  href: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  title: string;
  className?: string;
}

export function SolutionCard({
  className,
  description,
  href,
  icon: Icon,
  image,
  imageAlt,
  title,
}: SolutionCardProps) {
  return (
    <article
      className={cn(
        "qrf-card-surface group min-w-0 overflow-hidden transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-qrf-bright/60 hover:shadow-qrf-glow",
        className,
      )}
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-qrf-navy">
        <img
          alt={imageAlt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]"
          height="800"
          loading="lazy"
          src={image}
          width="1200"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-qrf-card via-transparent to-transparent" />
      </div>
      <div className="qrf-card-padding">
        <div className="flex items-start gap-5">
          <span className="flex h-12 w-12 flex-none items-center justify-center rounded-qrf-sm border border-qrf-bright/35 bg-qrf-blue/10 text-qrf-cyan">
            <Icon aria-hidden="true" className="h-6 w-6" />
          </span>
          <div className="min-w-0">
            <h3 className="font-heading text-xl font-bold leading-tight text-white">
              {title}
            </h3>
            <p className="qrf-pretty mt-4 text-sm leading-6 text-qrf-soft">
              {description}
            </p>
          </div>
        </div>
        <Link
          className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-qrf-cyan transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-qrf-cyan"
          to={href}
        >
          Learn more
          <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
