import React from 'react';
import { Building2, Factory, HardHat, MapPinned, Route, Truck } from 'lucide-react';

const useCases = [
  {
    icon: Building2,
    title: 'Corporate and executive operations',
    description: 'Security planning, personnel movement, escort support, and confidential response coordination.',
  },
  {
    icon: Factory,
    title: 'Industrial and critical sites',
    description: 'Site security, incident readiness, command center workflows, and field communication support.',
  },
  {
    icon: Truck,
    title: 'Logistics and asset movement',
    description: 'Movement planning, vehicle recovery support, risk-aware routing, and dispatch coordination.',
  },
  {
    icon: HardHat,
    title: 'Construction and project teams',
    description: 'Personnel protection, site access support, emergency readiness, and local operating guidance.',
  },
  {
    icon: MapPinned,
    title: 'Remote and regional operations',
    description: 'Planning for teams operating beyond standard office environments and urban coverage areas.',
  },
  {
    icon: Route,
    title: 'Radio-dependent field teams',
    description: 'Portable and mobile radio coordination, repeaters, dispatch-ready networks, and data communications.',
  },
];

const EnterpriseUseCases = () => {
  return (
    <section id="industries" className="bg-[#eef3f7] px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-4xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-cyan-700 shadow-sm">
            <Building2 className="h-4 w-4" />
            Enterprise Use Cases
          </div>
          <h2 className="text-3xl font-black leading-tight text-slate-950 sm:text-4xl md:text-5xl">
            Built for organizations that cannot afford response gaps.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            QRF support can be scoped around the risk profile of each operation, from planned personnel movement to site readiness, command center coordination, and radio-enabled response.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {useCases.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200/80">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-50 text-cyan-700 ring-1 ring-cyan-100">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-black leading-tight text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseUseCases;
