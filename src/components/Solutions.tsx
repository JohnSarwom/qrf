import React from 'react';
import { AlertTriangle, ArrowRight, Cctv, CheckCircle2, Radio, Shield, SignalHigh } from 'lucide-react';
import { Button } from '@/components/ui/button';

const solutions = [
  {
    icon: Cctv,
    title: 'Command Center Solutions',
    description: 'Control room planning, monitoring workflows, CCTV coordination, and incident tracking systems for security operations.',
    points: ['Centralized monitoring', 'Incident logging', 'Dispatch coordination'],
  },
  {
    icon: Radio,
    title: 'Two-Way Radio & Data',
    description: 'Reliable field communications for teams operating across urban, industrial, remote, or high-risk environments.',
    points: ['Portable and mobile radios', 'Repeater and trunking support', 'Dispatch-ready networks'],
  },
  {
    icon: AlertTriangle,
    title: 'Hazard & Safety Systems',
    description: 'Operational safety support for risk identification, emergency planning, response escalation, and compliance workflows.',
    points: ['Risk assessment support', 'Emergency readiness', 'Safety monitoring'],
  },
];

const metrics = [
  { value: '01', label: 'Assess' },
  { value: '02', label: 'Connect' },
  { value: '03', label: 'Respond' },
];

const Solutions = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="solutions" className="relative overflow-hidden bg-[#050b1f] px-4 py-16 text-white md:px-6 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(34,211,238,0.2),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.14),transparent_34%)]" />
      <div className="absolute inset-0 opacity-[0.13] [background-image:linear-gradient(rgba(125,211,252,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.18)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/7 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-cyan-200 backdrop-blur">
              <SignalHigh className="h-4 w-4" />
              Specialized Solutions
            </div>
            <h2 className="text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
              Technical infrastructure for teams that need dependable response.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-300 lg:justify-self-end">
            QRF designs and supports practical systems that connect command rooms, field personnel, radio communications, and safety workflows across demanding PNG environments.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative min-h-[520px] overflow-hidden rounded-2xl bg-slate-950 shadow-2xl shadow-cyan-950/20 ring-1 ring-white/10">
            <img
              src="/qrf-solutions-tech.png"
              alt="QRF integrated command center and radio communications solutions"
              className="h-full min-h-[520px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent" />
            <div className="absolute left-5 right-5 top-5 grid gap-3 sm:left-auto sm:w-72">
              {metrics.map((item) => (
                <div key={item.label} className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 backdrop-blur">
                  <span className="text-sm font-black text-cyan-200">{item.value}</span>
                  <span className="text-xs font-black uppercase tracking-[0.18em] text-slate-300">{item.label}</span>
                </div>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="max-w-xl rounded-2xl border border-white/15 bg-slate-950/65 p-5 backdrop-blur">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Connected response</p>
                <h3 className="mt-2 text-2xl font-black">From control room visibility to field team execution.</h3>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <article
                  key={solution.title}
                  className={`rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-xl shadow-slate-950/15 backdrop-blur transition-all hover:-translate-y-1 hover:border-cyan-300/35 ${
                    index === 0 ? 'lg:rounded-t-[28px]' : ''
                  } ${index === solutions.length - 1 ? 'lg:rounded-b-[28px]' : ''}`}
                >
                  <div className="flex gap-4">
                    <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-cyan-400 text-slate-950">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="text-xl font-black leading-tight">{solution.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-300">{solution.description}</p>
                    </div>
                  </div>
                  <div className="mt-5 grid gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                    {solution.points.map((point) => (
                      <div key={point} className="flex items-center gap-2 rounded-lg bg-slate-950/45 px-3 py-2 text-xs font-bold text-slate-200">
                        <CheckCircle2 className="h-4 w-4 flex-none text-cyan-300" />
                        {point}
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}

            <div className="rounded-2xl border border-cyan-300/20 bg-cyan-400 p-6 text-slate-950 shadow-xl shadow-cyan-950/20">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <Shield className="mb-4 h-7 w-7" />
                  <h3 className="text-2xl font-black">Need a tailored security system?</h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slate-800">
                    QRF can scope a practical response, communications, and monitoring setup around your operation.
                  </p>
                </div>
                <Button onClick={scrollToContact} className="hidden rounded-md bg-slate-950 text-white hover:bg-white hover:text-slate-950 sm:inline-flex">
                  Talk to QRF
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
