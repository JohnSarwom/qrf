import {
  ArrowRight,
  Cctv,
  Globe2,
  Headset,
  LifeBuoy,
  Network,
  PanelsTopLeft,
  RadioTower,
  ScanSearch,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "@/components/shell";
import {
  ContactCta,
  ProcessStepCard,
  QrfButton,
  SectionHeader,
} from "@/components/qrf";
import { PageMeta } from "@/components/PageMeta";
import { deliveryProcess, solutions } from "@/content";

const processIcons = [ScanSearch, PanelsTopLeft, Truck, LifeBuoy] as const;

const groups = [
  {
    title: "Connectivity",
    icon: Globe2,
    description:
      "Reliable links and the network foundation that carries your business systems.",
    ids: ["isp-business-internet", "starlink-connectivity", "network-infrastructure"],
  },
  {
    title: "Communications",
    icon: RadioTower,
    description:
      "Field, vehicle and control-room communications for coordinated teams.",
    ids: ["radio-communications"],
  },
  {
    title: "Security",
    icon: ShieldCheck,
    description:
      "Video, access and monitoring technologies brought into one operating picture.",
    ids: ["cctv-video-security", "integrated-security"],
  },
] as const;

export default function SolutionsPage() {
  return (
    <main className="qrf-page">
      <PageMeta
        description="Explore QRF solutions: business internet, Starlink satellite connectivity, Motorola radio communications, CCTV, integrated security and enterprise network infrastructure across Papua New Guinea."
        title="Solutions | QRF Communications and Security PNG"
      />

      <section className="relative isolate min-h-[660px] overflow-hidden border-b border-white/10">
        <img
          alt="Integrated communications and security operations in Port Moresby"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          src="/assets/qrf/pages/solutions-operations.webp"
          {...{ fetchpriority: "high" }}
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(2,10,23,.98)_0%,rgba(2,10,23,.91)_38%,rgba(2,10,23,.42)_66%,rgba(2,10,23,.28)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-t from-qrf-ink to-transparent" />
        <div className="qrf-container flex min-h-[660px] flex-col py-14 md:py-20">
          <Breadcrumbs items={[{ label: "Solutions" }]} />
          <div className="my-auto max-w-2xl py-14">
            <p className="qrf-kicker">Connected systems</p>
            <h1 className="qrf-display qrf-balance mt-5 text-white">
              One technical environment, designed to work together
            </h1>
            <p className="qrf-pretty mt-6 text-base leading-8 text-qrf-soft md:text-lg">
              Connectivity carries the network. The network carries communications
              and security. QRF designs, deploys and supports those layers as one
              operating environment.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <QrfButton href="/contact">Request a Consultation</QrfButton>
              <QrfButton href="/projects" variant="secondary">
                See Our Delivery Approach
              </QrfButton>
            </div>
          </div>
          <div className="grid max-w-xl grid-cols-3 gap-2">
            {["Connect", "Coordinate", "Protect"].map((label) => (
              <span
                className="border-t border-qrf-cyan/60 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white"
                key={label}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="qrf-section-lg">
        <div className="qrf-container">
          <SectionHeader
            description="Start with the operational outcome you need. We will work back through the technology layers required to support it."
            eyebrow="Solution architecture"
            title="Three disciplines, one accountable team"
          />
          <div className="qrf-section-gap grid gap-6 lg:grid-cols-3">
            {groups.map((group, index) => {
              const Icon = group.icon;
              const groupSolutions = solutions.filter((solution) =>
                group.ids.includes(solution.id as never),
              );
              return (
                <section
                  className="overflow-hidden rounded-qrf-md border border-white/10 bg-qrf-card"
                  key={group.title}
                >
                  <div className="border-b border-white/10 p-7">
                    <div className="flex items-center justify-between">
                      <Icon aria-hidden="true" className="h-7 w-7 text-qrf-cyan" />
                      <span className="font-heading text-sm font-bold text-qrf-muted">
                        0{index + 1}
                      </span>
                    </div>
                    <h2 className="mt-7 font-heading text-2xl font-bold text-white">
                      {group.title}
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-qrf-soft">
                      {group.description}
                    </p>
                  </div>
                  <ul className="qrf-rule-list">
                    {groupSolutions.map((solution) => (
                      <li key={solution.id}>
                        <Link
                          className="group flex min-h-16 items-center justify-between gap-4 px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-qrf-cyan"
                          to={solution.href}
                        >
                          {solution.title}
                          <ArrowRight
                            aria-hidden="true"
                            className="h-4 w-4 flex-none text-qrf-cyan transition-transform group-hover:translate-x-1"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>

          <Link
            className="mt-6 flex items-center justify-between gap-5 rounded-qrf-md border border-qrf-blue/35 bg-qrf-blue/10 px-6 py-5 text-white transition-colors hover:border-qrf-bright hover:bg-qrf-blue/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-qrf-cyan"
            to="/support"
          >
            <span className="flex items-center gap-4">
              <Headset aria-hidden="true" className="h-6 w-6 text-qrf-cyan" />
              <span>
                <strong className="block font-heading text-lg">Monitoring &amp; Technical Support</strong>
                <span className="mt-1 block text-sm text-qrf-soft">
                  Maintenance, troubleshooting, training and lifecycle support.
                </span>
              </span>
            </span>
            <ArrowRight aria-hidden="true" className="h-5 w-5 flex-none text-qrf-cyan" />
          </Link>
        </div>
      </section>

      <section className="qrf-section-lg border-y border-white/10 bg-qrf-navy/45">
        <div className="qrf-container">
          <SectionHeader
            align="center"
            description="The same accountable process applies whether the project is a single office or a multi-site deployment."
            eyebrow="Complete lifecycle"
            title="From assessment to ongoing support"
          />
          <div className="qrf-section-gap grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {deliveryProcess.map((step, index) => (
              <ProcessStepCard
                description={step.description}
                icon={processIcons[index] ?? LifeBuoy}
                key={step.number}
                number={step.number}
                title={step.title}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="qrf-section-sm">
        <div className="qrf-container">
          <ContactCta
            description="Tell us what your operation needs to achieve. We will identify the combination of systems required to support it."
            title="Start with the requirement, not the catalogue"
          />
        </div>
      </section>
    </main>
  );
}
