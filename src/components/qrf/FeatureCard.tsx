import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  description: string;
  icon: LucideIcon;
  title: string;
  className?: string;
}

export function FeatureCard({
  className,
  description,
  icon: Icon,
  title,
}: FeatureCardProps) {
  return (
    <article
      className={cn(
        "qrf-card-surface qrf-card-padding transition-[transform,border-color] duration-200 hover:-translate-y-1 hover:border-qrf-bright/55",
        className,
      )}
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-qrf-sm bg-qrf-blue text-white shadow-qrf-glow">
        <Icon aria-hidden="true" className="h-6 w-6" />
      </span>
      <h3 className="mt-8 font-heading text-xl font-bold text-white">{title}</h3>
      <p className="qrf-pretty mt-4 text-sm leading-6 text-qrf-soft">
        {description}
      </p>
    </article>
  );
}
