import React from 'react';
import { Activity, ArrowUpRight, CheckCircle2, Cctv, Clock, MapPinned, Radio, ShieldCheck, UsersRound } from 'lucide-react';

const capabilities = [
  {
    icon: Cctv,
    title: 'Command Center Operations',
    description: 'Centralized monitoring, incident tracking, and response coordination for security-sensitive operations.',
    className: 'md:col-span-2',
  },
  {
    icon: Radio,
    title: 'Radio Dispatch',
    description: 'Two-way radio and data communication support that keeps field teams connected.',
    className: '',
  },
  {
    icon: ShieldCheck,
    title: 'Asset Protection',
    description: 'Protection planning for personnel, vehicles, facilities, and operational assets.',
    className: '',
  },
  {
    icon: Activity,
    title: 'Incident Readiness',
    description: 'Practical procedures that help teams prepare, respond, and recover quickly.',
    className: 'md:col-span-2',
  },
];

const proof = [
  { value: '20+', label: 'Years of security and communications experience' },
  { value: '24/7', label: 'Emergency response and support posture' },
  { value: 'PNG', label: 'Local operating context and coverage' },
];

const principles = [
  'Rapid threat assessment',
  'Clear dispatch protocols',
  'Field-tested communications',
  'Professional personnel deployment',
];

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-[#eef3f7] px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-cyan-700 shadow-sm">
              <ShieldCheck className="h-4 w-4" />
              Why QRF
            </div>
            <h2 className="text-3xl font-black leading-tight text-slate-950 sm:text-4xl md:text-5xl">
              Built for high-pressure operations where response time matters.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-600 lg:justify-self-end">
            QRF Communications combines trained people, reliable radio systems, command center coordination, and local PNG operating knowledge into one practical security capability.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative min-h-[460px] overflow-hidden rounded-2xl bg-slate-950 shadow-2xl shadow-slate-300/70 ring-1 ring-slate-200">
            <img
              src="/qrf-command-capabilities.png"
              alt="QRF command center and radio communications capability"
              className="h-full min-h-[460px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="max-w-xl rounded-2xl border border-white/15 bg-slate-950/60 p-5 text-white backdrop-blur">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Integrated operations</p>
                <h3 className="mt-2 text-2xl font-black">Monitor, coordinate, and communicate from one response stack.</h3>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {principles.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                      <CheckCircle2 className="h-4 w-4 text-cyan-300" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {capabilities.map((capability) => {
              const Icon = capability.icon;
              return (
                <article
                  key={capability.title}
                  className={`group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/80 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200 ${capability.className}`}
                >
                  <div className="mb-8 flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-cyan-300">
                      <Icon className="h-6 w-6" />
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-slate-300 transition-colors group-hover:text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-black leading-tight text-slate-950">{capability.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{capability.description}</p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-6 grid gap-4 rounded-2xl bg-slate-950 p-4 text-white shadow-xl shadow-slate-300/70 md:grid-cols-3 md:p-5">
          {proof.map((item) => (
            <div key={item.label} className="rounded-xl border border-white/10 bg-white/[0.06] p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400 text-slate-950">
                  {item.value === '20+' ? <Clock className="h-5 w-5" /> : item.value === '24/7' ? <UsersRound className="h-5 w-5" /> : <MapPinned className="h-5 w-5" />}
                </span>
                <p className="text-3xl font-black text-cyan-100">{item.value}</p>
              </div>
              <p className="mt-3 text-sm font-semibold leading-6 text-slate-300">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
