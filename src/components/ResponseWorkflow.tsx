import React from 'react';
import { ClipboardCheck, FileText, Headset, RadioTower, ShieldAlert, TrendingUp } from 'lucide-react';

const workflow = [
  {
    icon: ShieldAlert,
    step: '01',
    title: 'Assess',
    description: 'Clarify site, personnel, movement, asset, or communications risks.',
  },
  {
    icon: ClipboardCheck,
    step: '02',
    title: 'Plan',
    description: 'Define coverage, response roles, escalation points, and operating procedures.',
  },
  {
    icon: RadioTower,
    step: '03',
    title: 'Connect',
    description: 'Set dispatch and radio communication pathways for field teams.',
  },
  {
    icon: Headset,
    step: '04',
    title: 'Coordinate',
    description: 'Support incident response through command center and field coordination.',
  },
  {
    icon: FileText,
    step: '05',
    title: 'Report',
    description: 'Capture incident context, actions taken, and follow-up requirements.',
  },
  {
    icon: TrendingUp,
    step: '06',
    title: 'Improve',
    description: 'Review outcomes and refine response procedures for future operations.',
  },
];

const ResponseWorkflow = () => {
  return (
    <section id="response-model" className="relative overflow-hidden bg-white px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-cyan-700">
              <ClipboardCheck className="h-4 w-4" />
              Response Model
            </div>
            <h2 className="text-3xl font-black leading-tight text-slate-950 sm:text-4xl md:text-5xl">
              A practical operating model for serious security requirements.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-600 lg:justify-self-end">
            Enterprise teams need to know how support is structured before a critical moment. QRF aligns risk assessment, response planning, radio communications, and command coordination into a clear operating flow.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {workflow.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-xl border border-slate-200 bg-[#f8fafc] p-6">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-sm font-black text-cyan-700">{item.step}</span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-950 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <h3 className="text-xl font-black text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResponseWorkflow;
