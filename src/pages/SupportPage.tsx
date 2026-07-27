import {
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  GraduationCap,
  Headset,
  Mail,
  MonitorCheck,
  Phone,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { Breadcrumbs } from "@/components/shell";
import { ContactCta, ProcessStepCard, QrfButton, SectionHeader } from "@/components/qrf";
import { PageMeta } from "@/components/PageMeta";
import { company } from "@/content/company";
import { telHref } from "@/lib/utils";

const supportAreas = [
  {
    icon: ClipboardCheck,
    title: "Preventive maintenance",
    description: "Inspection, cleaning, testing and firmware management before degradation becomes an outage.",
  },
  {
    icon: MonitorCheck,
    title: "Remote diagnosis",
    description: "Fault investigation without waiting for a site visit where the system supports remote access.",
  },
  {
    icon: Wrench,
    title: "On-site troubleshooting",
    description: "Technical attendance when the fault genuinely requires hands on the equipment.",
  },
  {
    icon: ShieldCheck,
    title: "Warranty coordination",
    description: "Manufacturer claims and vendor escalation handled through one technical point of contact.",
  },
  {
    icon: GraduationCap,
    title: "Training",
    description: "Practical user and operator training for confident day-to-day system use.",
  },
  {
    icon: BookOpen,
    title: "Documentation",
    description: "Current configuration, labelling and as-built information that keeps systems supportable.",
  },
] as const;

const responseSteps = [
  {
    number: "01",
    title: "Log",
    description: "Report the site, affected system, observed fault and operational impact.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Triage",
    description: "QRF establishes urgency, scope and the safest first diagnostic action.",
    icon: Headset,
  },
  {
    number: "03",
    title: "Diagnose",
    description: "The team investigates remotely where possible and attends site where required.",
    icon: MonitorCheck,
  },
  {
    number: "04",
    title: "Resolve and record",
    description: "The fault, cause and corrective action are documented after service is restored.",
    icon: Wrench,
  },
] as const;

export default function SupportPage() {
  return (
    <main className="qrf-page">
      <PageMeta
        description="Maintenance, troubleshooting, monitoring, training and documentation for communications, connectivity and security systems across Papua New Guinea."
        title="Support | QRF Communications and Security PNG"
      />

      <section className="qrf-section-grid relative isolate min-h-[560px] overflow-hidden border-b border-white/10 py-12 md:py-16">
        <img
          alt="QRF engineer diagnosing communications infrastructure"
          className="absolute inset-y-0 right-0 -z-20 h-full w-full object-cover object-center md:w-[68%]"
          src="/assets/qrf/pages/support-diagnostics.webp"
          {...{ fetchpriority: "high" }}
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(2,10,23,1)_0%,rgba(2,10,23,.98)_32%,rgba(2,10,23,.78)_58%,rgba(2,10,23,.28)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-qrf-ink to-transparent" />
        <div className="qrf-container flex min-h-[440px] flex-col">
          <Breadcrumbs items={[{ label: "Support" }]} />
          <div className="my-auto mt-9 grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div>
              <p className="qrf-kicker">Technical support</p>
              <h1 className="qrf-display qrf-balance mt-5 max-w-3xl text-white">
                Keep critical systems working
              </h1>
              <p className="qrf-pretty mt-5 max-w-2xl text-base leading-8 text-qrf-soft md:text-lg">
                Maintenance, diagnosis and technical assistance for communications,
                connectivity, security and network infrastructure.
              </p>
            </div>
            <div className="grid max-w-sm gap-3 sm:grid-cols-2 lg:ml-auto lg:grid-cols-1">
              <QrfButton href="/contact">Request Support</QrfButton>
              {company.mainTelephone && (
                <a
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-qrf-sm border border-white/20 px-5 py-3 text-sm font-bold text-white transition-colors hover:border-qrf-bright hover:bg-white/[0.04]"
                  href={telHref(company.mainTelephone)}
                >
                  <Phone aria-hidden="true" className="h-4 w-4 text-qrf-cyan" />
                  Call {company.mainTelephone}
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="qrf-section-lg">
        <div className="qrf-container grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <SectionHeader eyebrow="Before contacting support" title="Help us begin with the right information" />
            <p className="mt-6 text-base leading-8 text-qrf-soft">
              A clear first report reduces diagnosis time, especially when the site
              is remote or access is restricted.
            </p>
          </div>
          <ul className="qrf-rule-list">
            {[
              "The affected site, building or operational area",
              "The system, device or service that is not working",
              "What changed immediately before the fault appeared",
              "The operational impact and whether a workaround exists",
            ].map((item, index) => (
              <li className="flex gap-5 py-5 first:pt-0" key={item}>
                <span className="font-heading text-sm font-bold text-qrf-cyan">0{index + 1}</span>
                <span className="text-base leading-7 text-qrf-soft">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="qrf-section-lg border-y border-white/10 bg-qrf-navy/45">
        <div className="qrf-container">
          <SectionHeader
            align="center"
            eyebrow="Fault handling"
            title="A clear path from report to resolution"
          />
          <div className="qrf-section-gap grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {responseSteps.map((step) => (
              <ProcessStepCard
                description={step.description}
                icon={step.icon}
                key={step.number}
                number={step.number}
                title={step.title}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="qrf-section-lg">
        <div className="qrf-container">
          <SectionHeader
            description="The exact scope is agreed around the systems covered, site access, maintenance schedule and response required."
            eyebrow="Support coverage"
            title="Services across the system lifecycle"
          />
          <div className="mt-9 grid gap-x-10 md:grid-cols-2">
            {supportAreas.map((area) => {
              const Icon = area.icon;
              return (
                <article className="flex gap-5 border-t border-white/10 py-6" key={area.title}>
                  <Icon aria-hidden="true" className="mt-1 h-6 w-6 flex-none text-qrf-cyan" />
                  <div>
                    <h2 className="font-heading text-lg font-bold text-white">{area.title}</h2>
                    <p className="mt-2 text-sm leading-7 text-qrf-soft">{area.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="qrf-section-lg border-y border-white/10 bg-qrf-navy/45">
        <div className="qrf-container grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeader eyebrow="Existing QRF systems" title="Support aligned to the delivered environment" />
            <p className="mt-6 text-base leading-8 text-qrf-soft">
              For systems designed or deployed by QRF, the team can work from the
              documented configuration, commissioning record and known site conditions.
            </p>
          </div>
          <div>
            <SectionHeader eyebrow="Third-party systems" title="Assessment before an arrangement begins" />
            <p className="mt-6 text-base leading-8 text-qrf-soft">
              QRF can assess systems installed by others. Their condition, documentation
              and supportability are established first so both sides understand the
              starting point.
            </p>
          </div>
        </div>
      </section>

      <section className="qrf-section-sm">
        <div className="qrf-container">
          <ContactCta
            description={
              company.generalEmail
                ? `Submit an enquiry online or email ${company.generalEmail} with the affected site and system.`
                : "Submit an enquiry with the affected site, system and operational impact."
            }
            title="Need technical assistance?"
          />
        </div>
      </section>
    </main>
  );
}
