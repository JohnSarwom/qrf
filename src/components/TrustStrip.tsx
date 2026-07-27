import React from 'react';
import { FileCheck2, Headset, LockKeyhole, Radio, ShieldCheck } from 'lucide-react';

const trustItems = [
  {
    icon: Headset,
    label: '24/7 urgent requirement triage',
    detail: 'Designed for response planning, dispatch, and field coordination.',
  },
  {
    icon: Radio,
    label: 'Radio-linked field operations',
    detail: 'Two-way communications support for mobile and site teams.',
  },
  {
    icon: ShieldCheck,
    label: 'PNG operating context',
    detail: 'Built around local routes, sites, risk profiles, and response realities.',
  },
  {
    icon: LockKeyhole,
    label: 'Confidential security planning',
    detail: 'Sensitive enquiries handled with operational discretion.',
  },
  {
    icon: FileCheck2,
    label: 'Procurement-ready discussions',
    detail: 'Capability, scope, and service requirements captured early.',
  },
];

const TrustStrip = () => {
  return (
    <section aria-label="QRF trust markers" className="bg-[#eef3f7] px-4 pb-16 md:px-6 md:pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/70 md:grid-cols-5">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.label} className="border-b border-slate-200 p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-50 text-cyan-700 ring-1 ring-cyan-100">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="text-sm font-black leading-5 text-slate-950">{item.label}</h2>
                <p className="mt-2 text-xs font-semibold leading-5 text-slate-500">{item.detail}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
