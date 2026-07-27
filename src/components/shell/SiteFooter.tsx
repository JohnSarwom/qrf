import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { company } from "@/content/company";
import { footerNavigation } from "@/content/navigation";
import { telHref } from "@/lib/utils";
import { BrandLink } from "./BrandLink";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-qrf-ink text-qrf-soft">
      <div className="qrf-container py-10 md:py-12">
        <div className="grid gap-x-8 gap-y-9 md:grid-cols-2 min-[900px]:grid-cols-[1.35fr_0.72fr_1.08fr_1fr] min-[900px]:gap-x-7 lg:gap-x-10">
          <div>
            <BrandLink />
            <p className="mt-4 max-w-sm text-sm leading-6 text-qrf-muted">
              Secure, resilient communications, connectivity, security and
              network infrastructure solutions for organisations operating
              across Papua New Guinea.
            </p>
            <p className="mt-4 text-xs font-bold tracking-[0.12em] text-qrf-cyan">
              {company.tagline}
            </p>
          </div>
          <div>
            <h2 className="font-heading text-sm font-bold text-white">
              Company
            </h2>
            <ul className="mt-4 grid gap-2">
              {footerNavigation.company.map((item) => (
                <li key={item.href}>
                  <Link
                    className="text-sm transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-qrf-cyan"
                    to={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-heading text-sm font-bold text-white">
              Solutions
            </h2>
            <ul className="mt-4 grid gap-2">
              {footerNavigation.solutions.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <Link
                    className="text-sm transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-qrf-cyan"
                    to={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  className="font-bold text-qrf-cyan transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-qrf-cyan"
                  to="/solutions"
                >
                  View all solutions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-heading text-sm font-bold text-white">
              Contact
            </h2>
            <ul className="mt-4 grid gap-4 text-sm">
              <li className="flex gap-3">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 flex-none text-qrf-cyan"
                />
                <span>{company.physicalAddress ?? "Papua New Guinea"}</span>
              </li>
              {company.mainTelephone && (
                <li className="flex gap-3">
                  <Phone
                    aria-hidden="true"
                    className="mt-0.5 h-4 w-4 flex-none text-qrf-cyan"
                  />
                  <a
                    className="hover:text-white"
                    href={telHref(company.mainTelephone)}
                  >
                    {company.mainTelephone}
                  </a>
                </li>
              )}
              {company.generalEmail && (
                <li className="flex gap-3">
                  <Mail
                    aria-hidden="true"
                    className="mt-0.5 h-4 w-4 flex-none text-qrf-cyan"
                  />
                  <a
                    className="hover:text-white"
                    href={`mailto:${company.generalEmail}`}
                  >
                    {company.generalEmail}
                  </a>
                </li>
              )}
              <li>
                <Link
                  className="font-bold text-qrf-cyan hover:text-white"
                  to="/contact"
                >
                  Contact the QRF team
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-9 flex flex-col gap-4 border-t border-white/10 pt-5 text-xs text-qrf-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {company.registeredName ?? "QRF"}. All
            rights reserved.
          </p>
          <nav aria-label="Legal">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {footerNavigation.legal.map((item) => (
                <li key={item.href}>
                  <Link className="hover:text-white" to={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
