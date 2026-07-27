import {
  ArrowRight,
  Building2,
  Cctv,
  CheckCircle2,
  CircuitBoard,
  Factory,
  Globe2,
  Headset,
  Landmark,
  LifeBuoy,
  MapPinned,
  Network,
  PanelsTopLeft,
  Pickaxe,
  RadioTower,
  Satellite,
  SatelliteDish,
  ScanSearch,
  ShieldCheck,
  Truck,
  UsersRound,
  Wifi,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";
import { PageMeta } from "@/components/PageMeta";
import {
  ContactCta,
  ProcessStepCard,
  QrfButton,
  SectionHeader,
  SolutionCard,
} from "@/components/qrf";
import {
  connectivityCapabilities,
  deliveryProcess,
  homepage,
  industries,
  describablePartners,
  publishablePartners,
  solutions,
} from "@/content";

const capabilityItems = [
  { title: "Business Internet", icon: Wifi },
  { title: "Satellite Connectivity", icon: Satellite },
  { title: "Radio Communications", icon: RadioTower },
  { title: "CCTV & Security", icon: Cctv },
  { title: "Network Infrastructure", icon: Network },
] as const;

const solutionIcons = {
  "isp-business-internet": Globe2,
  "starlink-connectivity": Satellite,
  "radio-communications": RadioTower,
  "cctv-video-security": Cctv,
  "network-infrastructure": Network,
} as const;

const whyIcons = [Workflow, ShieldCheck, UsersRound, MapPinned] as const;
const processIcons = [ScanSearch, PanelsTopLeft, Truck, LifeBuoy] as const;
const industryIcons = {
  government: Landmark,
  "mining-resources": Pickaxe,
  "oil-gas": Factory,
  "banking-finance": Building2,
  "transport-logistics": Truck,
  "security-facilities": ShieldCheck,
  corporate: Building2,
  "remote-operations": SatelliteDish,
} as const;

const Index = () => {
  return (
    <main className="qrf-page">
      <PageMeta
        title="QRF Communications | Connectivity & Security Solutions PNG"
        description="QRF provides communications, connectivity, security and network infrastructure solutions for organisations operating across Papua New Guinea."
      />

      <section className="relative isolate min-h-[680px] overflow-hidden border-b border-white/10 lg:min-h-[calc(100svh-116px)]">
        <picture className="absolute inset-0 -z-20">
          <source media="(max-width: 639px)" srcSet={homepage.hero.images.mobile} />
          <source media="(max-width: 1023px)" srcSet={homepage.hero.images.tablet} />
          <img
            alt=""
            className="h-full w-full object-cover object-center"
            src={homepage.hero.images.desktop}
            // React 18 does not map the camelCase prop; lowercase reaches the DOM.
            {...{ fetchpriority: "high" }}
          />
        </picture>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(2,10,23,.97)_0%,rgba(3,14,32,.88)_42%,rgba(3,14,32,.3)_75%,rgba(2,10,23,.7)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-52 bg-gradient-to-t from-qrf-ink to-transparent" />

        <div className="qrf-container flex min-h-[680px] items-center py-20 lg:min-h-[calc(100svh-116px)] lg:py-24">
          <div className="max-w-3xl">
            <p className="qrf-kicker">{homepage.hero.eyebrow}</p>
            <h1 className="qrf-display qrf-balance mt-6 text-white">
              Mission-Critical Communications.{" "}
              <span className="text-qrf-bright">Connected PNG.</span>
            </h1>
            <p className="qrf-pretty mt-7 max-w-2xl text-base leading-8 text-qrf-soft md:text-lg">
              {homepage.hero.description}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <QrfButton href={homepage.hero.primaryCta.href}>
                {homepage.hero.primaryCta.label}
              </QrfButton>
              <QrfButton href={homepage.hero.secondaryCta.href} variant="secondary">
                {homepage.hero.secondaryCta.label}
              </QrfButton>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs font-bold uppercase tracking-[0.12em] text-white/70">
              {["Assess", "Design", "Deploy", "Support"].map((item) => (
                <span className="flex items-center gap-2" key={item}>
                  <CheckCircle2 className="h-4 w-4 text-qrf-cyan" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <Link
          aria-label="Explore QRF Motorola radio solutions"
          className="absolute right-[4vw] top-1/2 hidden w-40 -translate-y-1/2 overflow-hidden rounded-qrf-md border border-white/20 bg-white p-2.5 shadow-2xl shadow-black/35 transition-transform duration-200 hover:-translate-y-[52%] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-qrf-cyan xl:block 2xl:right-[7vw] 2xl:w-44"
          to="/solutions/radio-communications"
        >
          <img
            alt="Authorised Motorola Solutions Partner"
            className="aspect-[2/3] w-full rounded-qrf-sm object-contain"
            src="/assets/qrf/partners/motorola-authorised-partner.png"
          />
          <span className="mt-2 flex items-center justify-between gap-2 rounded-qrf-sm bg-qrf-ink px-3 py-2 font-heading text-[11px] font-bold leading-4 text-white">
            Motorola radio solutions
            <ArrowRight aria-hidden="true" className="h-3.5 w-3.5 flex-none text-qrf-cyan" />
          </span>
        </Link>
      </section>

      <section aria-label="Core capabilities" className="border-b border-white/10 bg-qrf-navy/70">
        <div className="qrf-container grid grid-cols-2 divide-x divide-white/10 md:grid-cols-3 lg:grid-cols-5">
          {capabilityItems.map(({ icon: Icon, title }, index) => (
            <div
              className={`flex min-h-36 flex-col justify-center gap-5 border-white/10 px-5 py-8 sm:px-6 lg:min-h-40 lg:px-7 ${
                index >= 2 ? "border-t md:border-t-0" : ""
              } ${index === 4 ? "col-span-2 md:col-span-1" : ""}`}
              key={title}
            >
              <Icon className="h-7 w-7 text-qrf-cyan" />
              <p className="font-heading text-sm font-bold text-white md:text-base">{title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="qrf-section">
        <div className="qrf-container">
          <SectionHeader
            align="center"
            description={homepage.capabilityIntro}
            eyebrow="Integrated solutions"
            title="Technology Built Around Your Operation"
          />
          <div className="qrf-section-gap grid gap-5 md:grid-cols-2 lg:grid-cols-6">
            {solutions.slice(0, 5).map((solution, index) => (
              <SolutionCard
                className={index < 3 ? "lg:col-span-2" : "lg:col-span-3"}
                description={solution.description}
                href={solution.href}
                icon={solutionIcons[solution.id as keyof typeof solutionIcons]}
                image={solution.image}
                imageAlt={`${solution.title} solution`}
                key={solution.id}
                title={solution.title}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="qrf-section-lg border-y border-white/10 bg-qrf-navy/45">
        <div className="qrf-container">
          <SectionHeader align="center" eyebrow="Why QRF" title={homepage.whyQrf.title} />
          <div className="qrf-section-gap grid md:grid-cols-2 lg:grid-cols-4">
            {homepage.whyQrf.items.map((item, index) => {
              const Icon = whyIcons[index];
              return (
                <article className="border-b border-white/10 py-7 md:px-7 lg:border-b-0 lg:border-r lg:last:border-r-0" key={item.title}>
                  <Icon className="h-6 w-6 text-qrf-cyan" />
                  <h3 className="mt-6 font-heading text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-qrf-soft">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="qrf-section-lg">
        <div className="qrf-container">
          <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center xl:gap-16">
            <div>
              <SectionHeader
                description={homepage.operations.description}
                eyebrow="Complete solution lifecycle"
                title={homepage.operations.title}
              />
              <QrfButton className="mt-8" href={homepage.operations.cta.href}>
                {homepage.operations.cta.label}
              </QrfButton>
            </div>
            <div className="relative overflow-hidden rounded-qrf-lg border border-white/10">
              <img
                alt="Operations team monitoring connected systems"
                className="aspect-[16/10] h-full w-full object-cover"
                loading="lazy"
                src="/assets/qrf/backgrounds/operations-centre.webp"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-qrf-ink/90 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-5 font-heading text-lg font-bold text-white">
                Connected systems. Accountable support.
              </p>
            </div>
          </div>
          <div className="qrf-section-gap grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {deliveryProcess.map((step, index) => (
              <ProcessStepCard
                description={step.description}
                icon={processIcons[index]}
                key={step.number}
                number={step.number}
                title={step.title}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="qrf-section qrf-section-grid border-y border-white/10 bg-qrf-navy/55">
        <div className="qrf-container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center xl:gap-16">
            <div>
              <SectionHeader
                description={homepage.connectivity.description}
                eyebrow={homepage.connectivity.label}
                title={homepage.connectivity.title}
              />
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {connectivityCapabilities.map((item) => (
                  <div className="flex items-center gap-3 text-sm font-semibold text-white" key={item}>
                    <CheckCircle2 className="h-5 w-5 flex-none text-qrf-cyan" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <QrfButton href={homepage.connectivity.primaryCta.href}>
                  {homepage.connectivity.primaryCta.label}
                </QrfButton>
                <QrfButton href={homepage.connectivity.secondaryCta.href} variant="secondary">
                  {homepage.connectivity.secondaryCta.label}
                </QrfButton>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  image: "/assets/qrf/isp/business-internet.webp",
                  label: "Business networks",
                  alt: "Connected city business network",
                },
                {
                  image: "/assets/qrf/starlink/starlink-field-operation.webp",
                  label: "Remote-site connectivity",
                  alt: "Satellite connectivity at a remote site",
                },
              ].map((panel) => (
                <figure className="group relative min-h-80 overflow-hidden rounded-qrf-md border border-white/10" key={panel.label}>
                  <img
                    alt={panel.alt}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    src={panel.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-qrf-ink via-qrf-ink/10 to-transparent" />
                  <figcaption className="absolute bottom-5 left-5 text-sm font-extrabold uppercase tracking-[0.1em] text-white">
                    {panel.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="qrf-section">
        <div className="qrf-container">
          <SectionHeader
            align="center"
            description="Purpose-fit communications, connectivity and security for demanding operating environments."
            eyebrow="Industries"
            title="Solutions for the Way Your Organisation Operates"
          />
          <div className="qrf-section-gap overflow-hidden rounded-qrf-md border border-white/10">
            {industries.slice(0, 4).map((industry) => {
              const Icon = industryIcons[industry.id as keyof typeof industryIcons];
              return (
                <Link
                  className="group grid gap-4 border-b border-white/10 bg-white/[0.025] px-6 py-5 last:border-b-0 hover:bg-white/[0.055] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-qrf-cyan md:grid-cols-[3rem_0.45fr_1fr_auto] md:items-center"
                  key={industry.id}
                  to={industry.href}
                >
                  <Icon className="h-6 w-6 text-qrf-cyan" />
                  <h3 className="font-heading text-lg font-bold text-white">{industry.title}</h3>
                  <p className="text-sm leading-6 text-qrf-soft">{industry.description}</p>
                  <ArrowRight className="h-5 w-5 text-qrf-cyan transition-transform group-hover:translate-x-1" />
                </Link>
              );
            })}
          </div>
          <div className="mt-7 text-center">
            <QrfButton href="/industries" variant="secondary">Explore All Industries</QrfButton>
          </div>
        </div>
      </section>

      <section className="qrf-section border-y border-white/10 bg-qrf-navy/50">
        <div className="qrf-container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center xl:gap-16">
          <SectionHeader
            description={homepage.pngContext.description}
            eyebrow="Local operating context"
            title={homepage.pngContext.title}
          />
          <div className="qrf-card-surface qrf-section-grid relative min-h-[420px] overflow-hidden p-8 md:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_50%,rgba(10,101,255,.17),transparent_48%)]" />
            <img
              alt="Map outline of Papua New Guinea"
              className="relative h-full min-h-[370px] w-full object-contain"
              loading="lazy"
              src="/assets/qrf/overlays/png-map.png"
            />
            {[
              ["28%", "57%"],
              ["48%", "39%"],
              ["64%", "52%"],
              ["78%", "63%"],
            ].map(([left, top]) => (
              <span
                className="absolute h-3 w-3 rounded-full border-2 border-white bg-qrf-bright shadow-[0_0_20px_rgba(61,183,255,.95)]"
                key={`${left}-${top}`}
                style={{ left, top }}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="qrf-section">
        <div className="qrf-container">
          <SectionHeader
            align="center"
            description="Technology selections are matched to each operating requirement, and sourced through authorised channels so equipment is supported and compliant."
            eyebrow="Technology ecosystem"
            title="Integrated Technology, Selected with Purpose"
          />
          <div className="qrf-section-gap mx-auto grid max-w-4xl gap-5 sm:grid-cols-3">
            {[
              { icon: CircuitBoard, label: "Integrated systems" },
              { icon: ShieldCheck, label: "Security technologies" },
              { icon: Headset, label: "Lifecycle support" },
            ].map(({ icon: Icon, label }) => (
              <div className="qrf-card-surface flex min-h-36 items-center justify-center gap-4 p-6 text-center" key={label}>
                <Icon className="h-6 w-6 text-qrf-cyan" />
                <span className="font-heading font-bold text-white">{label}</span>
              </div>
            ))}
          </div>
          {describablePartners.length > 0 && (
            <div className="qrf-section-gap mx-auto grid max-w-4xl gap-5">
              {describablePartners.map((partner) => (
                <div className="qrf-card-surface qrf-card-padding" key={partner.id}>
                  <p className="qrf-kicker">{partner.name}</p>
                  <p className="qrf-pretty mt-4 text-sm leading-7 text-qrf-soft">
                    {partner.relationshipWording}
                  </p>
                </div>
              ))}
            </div>
          )}
          {publishablePartners.length > 0 && (
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              {publishablePartners.map((partner) => (
                <img alt={partner.name} key={partner.id} src={partner.logo ?? undefined} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="qrf-section-sm border-y border-white/10 bg-qrf-navy/45">
        <div className="qrf-container grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12">
          <SectionHeader
            description="Assessment records, commissioning results, documentation and support arrangements show how a technical environment was delivered."
            eyebrow="Delivery evidence"
            title="Judge the work by what is handed over"
          />
          <QrfButton href="/projects" variant="secondary">
            Explore Delivery Capability
          </QrfButton>
        </div>
      </section>

      <section className="qrf-section">
        <div className="qrf-container">
          <ContactCta
            description={homepage.finalCta.description}
            title={homepage.finalCta.title}
          />
        </div>
      </section>
    </main>
  );
};

export default Index;
