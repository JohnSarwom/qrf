import React, { useState } from 'react';
import { ArrowRight, Car, CheckCircle2, ClipboardCheck, Headset, Radio, Shield, ShieldCheck, Siren, UsersRound } from 'lucide-react';
import { Button } from '@/components/ui/button';

const serviceTabs = [
  {
    key: 'Response',
    icon: Siren,
    title: 'Rapid Response Coordination',
    label: '24/7 Ready',
    description:
      'QRF helps organizations prepare for, coordinate, and respond to critical incidents with trained personnel, dispatch discipline, field communications, and practical operating procedures.',
    benefits: [
      'Fast mobilization and incident coordination',
      'Field teams supported by radio dispatch',
      'Built for PNG operating conditions',
    ],
    primary: 'Dispatch',
    secondary: 'Response coordination',
  },
  {
    key: 'Protection',
    icon: Shield,
    title: 'Armed Escorts & Asset Protection',
    label: 'Movement Ready',
    description:
      'Protect personnel, vehicles, facilities, and sensitive assets with planned escort support, site-risk awareness, and clear escalation procedures.',
    benefits: [
      'Personnel and asset movement support',
      'Route and site risk planning',
      'Field teams aligned to client protocols',
    ],
    primary: 'Escort',
    secondary: 'Personnel and asset cover',
  },
  {
    key: 'Communications',
    icon: Radio,
    title: 'Radio & Data Communications',
    label: 'Dispatch Linked',
    description:
      'Support field operations with portable radios, mobile units, repeater planning, data communications, and command-ready dispatch workflows.',
    benefits: [
      'Portable and mobile radio support',
      'Repeater and trunking planning',
      'Dispatch-ready communications networks',
    ],
    primary: 'Comms',
    secondary: 'Radio enabled',
  },
  {
    key: 'Consulting',
    icon: ClipboardCheck,
    title: 'Security Consultancy & Readiness',
    label: 'Planning Led',
    description:
      'Scope practical security plans, emergency procedures, hazard readiness, and response workflows for complex operating environments.',
    benefits: [
      'Risk and readiness assessments',
      'Emergency procedure planning',
      'Operational continuity recommendations',
    ],
    primary: 'Assess',
    secondary: 'Plan and improve',
  },
];

const serviceCards = [
  {
    icon: Siren,
    title: 'Emergency Response Planning',
    description: 'Practical response plans for high-pressure incidents, site risks, and operational continuity.',
  },
  {
    icon: UsersRound,
    title: 'Armed Escorts & Protection',
    description: 'Professional escort and asset protection services for personnel, movements, and critical sites.',
  },
  {
    icon: Car,
    title: 'Vehicle Recovery Support',
    description: 'Coordinated support for stolen vehicle recovery and response following vehicle-related incidents.',
  },
  {
    icon: Radio,
    title: 'Radio & Data Communications',
    description: 'Two-way radio, dispatch, repeater, and data communication solutions for field operations.',
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState(serviceTabs[0].key);
  const activeService = serviceTabs.find((tab) => tab.key === activeTab) ?? serviceTabs[0];
  const ActiveIcon = activeService.icon;

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="relative overflow-hidden bg-[#f5f8fb] px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-cyan-700 shadow-sm">
              <ShieldCheck className="h-4 w-4" />
              Operational Security Services
            </div>
            <h2 className="text-3xl font-black leading-tight text-slate-950 sm:text-4xl md:text-5xl">
              Flexible security services for response, protection, and communications.
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-slate-600">
            Choose focused support for a single operation or combine services into a complete security response stack.
          </p>
        </div>

        <div className="scrollbar-hide mb-8 flex gap-3 overflow-x-auto pb-2" role="tablist" aria-label="Service categories">
          {serviceTabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={activeService.key === tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`min-w-fit rounded-md border px-5 py-3 text-sm font-black transition-colors ${
                activeService.key === tab.key
                  ? 'border-slate-950 bg-slate-950 text-white shadow-lg shadow-slate-950/10'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-cyan-300 hover:text-cyan-700'
              }`}
            >
              {tab.key}
            </button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.94fr_1.06fr]">
          <div className="rounded-2xl bg-white p-5 shadow-xl shadow-slate-200/70 ring-1 ring-slate-200/80 md:p-7">
            <div className="flex h-full flex-col">
              <div className="mb-8 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 ring-1 ring-cyan-100">
                    <ActiveIcon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">Featured service</p>
                    <h3 className="text-xl font-black text-slate-950">{activeService.title}</h3>
                  </div>
                </div>
                <span className="hidden rounded-full bg-cyan-50 px-3 py-1 text-xs font-black uppercase tracking-wide text-cyan-700 sm:inline-flex">
                  {activeService.label}
                </span>
              </div>

              <p className="text-base leading-8 text-slate-600">
                {activeService.description}
              </p>

              <div className="mt-7 space-y-4">
                {activeService.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-cyan-600" />
                    <span className="text-sm font-semibold leading-6 text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-9 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-slate-950 p-5 text-white">
                  <Headset className="mb-4 h-6 w-6 text-cyan-300" />
                  <p className="text-2xl font-black">{activeService.primary}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-400">{activeService.secondary}</p>
                </div>
                <div className="rounded-xl bg-cyan-400 p-5 text-slate-950">
                  <Radio className="mb-4 h-6 w-6" />
                  <p className="text-2xl font-black">QRF</p>
                  <p className="mt-1 text-xs font-black uppercase tracking-wide">Operational support</p>
                </div>
              </div>

              <Button onClick={scrollToContact} className="mt-8 h-12 w-full rounded-md bg-slate-950 font-black text-white hover:bg-cyan-500 hover:text-slate-950">
                Build a Response Plan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="relative min-h-[300px] overflow-hidden rounded-2xl bg-slate-950 shadow-xl shadow-slate-200/70 ring-1 ring-slate-200/80 md:min-h-[390px]">
              <img
                src="/qrf-services-response.png"
                alt="QRF response coordinator with radio communications equipment"
                className="h-full min-h-[300px] w-full object-cover md:min-h-[390px]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/30 via-transparent to-slate-950/10" />
              <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/15 bg-slate-950/65 p-4 text-white shadow-2xl backdrop-blur">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Field-ready operations</p>
                <p className="mt-1 text-lg font-black">Response teams connected by clear communications.</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {serviceCards.map((service) => {
                const Icon = service.icon;
                return (
                  <article key={service.title} className="group rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200/80 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200">
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-950 transition-colors group-hover:bg-cyan-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-black leading-tight text-slate-950">{service.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
