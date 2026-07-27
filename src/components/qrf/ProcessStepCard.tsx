import type { LucideIcon } from "lucide-react";

interface ProcessStepCardProps {
  description: string;
  icon: LucideIcon;
  number: string;
  title: string;
}

export function ProcessStepCard({
  description,
  icon: Icon,
  number,
  title,
}: ProcessStepCardProps) {
  return (
    <article className="qrf-card-surface qrf-card-padding qrf-network-line relative min-w-0">
      <div className="flex items-center justify-between">
        <span className="font-heading text-sm font-bold tracking-[0.18em] text-qrf-cyan">
          {number}
        </span>
        <Icon aria-hidden="true" className="h-6 w-6 text-qrf-bright" />
      </div>
      <h3 className="mt-9 font-heading text-xl font-bold text-white">{title}</h3>
      <p className="mt-4 text-sm leading-6 text-qrf-soft">{description}</p>
    </article>
  );
}
