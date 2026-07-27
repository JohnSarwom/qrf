import React from 'react';
import { ArrowRight, CheckCircle2, Radio, ShieldCheck, Siren, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const highlights = [
  '24/7 rapid response coordination',
  'Command center monitoring capability',
  'Two-way radio and data communications',
];

const stats = [
  { value: '20+', label: 'Years operating experience' },
  { value: '24/7', label: 'Emergency-ready support' },
  { value: 'PNG', label: 'Local coverage and insight' },
];

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative overflow-hidden bg-[#eef3f7] px-4 pb-14 pt-24 md:px-6 md:pb-20 lg:pt-28">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[28px] bg-[#050b1f] text-white shadow-2xl shadow-slate-950/25 ring-1 ring-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,194,255,0.26),transparent_32%),radial-gradient(circle_at_82%_18%,rgba(14,165,233,0.2),transparent_26%),linear-gradient(135deg,#050b1f_0%,#07172d_48%,#030712_100%)]" />
          <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(125,211,252,0.26)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.22)_1px,transparent_1px)] [background-size:42px_42px]" />

          <div className="relative grid min-h-[720px] gap-10 px-6 py-10 sm:px-8 md:min-h-[680px] lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:py-14 xl:px-16">
            <div className="flex flex-col justify-center">
              <div className="mb-7 inline-flex w-fit items-center gap-3 rounded-full border border-cyan-300/25 bg-white/7 px-4 py-2 text-sm font-semibold text-cyan-100 backdrop-blur">
                <span className="flex h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
                Papua New Guinea security and communications partner
              </div>

              <h1 className="max-w-4xl text-4xl font-black leading-[1.02] text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Security response built for critical PNG operations.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                QRF Communications brings emergency response, asset protection, command center operations, and radio communications into one field-ready security partner.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="h-12 rounded-md bg-cyan-400 px-7 text-base font-black text-slate-950 shadow-lg shadow-cyan-500/20 hover:bg-cyan-300"
                  onClick={() => scrollToSection('#contact')}
                >
                  Request Security Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-md border-white/20 bg-white/5 px-7 text-base font-bold text-white backdrop-blur hover:bg-white/10 hover:text-white"
                  onClick={() => scrollToSection('#services')}
                >
                  Explore Services
                </Button>
              </div>

              <div className="mt-10 grid gap-3 sm:max-w-xl">
                {highlights.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-semibold text-slate-200">
                    <span className="flex h-7 w-7 items-center justify-center rounded-md bg-cyan-400/12 text-cyan-200 ring-1 ring-cyan-300/25">
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-12 grid grid-cols-3 gap-2 rounded-xl border border-white/10 bg-white/[0.04] p-2 backdrop-blur md:max-w-2xl">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-lg bg-white/[0.06] px-3 py-4">
                    <div className="text-2xl font-black text-cyan-200 sm:text-3xl">{stat.value}</div>
                    <div className="mt-1 text-[11px] font-semibold uppercase leading-4 tracking-wide text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex min-h-[520px] items-end justify-center lg:min-h-0">
              <div className="absolute left-2 top-10 hidden w-64 rounded-xl border border-cyan-200/15 bg-slate-950/55 p-5 shadow-2xl shadow-cyan-950/30 backdrop-blur xl:block">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400 text-slate-950">
                    <Siren className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-black">Live Response Stack</p>
                    <p className="text-xs text-slate-400">Monitoring, dispatch, field teams</p>
                  </div>
                </div>
                <div className="space-y-4 border-l border-cyan-300/30 pl-4">
                  {['Assess threat', 'Coordinate response', 'Maintain comms'].map((step) => (
                    <div key={step} className="relative text-sm font-semibold text-slate-200">
                      <span className="absolute -left-[22px] top-1.5 h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.9)]" />
                      {step}
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-10 right-0 z-20 grid w-[min(100%,23rem)] gap-3 rounded-xl border border-white/12 bg-slate-950/65 p-4 shadow-2xl shadow-slate-950/35 backdrop-blur md:right-4 lg:bottom-12">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">Operational status</p>
                    <p className="mt-1 text-lg font-black text-white">Ready for deployment</p>
                  </div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-400/15 text-cyan-200 ring-1 ring-cyan-300/30">
                    <Zap className="h-5 w-5" />
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-lg bg-white/[0.06] p-3">
                    <Radio className="mb-2 h-4 w-4 text-cyan-200" />
                    <p className="text-xs font-semibold text-slate-300">Radio dispatch</p>
                  </div>
                  <div className="rounded-lg bg-white/[0.06] p-3">
                    <ShieldCheck className="mb-2 h-4 w-4 text-cyan-200" />
                    <p className="text-xs font-semibold text-slate-300">Asset protection</p>
                  </div>
                </div>
              </div>

              <img
                src="/qrf-hero-operator.png"
                alt="QRF Communications security operator in a command center"
                className="relative z-10 h-full max-h-[660px] w-full max-w-[620px] object-contain object-bottom drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
