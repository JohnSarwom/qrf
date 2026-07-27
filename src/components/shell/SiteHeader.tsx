import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { primaryNavigation } from "@/content/navigation";
import { cn } from "@/lib/utils";
import { QrfButton } from "@/components/qrf";
import { BrandLink } from "./BrandLink";
import { MobileNavigation } from "./MobileNavigation";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setSolutionsOpen(false);
  }, [location.pathname]);

  useEffect(
    () => () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    },
    [],
  );

  useEffect(() => {
    if (!solutionsOpen) return;

    const closeOnOutsidePointer = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setSolutionsOpen(false);
      }
    };

    document.addEventListener("pointerdown", closeOnOutsidePointer);
    return () =>
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
  }, [solutionsOpen]);

  const openSolutions = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setSolutionsOpen(true);
  };

  const scheduleSolutionsClose = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => {
      if (!menuRef.current?.contains(document.activeElement)) {
        setSolutionsOpen(false);
      }
    }, 180);
  };

  const closeOnBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (!menuRef.current?.contains(event.relatedTarget as Node)) {
      setSolutionsOpen(false);
    }
  };

  return (
    <header
      className={cn(
        "sticky inset-x-0 top-0 z-40 border-b border-white/10 bg-qrf-ink/95 transition-[background-color,box-shadow] duration-300 backdrop-blur-xl",
        scrolled && "shadow-xl shadow-black/20",
      )}
    >
      <div
        className="transition-colors"
      >
        <div className="qrf-container flex h-20 items-center justify-between gap-6">
          <BrandLink />
          <nav aria-label="Primary navigation" className="hidden lg:block">
            <ul className="flex items-center gap-1 xl:gap-2">
              {primaryNavigation.map((item) => {
                const active =
                  location.pathname === item.href ||
                  (item.href !== "/" &&
                    location.pathname.startsWith(`${item.href}/`));

                if (item.children) {
                  return (
                    <li key={item.href}>
                      <div
                        className="relative"
                        onBlur={closeOnBlur}
                        onMouseEnter={openSolutions}
                        onMouseLeave={scheduleSolutionsClose}
                        ref={menuRef}
                      >
                        <div className="flex items-center">
                          <Link
                            className={cn(
                              "flex min-h-11 items-center rounded-l-qrf-sm px-3 text-sm font-bold transition-colors hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-qrf-cyan",
                              active ? "text-qrf-cyan" : "text-qrf-soft",
                            )}
                            to={item.href}
                          >
                            {item.label}
                          </Link>
                          <button
                            aria-expanded={solutionsOpen}
                            aria-label="Open solutions menu"
                            className={cn(
                              "flex h-11 w-9 items-center justify-center rounded-r-qrf-sm text-qrf-muted transition-colors hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-qrf-cyan",
                              active && "text-qrf-cyan",
                            )}
                            onClick={openSolutions}
                            onKeyDown={(event) => {
                              if (event.key === "Escape") {
                                setSolutionsOpen(false);
                              }
                            }}
                            type="button"
                          >
                            <ChevronDown
                              aria-hidden="true"
                              className={cn(
                                "h-4 w-4 transition-transform",
                                solutionsOpen && "rotate-180",
                              )}
                            />
                          </button>
                        </div>
                        {solutionsOpen && (
                          <div className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-3">
                            <div className="rounded-qrf-md border border-white/10 bg-qrf-card p-3 shadow-2xl shadow-black/40">
                              <div className="grid grid-cols-2 gap-1">
                                {item.children.map((child) => (
                                  <Link
                                    className={cn(
                                      "rounded-qrf-sm px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-qrf-cyan",
                                      location.pathname === child.href &&
                                        "bg-qrf-blue/10",
                                    )}
                                    key={child.href}
                                    to={child.href}
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </li>
                  );
                }

                return (
                  <li key={item.href}>
                    <Link
                      className={cn(
                        "relative flex min-h-11 items-center rounded-qrf-sm px-3 text-sm font-bold transition-colors hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-qrf-cyan",
                        active ? "text-qrf-cyan" : "text-qrf-soft",
                      )}
                      to={item.href}
                    >
                      {item.label}
                      {active && (
                        <span className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-qrf-bright" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <QrfButton
              className="hidden min-h-11 px-4 xl:inline-flex"
              href="/contact"
            >
              Request a Consultation
            </QrfButton>
            <MobileNavigation />
          </div>
        </div>
      </div>
    </header>
  );
}
