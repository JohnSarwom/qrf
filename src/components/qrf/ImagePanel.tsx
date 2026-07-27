import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ImagePanelProps {
  alt: string;
  children?: ReactNode;
  className?: string;
  image: string;
  priority?: boolean;
}

export function ImagePanel({
  alt,
  children,
  className,
  image,
  priority = false,
}: ImagePanelProps) {
  return (
    <figure
      className={cn(
        "qrf-card-surface relative min-h-96 overflow-hidden",
        className,
      )}
    >
      <img
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        decoding="async"
        height="941"
        loading={priority ? "eager" : "lazy"}
        src={image}
        width="1672"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-qrf-ink via-qrf-ink/10 to-transparent" />
      {children && (
        <figcaption className="absolute inset-x-0 bottom-0 p-5 md:p-7">
          {children}
        </figcaption>
      )}
    </figure>
  );
}
