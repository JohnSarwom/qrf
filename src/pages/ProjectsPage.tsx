import {
  CheckCircle2,
  ClipboardList,
  FileCheck2,
  Handshake,
  Lock,
  PackageCheck,
  ScanSearch,
  Users,
} from "lucide-react";
import { Breadcrumbs } from "@/components/shell";
import { ContactCta, QrfButton, SectionHeader } from "@/components/qrf";
import { PageMeta } from "@/components/PageMeta";
import { projectPublicationNotice, projects } from "@/content/projects";

const deliveryEvidence = [
  {
    icon: ScanSearch,
    title: "Assessment record",
    description: "Site conditions, constraints and recommendations documented before procurement.",
  },
  {
    icon: ClipboardList,
    title: "Defined scope and design",
    description: "A written solution showing what is included and how the systems fit together.",
  },
  {
    icon: PackageCheck,
    title: "Commissioning results",
    description: "Recorded evidence that the installed environment performs as designed.",
  },
  {
    icon: FileCheck2,
    title: "As-built documentation",
    description: "Configuration, labelling, cable schedules and network information at handover.",
  },
  {
    icon: Users,
    title: "Operator training",
    description: "Practical training and records so capability remains with the client team.",
  },
  {
    icon: Handshake,
    title: "Support arrangement",
    description: "An agreed maintenance and response structure covering the delivered systems.",
  },
] as const;

export default function ProjectsPage() {
  return (
    <main className="qrf-page">
      <PageMeta
        description="How QRF delivers communications, connectivity and security projects in Papua New Guinea — assessment, design, deployment, commissioning, documentation and support."
        title="Projects & Delivery Capability | QRF PNG"
      />

      <section className="qrf-section-grid overflow-hidden border-b border-white/10 py-14 md:py-20">
        <div className="qrf-container">
          <Breadcrumbs items={[{ label: "Projects" }]} />
          <div className="mt-10 grid items-center lg:grid-cols-[1.22fr_0.88fr]">
            <div className="relative overflow-hidden rounded-qrf-lg border border-white/10">
              <img
                alt="Technicians commissioning communications infrastructure at a regional site"
                className="aspect-[16/11] h-full w-full object-cover"
                src="/assets/qrf/pages/projects-commissioning.webp"
                {...{ fetchpriority: "high" }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-qrf-ink/65" />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-qrf-ink/70 to-transparent" />
            </div>
            <div className="relative mx-4 -mt-10 rounded-qrf-md border border-white/10 bg-qrf-ink/95 p-7 shadow-2xl backdrop-blur md:mx-8 md:p-10 lg:mx-0 lg:mt-0">
              <p className="qrf-kicker">Technical delivery</p>
              <h1 className="qrf-display qrf-balance mt-5 text-white">
                Built for complex operating environments
              </h1>
              <p className="qrf-pretty mt-6 max-w-2xl text-base leading-8 text-qrf-soft md:text-lg">
                QRF delivers communications, connectivity, security and network
                infrastructure from assessment through commissioning, documentation
                and ongoing support.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <QrfButton href="/contact">Request Relevant Experience</QrfButton>
                <QrfButton href="/solutions" variant="secondary">
                  Explore Solutions
                </QrfButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {projects.length > 0 && (
        <section className="qrf-section-lg">
          <div className="qrf-container">
            <SectionHeader eyebrow="Selected delivery" title="Approved project experience" />
            <div className="qrf-section-gap grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <article className="qrf-card-surface qrf-card-padding" key={project.id}>
                  {project.sector && <p className="qrf-kicker">{project.sector}</p>}
                  <h2 className="mt-4 font-heading text-xl font-bold text-white">
                    {project.title}
                  </h2>
                  {project.scope && (
                    <p className="mt-4 text-sm leading-7 text-qrf-soft">{project.scope}</p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="qrf-section-lg">
        <div className="qrf-container grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <SectionHeader
              eyebrow="Delivery evidence"
              title="A project is measured by what is handed over"
            />
            <p className="mt-6 text-base leading-8 text-qrf-soft">
              Product names alone do not demonstrate delivery capability. The record
              produced through assessment, testing, commissioning and handover does.
            </p>
          </div>
          <ol className="qrf-rule-list">
            {deliveryEvidence.map((item, index) => {
              const Icon = item.icon;
              return (
                <li className="grid gap-4 py-6 first:pt-0 md:grid-cols-[4rem_1fr]" key={item.title}>
                  <div className="flex items-center gap-3 md:block">
                    <span className="text-xs font-bold text-qrf-cyan">0{index + 1}</span>
                    <Icon aria-hidden="true" className="mt-3 h-5 w-5 text-qrf-cyan" />
                  </div>
                  <div>
                    <h2 className="font-heading text-xl font-bold text-white">{item.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-qrf-soft">{item.description}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="qrf-section-lg border-y border-white/10 bg-qrf-navy/45">
        <div className="qrf-container grid items-center gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
          <div>
            <SectionHeader
              eyebrow="Relevant experience"
              title="Ask about the requirement in front of you"
            />
            <p className="mt-6 max-w-2xl text-base leading-8 text-qrf-soft">
              Tell us the environment, systems and operating constraints involved.
              We can discuss comparable delivery experience without exposing another
              organisation’s confidential information.
            </p>
            <ul className="mt-7 grid gap-3 text-sm text-qrf-soft sm:grid-cols-2">
              {[
                "Comparable operating conditions",
                "Relevant technology scope",
                "Likely delivery constraints",
                "Documentation and support approach",
              ].map((item) => (
                <li className="flex items-start gap-3" key={item}>
                  <CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 text-qrf-cyan" />
                  {item}
                </li>
              ))}
            </ul>
            <QrfButton className="mt-8" href="/contact">
              Start That Conversation
            </QrfButton>
          </div>
          <aside className="rounded-qrf-md border border-white/10 bg-qrf-card p-7">
            <Lock aria-hidden="true" className="h-7 w-7 text-qrf-cyan" />
            <h2 className="mt-6 font-heading text-xl font-bold text-white">
              Client confidentiality
            </h2>
            <p className="mt-4 text-sm leading-7 text-qrf-soft">
              {projectPublicationNotice} The same discretion applies to tender
              information and direct project discussions.
            </p>
          </aside>
        </div>
      </section>

      <section className="qrf-section-sm">
        <div className="qrf-container">
          <ContactCta
            description="Share the requirement and operating conditions. We will discuss the relevant delivery approach and experience."
            title="Evaluate QRF against your actual project"
          />
        </div>
      </section>
    </main>
  );
}
