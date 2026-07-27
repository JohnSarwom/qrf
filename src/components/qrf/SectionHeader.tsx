import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  align?: "left" | "center";
  description?: string;
  eyebrow?: string;
  title: string;
  className?: string;
}

export function SectionHeader({
  align = "left",
  className,
  description,
  eyebrow,
  title,
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className={cn("qrf-kicker", align === "center" && "justify-center")}>
          {eyebrow}
        </p>
      )}
      <h2 className="qrf-heading qrf-balance mt-4 text-white">{title}</h2>
      {description && (
        <p
          className={cn(
            "qrf-pretty mt-5 max-w-2xl text-base leading-7 text-qrf-soft md:text-lg",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </header>
  );
}
