import { Breadcrumbs } from "@/components/shell";
import { ContactCta, QrfButton } from "@/components/qrf";
import { PageMeta } from "@/components/PageMeta";
import type { RoutePageDefinition } from "@/content/routePages";

interface RoutePageProps {
  page: RoutePageDefinition;
}

export default function RoutePage({ page }: RoutePageProps) {
  const breadcrumbs = [
    ...(page.parent ? [page.parent] : []),
    { label: page.title },
  ];

  return (
    <main className="qrf-page">
      <PageMeta
        description={page.description}
        title={`${page.title} | QRF PNG`}
      />
      <section className="qrf-section-grid border-b border-white/10 py-14 md:py-20">
        <div className="qrf-container">
          <Breadcrumbs items={breadcrumbs} />
          <p className="qrf-kicker mt-10">{page.eyebrow}</p>
          <h1 className="qrf-display qrf-balance mt-5 max-w-5xl text-white">
            {page.title}
          </h1>
          <p className="qrf-pretty mt-6 max-w-2xl text-base leading-8 text-qrf-soft md:text-lg">
            {page.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <QrfButton href="/contact">Discuss Your Requirements</QrfButton>
            <QrfButton href="/solutions" variant="secondary">
              Explore Solutions
            </QrfButton>
          </div>
        </div>
      </section>
      <section className="qrf-section">
        <div className="qrf-container">
          <div className="qrf-card-surface qrf-section-grid min-h-64 p-7 md:p-10">
            <p className="qrf-kicker">Page foundation ready</p>
            <h2 className="qrf-heading qrf-balance mt-4 max-w-3xl text-white">
              Detailed content will be assembled in its approved implementation
              phase.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-qrf-soft">
              The route, metadata, breadcrumbs, global navigation and responsive
              shell are active. No client names, partner claims or unverified
              operating commitments have been introduced.
            </p>
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
