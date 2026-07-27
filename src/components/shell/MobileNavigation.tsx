import { ChevronDown, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { primaryNavigation } from "@/content/navigation";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { QrfButton } from "@/components/qrf";
import { BrandLink } from "./BrandLink";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const location = useLocation();

  const close = () => setOpen(false);

  useEffect(() => {
    setOpen(false);
    setSolutionsOpen(false);
  }, [location.pathname]);

  return (
    <Sheet onOpenChange={setOpen} open={open}>
      <SheetTrigger asChild>
        <button
          aria-label="Open navigation menu"
          className="inline-flex h-12 w-12 items-center justify-center rounded-qrf-sm border border-white/15 bg-white/[0.06] text-white transition-colors hover:border-qrf-bright/60 hover:bg-white/[0.1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-qrf-cyan lg:hidden"
          type="button"
        >
          <Menu aria-hidden="true" className="h-5 w-5" />
        </button>
      </SheetTrigger>
      <SheetContent
        className="w-[min(90vw,390px)] border-l border-white/10 bg-qrf-ink p-7 text-white sm:p-8 [&>button]:h-11 [&>button]:w-11 [&>button]:rounded-qrf-sm [&>button]:border [&>button]:border-white/15 [&>button]:text-white"
        side="right"
      >
        <SheetTitle className="sr-only">QRF navigation</SheetTitle>
        <SheetDescription className="sr-only">
          Navigate QRF website pages and solutions.
        </SheetDescription>
        <BrandLink onClick={close} />
        <nav aria-label="Mobile navigation" className="mt-12">
          <ul className="grid gap-2.5">
            {primaryNavigation.map((item) => {
              const isSolutions = Boolean(item.children);
              const active =
                location.pathname === item.href ||
                location.pathname.startsWith(`${item.href}/`);

              if (isSolutions) {
                return (
                  <li key={item.href}>
                    <Collapsible
                      onOpenChange={setSolutionsOpen}
                      open={solutionsOpen}
                    >
                      <div className="flex items-center">
                        <Link
                          className={cn(
                            "flex min-h-12 flex-1 items-center rounded-l-qrf-sm px-3 text-base font-bold transition-colors hover:bg-white/[0.06]",
                            active ? "text-qrf-cyan" : "text-white",
                          )}
                          onClick={close}
                          to={item.href}
                        >
                          {item.label}
                        </Link>
                        <CollapsibleTrigger asChild>
                          <button
                            aria-label="Toggle solutions menu"
                            className="flex h-12 w-12 items-center justify-center rounded-r-qrf-sm text-qrf-soft transition-colors hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-qrf-cyan"
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
                        </CollapsibleTrigger>
                      </div>
                      <CollapsibleContent>
                        <ul className="ml-3 mt-1 grid gap-1 border-l border-white/10 pl-3">
                          {item.children?.map((child) => (
                            <li key={child.href}>
                              <Link
                                className={cn(
                                  "flex min-h-11 items-center rounded-qrf-sm px-3 py-2 text-sm font-semibold leading-5 text-qrf-soft transition-colors hover:bg-white/[0.06] hover:text-white",
                                  location.pathname === child.href &&
                                    "bg-qrf-blue/10 text-qrf-cyan",
                                )}
                                onClick={close}
                                to={child.href}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </CollapsibleContent>
                    </Collapsible>
                  </li>
                );
              }

              return (
                <li key={item.href}>
                  <Link
                    className={cn(
                      "flex min-h-12 items-center rounded-qrf-sm px-3 text-base font-bold transition-colors hover:bg-white/[0.06]",
                      active ? "bg-qrf-blue/10 text-qrf-cyan" : "text-white",
                    )}
                    onClick={close}
                    to={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <QrfButton className="mt-8 w-full" href="/contact">
          Request a Consultation
        </QrfButton>
        <p className="mt-6 border-t border-white/10 pt-5 text-xs leading-5 text-qrf-muted">
          CONNECT. COMMUNICATE. COLLABORATE.
        </p>
      </SheetContent>
    </Sheet>
  );
}
