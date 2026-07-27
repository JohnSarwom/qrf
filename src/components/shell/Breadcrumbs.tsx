import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-xs font-semibold text-qrf-muted">
        <li>
          <Link
            aria-label="Home"
            className="inline-flex items-center text-qrf-muted transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-qrf-cyan"
            to="/"
          >
            <Home aria-hidden="true" className="h-3.5 w-3.5" />
          </Link>
        </li>
        {items.map((item, index) => (
          <li className="flex items-center gap-2" key={`${item.label}-${index}`}>
            <ChevronRight aria-hidden="true" className="h-3.5 w-3.5" />
            {item.href ? (
              <Link
                className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-qrf-cyan"
                to={item.href}
              >
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-qrf-soft">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

