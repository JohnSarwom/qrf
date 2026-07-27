import type { LucideIcon } from "lucide-react";
import { Clock, Mail, MapPin, Phone, Headset } from "lucide-react";
import { company } from "@/content/company";
import { telHref } from "@/lib/utils";

interface DetailEntry {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}

export function ContactDetails() {
  const entries: DetailEntry[] = [];

  if (company.mainTelephone) {
    entries.push({
      icon: Phone,
      label: "Telephone",
      value: company.mainTelephone,
      href: telHref(company.mainTelephone),
    });
  }

  if (company.salesTelephone && company.salesTelephone !== company.mainTelephone) {
    entries.push({
      icon: Phone,
      label: "Sales",
      value: company.salesTelephone,
      href: telHref(company.salesTelephone),
    });
  }

  if (company.supportTelephone && company.supportTelephone !== company.mainTelephone) {
    entries.push({
      icon: Headset,
      label: "Technical support",
      value: company.supportTelephone,
      href: telHref(company.supportTelephone),
    });
  }

  if (company.generalEmail) {
    entries.push({
      icon: Mail,
      label: "Email",
      value: company.generalEmail,
      href: `mailto:${company.generalEmail}`,
    });
  }

  if (company.supportEmail && company.supportEmail !== company.generalEmail) {
    entries.push({
      icon: Mail,
      label: "Support email",
      value: company.supportEmail,
      href: `mailto:${company.supportEmail}`,
    });
  }

  if (company.physicalAddress) {
    entries.push({
      icon: MapPin,
      label: "Office",
      value: company.physicalAddress,
    });
  }

  if (company.operatingHours) {
    entries.push({
      icon: Clock,
      label: "Operating hours",
      value: company.operatingHours,
    });
  }

  return (
    <div className="grid gap-5">
      <div className="qrf-card-surface qrf-card-padding">
        <h2 className="font-heading text-xl font-bold text-white">
          Contact details
        </h2>

        {entries.length > 0 ? (
          <ul className="mt-7 grid gap-6">
            {entries.map(({ href, icon: Icon, label, value }) => (
              <li className="flex gap-4" key={`${label}-${value}`}>
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-qrf-sm border border-qrf-bright/35 bg-qrf-blue/10 text-qrf-cyan">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-qrf-muted">
                    {label}
                  </p>
                  {href ? (
                    <a
                      className="mt-1 block break-words font-heading text-base font-bold text-white transition-colors hover:text-qrf-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-qrf-cyan"
                      href={href}
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="mt-1 break-words font-heading text-base font-bold text-white">
                      {value}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="qrf-pretty mt-5 text-sm leading-7 text-qrf-soft">
            Send your requirement using the enquiry form and the QRF team will
            respond using your preferred contact method.
          </p>
        )}

        <div className="mt-8 flex gap-4 border-t border-white/10 pt-7">
          <span className="flex h-11 w-11 flex-none items-center justify-center rounded-qrf-sm border border-qrf-bright/35 bg-qrf-blue/10 text-qrf-cyan">
            <MapPin aria-hidden="true" className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-qrf-muted">
              Operating area
            </p>
            <p className="mt-1 font-heading text-base font-bold text-white">
              Papua New Guinea
            </p>
            <p className="mt-2 text-sm leading-6 text-qrf-soft">
              Metropolitan, regional and remote operating environments.
            </p>
          </div>
        </div>
      </div>

      <div className="qrf-card-surface qrf-card-padding">
        <h2 className="font-heading text-xl font-bold text-white">
          What happens next
        </h2>
        <ol className="mt-6 grid gap-5">
          {[
            {
              title: "We review your enquiry",
              description:
                "Your requirement is directed to the right technical area rather than a general queue.",
            },
            {
              title: "We make contact",
              description:
                "We respond using the contact method you selected to confirm details and scope.",
            },
            {
              title: "We assess and propose",
              description:
                "Where the requirement warrants it, we arrange a site assessment before recommending a solution.",
            },
          ].map((step, index) => (
            <li className="flex gap-4" key={step.title}>
              <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full border border-qrf-bright/35 bg-qrf-blue/10 font-heading text-xs font-bold text-qrf-cyan">
                {index + 1}
              </span>
              <div>
                <p className="font-heading text-base font-bold text-white">
                  {step.title}
                </p>
                <p className="mt-1.5 text-sm leading-6 text-qrf-soft">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
