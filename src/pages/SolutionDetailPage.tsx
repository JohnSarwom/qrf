import { ArrowRight, CheckCircle2, CircleDot } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "@/components/shell";
import { ContactCta, QrfButton, SectionHeader } from "@/components/qrf";
import { PageMeta } from "@/components/PageMeta";
import { company } from "@/content/company";
import type { SolutionDetail } from "@/content/solutionDetail";
import { solutionDetails } from "@/content/solutionDetail";

interface SolutionDetailPageProps {
  detail: SolutionDetail;
}

export default function SolutionDetailPage({ detail }: SolutionDetailPageProps) {
  const related = solutionDetails.filter((item) => item.id !== detail.id).slice(0, 3);
  const immersiveHero = ["starlink-connectivity", "cctv-video-security"].includes(
    detail.id,
  );
  const imageFirst = [
    "radio-communications",
    "network-infrastructure",
    "technical-support",
  ].includes(detail.id);

  return (
    <main className="qrf-page">
      <PageMeta
        description={detail.heroDescription}
        title={`${detail.title} | QRF PNG`}
      />

      {immersiveHero ? (
        <section className="relative isolate min-h-[650px] overflow-hidden border-b border-white/10">
          <img
            alt={detail.imageAlt}
            className="absolute inset-0 -z-20 h-full w-full object-cover"
            src={detail.image}
            {...{ fetchpriority: "high" }}
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(2,10,23,.98)_0%,rgba(2,10,23,.9)_38%,rgba(2,10,23,.35)_68%,rgba(2,10,23,.58)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 -z-10 h-52 bg-gradient-to-t from-qrf-ink to-transparent" />
          <div className="qrf-container flex min-h-[650px] flex-col py-14 md:py-20">
            <Breadcrumbs
              items={[
                { label: "Solutions", href: "/solutions" },
                { label: detail.title },
              ]}
            />
            <div className="my-auto max-w-2xl py-14">
              <p className="qrf-kicker">{detail.eyebrow}</p>
              <h1 className="qrf-display qrf-balance mt-5 text-white">
                {detail.title}
              </h1>
              <p className="qrf-pretty mt-6 text-base leading-8 text-qrf-soft md:text-lg">
                {detail.heroDescription}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <QrfButton href="/contact">Request a Consultation</QrfButton>
                <QrfButton href="/solutions" variant="secondary">
                  All Solutions
                </QrfButton>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="qrf-section-grid border-b border-white/10 py-14 md:py-20">
          <div className="qrf-container">
            <Breadcrumbs
              items={[
                { label: "Solutions", href: "/solutions" },
                { label: detail.title },
              ]}
            />
            <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center xl:gap-16">
              <div className={imageFirst ? "lg:order-2 lg:pl-4" : ""}>
                <p className="qrf-kicker">{detail.eyebrow}</p>
                <h1 className="qrf-display qrf-balance mt-5 max-w-full text-[clamp(2.35rem,5vw,4.15rem)] text-white">
                  {detail.title}
                </h1>
                <p className="qrf-pretty mt-6 max-w-2xl text-base leading-8 text-qrf-soft md:text-lg">
                  {detail.heroDescription}
                </p>
                {detail.id === "radio-communications" &&
                  company.motorolaRelationshipWording && (
                    <div className="mt-6 flex max-w-2xl items-center gap-4 rounded-qrf-md border border-qrf-cyan/30 bg-qrf-blue/10 p-4 shadow-lg shadow-black/15 sm:gap-5">
                      <span className="flex h-28 w-20 flex-none items-center justify-center overflow-hidden rounded-qrf-sm border border-slate-200 bg-white p-1.5 shadow-sm sm:h-32 sm:w-24">
                        <img
                          alt="Authorised Motorola Solutions Partner"
                          className="h-full w-full object-contain"
                          src="/assets/qrf/partners/motorola-authorised-partner.png"
                        />
                      </span>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.13em] text-qrf-cyan">
                          Authorised partner
                        </p>
                        <h2 className="mt-2 font-heading text-lg font-bold leading-snug text-white sm:text-xl">
                          Motorola Solutions expertise, delivered locally
                        </h2>
                        <p className="mt-2 text-sm leading-6 text-qrf-soft">
                          {company.motorolaRelationshipWording}
                        </p>
                      </div>
                    </div>
                  )}
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <QrfButton href="/contact">Request a Consultation</QrfButton>
                  <QrfButton href="/solutions" variant="secondary">
                    All Solutions
                  </QrfButton>
                </div>
              </div>
              <div
                className={`relative overflow-hidden rounded-qrf-lg border border-white/10 ${
                  imageFirst ? "lg:order-1" : "lg:translate-y-8"
                }`}
              >
                <img
                  alt={detail.imageAlt}
                  className="aspect-[16/11] h-full w-full object-cover"
                  src={detail.image}
                  {...{ fetchpriority: "high" }}
                />
                <div
                  className={`absolute inset-0 ${
                    imageFirst
                      ? "bg-gradient-to-r from-qrf-ink/55 via-transparent to-transparent"
                      : "bg-gradient-to-l from-qrf-ink/45 via-transparent to-transparent"
                  }`}
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-qrf-ink/75 to-transparent" />
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="qrf-section-lg">
        <div className="qrf-container">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <SectionHeader eyebrow="Overview" title={detail.overviewTitle} />
            <div className="mt-6 grid gap-5">
              {detail.overviewBody.map((paragraph) => (
                <p
                  className="qrf-pretty text-base leading-8 text-qrf-soft"
                  key={paragraph.slice(0, 40)}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="qrf-section-lg border-y border-white/10 bg-qrf-navy/45">
        <div className="qrf-container">
          <SectionHeader
            eyebrow="Capabilities"
            title="What this solution covers"
          />
          <div className="qrf-section-gap grid gap-x-10 md:grid-cols-2">
            {detail.capabilities.map((capability, index) => (
              <article
                className="grid gap-4 border-t border-white/10 py-6 sm:grid-cols-[2.5rem_1fr]"
                key={capability.title}
              >
                <span className="flex items-center gap-3 sm:block">
                  <span className="text-xs font-bold text-qrf-cyan">0{index + 1}</span>
                  <CircleDot aria-hidden="true" className="mt-3 h-5 w-5 text-qrf-cyan" />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold leading-snug text-white">
                    {capability.title}
                  </h3>
                  <p className="qrf-pretty mt-3 text-sm leading-7 text-qrf-soft">
                    {capability.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="qrf-section-lg">
        <div className="qrf-container">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="qrf-card-surface qrf-card-padding">
              <p className="qrf-kicker">Scope of delivery</p>
              <h2 className="mt-4 font-heading text-2xl font-bold text-white">
                What is included
              </h2>
              <ul className="mt-7 grid gap-3.5">
                {detail.included.map((item) => (
                  <li className="flex items-start gap-3" key={item}>
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-0.5 h-5 w-5 flex-none text-qrf-cyan"
                    />
                    <span className="text-sm leading-6 text-qrf-soft">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="qrf-card-surface qrf-card-padding">
              <p className="qrf-kicker">Typical applications</p>
              <h2 className="mt-4 font-heading text-2xl font-bold text-white">
                Commonly deployed for
              </h2>
              <ul className="mt-7 grid gap-3.5">
                {detail.suitedFor.map((item) => (
                  <li className="flex items-start gap-3" key={item}>
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-qrf-bright"
                    />
                    <span className="text-sm leading-6 text-qrf-soft">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="qrf-section-lg border-y border-white/10 bg-qrf-navy/45">
        <div className="qrf-container">
          <SectionHeader
            eyebrow="Common questions"
            title="Questions we are usually asked"
          />
          <div className="qrf-section-gap overflow-hidden rounded-qrf-md border border-white/10 bg-qrf-card">
            {detail.faqs.map((faq) => (
              <details className="group border-b border-white/10 last:border-b-0" key={faq.question}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5 font-heading text-lg font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-qrf-cyan">
                  {faq.question}
                  <span className="text-qrf-cyan transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="qrf-pretty max-w-3xl px-6 pb-6 text-sm leading-7 text-qrf-soft">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="qrf-section-lg">
        <div className="qrf-container">
          <SectionHeader
            eyebrow="Related solutions"
            title="Often deployed alongside"
          />
          <div className="qrf-section-gap overflow-hidden rounded-qrf-md border border-white/10">
            {related.map((item) => (
              <Link
                className="group grid gap-4 border-b border-white/10 bg-white/[0.025] px-6 py-5 transition-colors last:border-b-0 hover:bg-white/[0.055] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-qrf-cyan md:grid-cols-[0.35fr_1fr_auto] md:items-center"
                key={item.id}
                to={item.slug}
              >
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-qrf-cyan">
                  {item.eyebrow}
                </p>
                <h3 className="font-heading text-lg font-bold leading-snug text-white">
                  {item.title}
                </h3>
                <ArrowRight aria-hidden="true" className="h-5 w-5 text-qrf-cyan transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="qrf-section-sm pt-0">
        <div className="qrf-container">
          <ContactCta
            description={`Speak with QRF about ${detail.title} for your sites and operating conditions.`}
            title="Let's scope this for your operation"
          />
        </div>
      </section>
    </main>
  );
}
