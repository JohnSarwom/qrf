import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface QrfButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  showArrow?: boolean;
}

const styles: Record<ButtonVariant, string> = {
  primary:
    "border border-qrf-bright bg-qrf-blue text-white shadow-qrf-glow hover:-translate-y-0.5 hover:bg-qrf-bright hover:shadow-[0_0_44px_rgba(22,133,255,0.3)]",
  secondary:
    "border border-white/25 bg-transparent text-white hover:-translate-y-0.5 hover:border-qrf-bright hover:bg-qrf-bright/10",
  ghost:
    "border border-transparent bg-white/[0.04] text-qrf-soft hover:border-white/15 hover:bg-white/[0.08] hover:text-white",
};

export function QrfButton({
  children,
  className,
  href,
  showArrow = true,
  type = "button",
  variant = "primary",
  ...props
}: QrfButtonProps) {
  const classes = cn(
    "group inline-flex min-h-12 items-center justify-center gap-2 rounded-qrf-sm px-5 py-3 font-body text-sm font-bold transition-[transform,background-color,border-color,box-shadow,color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-qrf-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-qrf-ink",
    styles[variant],
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link className={classes} to={href}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} type={type} {...props}>
      {content}
    </button>
  );
}

