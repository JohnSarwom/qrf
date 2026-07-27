import {
  Building2,
  Cctv,
  Headset,
  Landmark,
  Network,
  RadioTower,
  Satellite,
  ScanSearch,
  ShieldCheck,
  Truck,
} from "lucide-react";
import {
  ContactCta,
  FeatureCard,
  ImagePanel,
  IndustryCard,
  ProcessStepCard,
  QrfButton,
  SectionHeader,
  SolutionCard,
} from "@/components/qrf";

const swatches = [
  ["Ink", "#020a14"],
  ["Navy", "#061426"],
  ["Card", "#081a2f"],
  ["Raised", "#0b213c"],
  ["Blue", "#0969f9"],
  ["Bright", "#1685ff"],
  ["Cyan", "#3db7ff"],
] as const;

export default function DesignSystem() {
  return (
    <main className="qrf-page">
      <section className="qrf-section qrf-section-grid border-b border-white/10">
        <div className="qrf-container">
          <p className="qrf-kicker">QRF design system</p>
          <h1 className="qrf-display qrf-balance mt-5 max-w-5xl">
            Mission-critical clarity for{" "}
            <span className="text-qrf-bright">connected PNG.</span>
          </h1>
          <p className="qrf-pretty mt-7 max-w-2xl text-lg leading-8 text-qrf-soft">
            Reusable visual foundations for QRF connectivity, communications,
            security and technical-support experiences.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <QrfButton href="/solutions">Primary action</QrfButton>
            <QrfButton href="/contact" variant="secondary">
              Secondary action
            </QrfButton>
            <QrfButton href="/" variant="ghost">
              Return home
            </QrfButton>
          </div>
        </div>
      </section>

      <section className="qrf-section">
        <div className="qrf-container">
          <SectionHeader
            description="A restrained navy foundation with electric-blue emphasis, designed for strong contrast and long-form enterprise content."
            eyebrow="Foundation"
            title="Colour and typography"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {swatches.map(([name, colour]) => (
              <article className="qrf-card-surface overflow-hidden" key={colour}>
                <div className="h-28" style={{ backgroundColor: colour }} />
                <div className="p-4">
                  <h3 className="font-heading font-bold text-white">{name}</h3>
                  <p className="mt-1 font-mono text-xs text-qrf-muted">
                    {colour}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="qrf-section border-y border-white/10 bg-qrf-navy/45">
        <div className="qrf-container">
          <SectionHeader
            description="Flexible components share the same border, radius, spacing, focus and motion behaviour."
            eyebrow="Components"
            title="Capabilities and trust"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              description="Reliable business connectivity for offices, branches and operational sites."
              icon={Network}
              title="Business Internet"
            />
            <FeatureCard
              description="Satellite connectivity solutions for regional and remote environments."
              icon={Satellite}
              title="Remote Connectivity"
            />
            <FeatureCard
              description="Professional radio systems for clear and dependable communications."
              icon={RadioTower}
              title="Radio Communications"
            />
            <FeatureCard
              description="Video monitoring and integrated systems for operational awareness."
              icon={ShieldCheck}
              title="Integrated Security"
            />
          </div>
        </div>
      </section>

      <section className="qrf-section">
        <div className="qrf-container">
          <SectionHeader
            align="center"
            description="Image-led cards remain concise, scannable and consistent across service pages."
            eyebrow="Solution cards"
            title="Technology built around the operation"
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <SolutionCard
              description="Dependable connectivity for workplaces and operational sites."
              href="/solutions/isp-business-internet"
              icon={Network}
              image="/assets/qrf/isp/business-internet.webp"
              imageAlt="Enterprise network equipment in a connected office environment"
              title="ISP & Business Internet"
            />
            <SolutionCard
              description="Satellite connectivity for regional and difficult-to-reach locations."
              href="/solutions/starlink-connectivity"
              icon={Satellite}
              image="/assets/qrf/starlink/starlink-field-operation.webp"
              imageAlt="Satellite connectivity equipment at a remote tropical operations site"
              title="Starlink Connectivity"
            />
            <SolutionCard
              description="Video-security systems designed for practical operational visibility."
              href="/solutions/cctv-video-security"
              icon={Cctv}
              image="/assets/qrf/cctv/integrated-security.webp"
              imageAlt="Conceptual video monitoring environment"
              title="CCTV & Video Security"
            />
          </div>
        </div>
      </section>

      <section className="qrf-section border-y border-white/10 bg-qrf-navy/45">
        <div className="qrf-container">
          <SectionHeader
            description="The delivery lifecycle uses clear numbering, consistent icons and concise outcomes."
            eyebrow="Process"
            title="From assessment to ongoing support"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <ProcessStepCard
              description="Evaluate the operating environment, requirements and objectives."
              icon={ScanSearch}
              number="01"
              title="Assess"
            />
            <ProcessStepCard
              description="Develop a tailored solution for performance and reliability."
              icon={Building2}
              number="02"
              title="Design"
            />
            <ProcessStepCard
              description="Install, configure and test the complete system."
              icon={Truck}
              number="03"
              title="Deploy"
            />
            <ProcessStepCard
              description="Maintain, troubleshoot and support the solution lifecycle."
              icon={Headset}
              number="04"
              title="Support"
            />
          </div>
        </div>
      </section>

      <section className="qrf-section">
        <div className="qrf-container grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <ImagePanel
            alt="Telecommunications tower and satellite dish in a blue-hour tropical environment"
            image="/assets/qrf/hero/hero-tablet.webp"
          >
            <p className="qrf-kicker">Built for PNG</p>
            <h2 className="mt-3 max-w-lg font-heading text-2xl font-bold text-white md:text-3xl">
              Visual storytelling without embedded interface text.
            </h2>
          </ImagePanel>
          <div className="grid gap-4 sm:grid-cols-2">
            <IndustryCard
              description="Communications and security infrastructure for public-service environments."
              href="/industries/government"
              icon={Landmark}
              title="Government"
            />
            <IndustryCard
              description="Resilient communications for distributed teams and operating sites."
              href="/industries/mining-resources"
              icon={Network}
              title="Mining & Resources"
            />
            <IndustryCard
              description="Secure networks and video-security for customer-facing operations."
              href="/industries/banking-finance"
              icon={Building2}
              title="Banking & Finance"
            />
            <IndustryCard
              description="Connected visibility for facilities, teams and transport networks."
              href="/industries/transport-logistics"
              icon={Truck}
              title="Transport & Logistics"
            />
          </div>
        </div>
      </section>

      <section className="qrf-section pt-0">
        <div className="qrf-container">
          <ContactCta
            description="Speak with QRF about internet, communications, security or network infrastructure requirements."
            title="Let’s design the right solution for your operation."
          />
        </div>
      </section>
    </main>
  );
}
