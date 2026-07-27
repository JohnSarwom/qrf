import {
  Cctv,
  Globe2,
  Headset,
  Network,
  PanelsTopLeft,
  RadioTower,
  ScanSearch,
  Truck,
} from "lucide-react";
import { Breadcrumbs } from "@/components/shell";
import {
  ContactCta,
  ProcessStepCard,
  QrfButton,
  SectionHeader,
} from "@/components/qrf";
import { PageMeta } from "@/components/PageMeta";
import { about } from "@/content/about";
import { company } from "@/content/company";

const disciplines = [
  {
    icon: Globe2,
    title: "Connectivity",
    description: "Internet and satellite links for metropolitan and remote sites.",
  },
  {
    icon: RadioTower,
    title: "Communications",
    description: "Professional radio systems for coordinated teams.",
  },
  {
    icon: Cctv,
    title: "Security",
    description: "Video, access and monitoring for operational awareness.",
  },
  {
    icon: Network,
    title: "Infrastructure",
    description: "The structured networks every connected system depends on.",
  },
] as const;

const approachIcons = [ScanSearch, PanelsTopLeft, Truck, Headset] as const;

export default function AboutPage() {
  return (
    <main className="qrf-page">
      <PageMeta
        description="QRF designs, deploys and supports communications, connectivity and security infrastructure for organisations operating across Papua New Guinea."
        title="About QRF | Communications and Security Solutions PNG"
      />

      <section className="qrf-section-grid border-b border-white/10 py-14 md:py-20">
        <div className="qrf-container">
          <Breadcrumbs items={[{ label: "About" }]} />
          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div className="qrf-editorial-image relative overflow-hidden">
              <img
                alt="QRF technical team planning communications infrastructure"
                className="aspect-[4/3] h-full w-full object-cover"
                src="/assets/qrf/pages/about-team.webp"
                {...{ fetchpriority: "high" }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-qrf-ink/55 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-qrf-ink/90 to-transparent" />
              <p className="absolute bottom-6 left-6 right-6 font-heading text-lg font-bold text-white">
                {company.tagline}
              </p>
            </div>
            <div>
              <p className="qrf-kicker">About QRF</p>
              <h1 className="qrf-display qrf-balance mt-5 text-white">
                {about.title}
              </h1>
              <p className="qrf-pretty mt-6 max-w-2xl text-base leading-8 text-qrf-soft md:text-lg">
                {about.heroDescription}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <QrfButton href="/contact">Talk to Our Team</QrfButton>
                <QrfButton href="/solutions" variant="secondary">
                  Explore Solutions
                </QrfButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Verified company facts" className="border-b border-white/10 bg-qrf-navy/65">
        <div className="qrf-container grid md:grid-cols-3 md:divide-x md:divide-white/10">
          {[
            ["Registered company", company.registeredName ?? company.tradingName],
            ["Operating context", "Papua New Guinea"],
            ["Partner status", "Motorola Solutions Partner"],
          ].map(([label, value]) => (
            <div className="border-b border-white/10 px-0 py-6 md:border-b-0 md:px-7" key={label}>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-qrf-muted">{label}</p>
              <p className="mt-2 font-heading text-lg font-bold text-white">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="qrf-section-lg">
        <div className="qrf-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeader eyebrow="Our purpose" title={about.missionTitle} />
          <div className="grid gap-6">
            {about.missionBody.map((paragraph) => (
              <p className="qrf-pretty text-base leading-8 text-qrf-soft" key={paragraph.slice(0, 40)}>
                {paragraph}
              </p>
            ))}
            <div className="mt-3 grid gap-7 border-t border-white/10 pt-7 md:grid-cols-2">
              <div>
                <p className="qrf-kicker">Mission</p>
                <p className="mt-4 text-sm leading-7 text-qrf-soft">{about.mission}</p>
              </div>
              <div>
                <p className="qrf-kicker">Vision</p>
                <p className="mt-4 text-sm leading-7 text-qrf-soft">{about.vision}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-qrf-navy/45">
        <div className="qrf-container grid md:grid-cols-2 lg:grid-cols-4">
          {disciplines.map((discipline, index) => {
            const Icon = discipline.icon;
            return (
              <article
                className="border-b border-white/10 py-9 md:px-7 lg:border-b-0 lg:border-r lg:last:border-r-0"
                key={discipline.title}
              >
                <div className="flex items-center justify-between">
                  <Icon aria-hidden="true" className="h-6 w-6 text-qrf-cyan" />
                  <span className="text-xs font-bold text-qrf-muted">0{index + 1}</span>
                </div>
                <h2 className="mt-6 font-heading text-xl font-bold text-white">{discipline.title}</h2>
                <p className="mt-3 text-sm leading-6 text-qrf-soft">{discipline.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="qrf-section-lg">
        <div className="qrf-container grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="qrf-editorial-image relative overflow-hidden">
            <img
              alt="Remote communications infrastructure serving a Papua New Guinea coastal community"
              className="aspect-[16/11] h-full w-full object-cover"
              loading="lazy"
              src="/assets/qrf/pages/about-png-context.webp"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-qrf-ink/20 via-transparent to-qrf-ink/80" />
          </div>
          <div>
            <SectionHeader eyebrow="Local operating context" title={about.contextTitle} />
            <div className="mt-6 grid gap-5">
              {about.contextBody.map((paragraph) => (
                <p className="qrf-pretty text-base leading-8 text-qrf-soft" key={paragraph.slice(0, 40)}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="qrf-section-lg border-y border-white/10 bg-qrf-navy/45">
        <div className="qrf-container">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <div>
              <SectionHeader eyebrow="How we operate" title="Three commitments that shape our work" />
              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs font-bold uppercase tracking-[0.12em] text-qrf-muted">
                {about.coreValues.map((value) => (
                  <span key={value.title}>{value.title}</span>
                ))}
              </div>
            </div>
            <ol className="qrf-rule-list">
              {about.values.slice(0, 3).map((value, index) => (
                <li className="grid gap-3 py-6 first:pt-0 md:grid-cols-[4rem_1fr]" key={value.title}>
                  <span className="font-heading text-sm font-bold text-qrf-cyan">0{index + 1}</span>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white">{value.title}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-qrf-soft">{value.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="qrf-section-lg">
        <div className="qrf-container">
          <SectionHeader
            align="center"
            description={about.approachDescription}
            eyebrow="Delivery process"
            title={about.approachTitle}
          />
          <div className="qrf-section-gap grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {about.approach.map((step, index) => (
              <ProcessStepCard
                description={step.description}
                icon={approachIcons[index] ?? Headset}
                key={step.number}
                number={step.number}
                title={step.title}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="qrf-section-sm pt-0">
        <div className="qrf-container">
          <ContactCta description={about.ctaDescription} title={about.ctaTitle} />
        </div>
      </section>
    </main>
  );
}
