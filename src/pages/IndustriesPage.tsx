import {
  Building2,
  CheckCircle2,
  Factory,
  Landmark,
  Pickaxe,
  SatelliteDish,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Breadcrumbs } from "@/components/shell";
import { ContactCta, QrfButton, SectionHeader } from "@/components/qrf";
import { PageMeta } from "@/components/PageMeta";
import { industries } from "@/content/industries";
import { industryDetailById } from "@/content/industryDetail";

const industryIcons: Record<string, typeof Landmark> = {
  government: Landmark,
  "mining-resources": Pickaxe,
  "oil-gas": Factory,
  "banking-finance": Building2,
  "transport-logistics": Truck,
  "security-facilities": ShieldCheck,
  corporate: Building2,
  "remote-operations": SatelliteDish,
};

const scenarios = [
  {
    title: "Remote and difficult-to-reach sites",
    description:
      "Connectivity, power and support planned for environments where a routine site visit is expensive.",
  },
  {
    title: "Regulated and accountable facilities",
    description:
      "Documented security, controlled access and reliable evidence for organisations operating under scrutiny.",
  },
  {
    title: "Mobile and distributed teams",
    description:
      "Radio, vehicle and site communications that keep teams coordinated beyond a single office or network.",
  },
] as const;

export default function IndustriesPage() {
  const { hash } = useLocation();
  const navigate = useNavigate();
  const hashId = hash.slice(1);
  const initialId = industryDetailById.has(hashId) ? hashId : industries[0].id;
  const [activeId, setActiveId] = useState(initialId);

  useEffect(() => {
    if (industryDetailById.has(hashId)) setActiveId(hashId);
  }, [hashId]);

  const activeIndustry = useMemo(
    () => industries.find((industry) => industry.id === activeId) ?? industries[0],
    [activeId],
  );
  const detail = industryDetailById.get(activeIndustry.id)!;
  const ActiveIcon = industryIcons[activeIndustry.id] ?? ShieldCheck;

  const selectIndustry = (id: string) => {
    setActiveId(id);
    navigate({ hash: id }, { replace: true });
  };

  return (
    <main className="qrf-page">
      <PageMeta
        description="Communications, connectivity and security solutions for government, mining, oil and gas, banking, transport, security, corporate and remote operations across Papua New Guinea."
        title="Industries | QRF Communications and Security PNG"
      />

      <section className="qrf-section-grid overflow-hidden border-b border-white/10 py-12 md:py-16">
        <div className="qrf-container">
          <Breadcrumbs items={[{ label: "Industries" }]} />
          <div className="relative mt-8">
            <div className="relative min-h-[430px] overflow-hidden rounded-qrf-lg border border-white/10 md:min-h-[540px]">
              <img
                alt="Starlink connectivity operating above Port Moresby harbour"
                className="absolute inset-0 h-full w-full object-cover object-center"
                src="/assets/qrf/starlink/starlink-pom-operation.webp"
                {...{ fetchpriority: "high" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-qrf-ink via-qrf-ink/15 to-transparent" />
              <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-qrf-ink/70 to-transparent" />
            </div>
            <div className="relative mx-4 -mt-36 max-w-4xl rounded-qrf-md border border-white/10 bg-qrf-ink/95 p-7 shadow-2xl backdrop-blur md:mx-8 md:-mt-44 md:p-10 lg:mx-12">
              <p className="qrf-kicker">Operating environments</p>
              <h1 className="qrf-display qrf-balance mt-5 text-white">
                Designed around operational pressure, not a catalogue
              </h1>
              <div className="mt-6 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
                <p className="qrf-pretty max-w-2xl text-base leading-8 text-qrf-soft md:text-lg">
                  The technology may be similar across sectors. The consequences of
                  failure are not. We design around the safety, continuity,
                  accountability and distance pressures specific to your operation.
                </p>
                <QrfButton href="/contact">Discuss Your Environment</QrfButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="qrf-section-lg">
        <div className="qrf-container">
          <SectionHeader
            description="Select the environment closest to yours. Each view focuses on the operational problem first, then the technology required to address it."
            eyebrow="Choose your sector"
            title="Different environments, different priorities"
          />

          <div
            aria-label="Industry selector"
            className="mt-9 grid gap-2 sm:grid-cols-2 lg:grid-cols-4"
            role="tablist"
          >
            {industries.map((industry) => {
              const Icon = industryIcons[industry.id] ?? ShieldCheck;
              const selected = industry.id === activeId;
              return (
                <button
                  aria-controls="industry-detail"
                  aria-selected={selected}
                  className={`flex min-h-16 items-center gap-3 rounded-qrf-sm border px-4 text-left text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-qrf-cyan ${
                    selected
                      ? "border-qrf-bright bg-qrf-blue/15 text-white"
                      : "border-white/10 bg-white/[0.025] text-qrf-soft hover:border-white/25 hover:text-white"
                  }`}
                  id={industry.id}
                  key={industry.id}
                  onClick={() => selectIndustry(industry.id)}
                  role="tab"
                  type="button"
                >
                  <Icon aria-hidden="true" className="h-5 w-5 flex-none text-qrf-cyan" />
                  {industry.title}
                </button>
              );
            })}
          </div>

          <section
            aria-labelledby={activeId}
            className="mt-7 overflow-hidden rounded-qrf-lg border border-white/10 bg-qrf-card"
            id="industry-detail"
            role="tabpanel"
          >
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="border-b border-white/10 p-7 md:p-9 lg:border-b-0 lg:border-r">
                <ActiveIcon aria-hidden="true" className="h-8 w-8 text-qrf-cyan" />
                <h2 className="mt-7 font-heading text-3xl font-bold text-white">
                  {detail.title}
                </h2>
                <p className="mt-5 text-base leading-8 text-qrf-soft">{detail.challenge}</p>
                <p className="mt-6 text-sm leading-7 text-qrf-muted">
                  <strong className="text-qrf-cyan">Typical deployments: </strong>
                  {detail.typical}
                </p>
                <QrfButton className="mt-7" href="/contact">
                  Discuss This Requirement
                </QrfButton>
              </div>
              <div className="p-7 md:p-9">
                <p className="qrf-kicker">Relevant capabilities</p>
                <ul className="mt-7 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                  {detail.provides.map((item) => (
                    <li className="flex items-start gap-3" key={item}>
                      <CheckCircle2
                        aria-hidden="true"
                        className="mt-0.5 h-5 w-5 flex-none text-qrf-cyan"
                      />
                      <span className="text-sm leading-6 text-qrf-soft">{item}</span>
                    </li>
                  ))}
                </ul>
                <QrfButton className="mt-8" href="/solutions" variant="secondary">
                  Explore Related Solutions
                </QrfButton>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="qrf-section-lg border-y border-white/10 bg-qrf-navy/45">
        <div className="qrf-container">
          <SectionHeader
            eyebrow="Common operating pressures"
            title="Requirements that cross industry boundaries"
          />
          <div className="mt-9 grid gap-8 md:grid-cols-3">
            {scenarios.map((scenario, index) => (
              <article className="border-t border-qrf-blue/50 pt-6" key={scenario.title}>
                <span className="text-xs font-bold text-qrf-cyan">0{index + 1}</span>
                <h2 className="mt-4 font-heading text-xl font-bold text-white">
                  {scenario.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-qrf-soft">{scenario.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="qrf-section-sm">
        <div className="qrf-container">
          <ContactCta
            description="Tell us what the site, team or facility must keep doing when conditions become difficult."
            title="Start with the operating requirement"
          />
        </div>
      </section>
    </main>
  );
}
