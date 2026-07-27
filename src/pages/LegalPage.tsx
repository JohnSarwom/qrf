import { FileText, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { PageMeta } from "@/components/PageMeta";
import { Breadcrumbs } from "@/components/shell";
import { QrfButton } from "@/components/qrf";
import type { LegalPageContent } from "@/content/legal";

interface LegalPageProps {
  page: LegalPageContent;
}

export default function LegalPage({ page }: LegalPageProps) {
  return (
    <main className="qrf-page">
      <PageMeta
        description={page.metaDescription}
        title={page.metaTitle}
      />

      <section className="qrf-section-grid border-b border-white/10 py-14 md:py-20">
        <div className="qrf-container">
          <Breadcrumbs items={[{ label: page.title }]} />
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.42fr] lg:items-end">
            <div>
              <p className="qrf-kicker">{page.eyebrow}</p>
              <h1 className="qrf-display qrf-balance mt-5 max-w-4xl text-white">
                {page.title}
              </h1>
              <p className="qrf-pretty mt-6 max-w-3xl text-base leading-8 text-qrf-soft md:text-lg">
                {page.summary}
              </p>
            </div>
            <div className="border-l border-qrf-cyan/50 pl-5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-qrf-muted">
                Last updated
              </p>
              <p className="mt-2 font-heading text-lg font-bold text-white">
                {page.lastUpdated}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="qrf-section-lg">
        <div className="qrf-container grid gap-12 lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-16">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-qrf-md border border-white/10 bg-qrf-navy/55 p-5">
              <div className="flex items-center gap-3 text-white">
                <FileText aria-hidden="true" className="h-5 w-5 text-qrf-cyan" />
                <h2 className="font-heading text-sm font-bold">On this page</h2>
              </div>
              <nav aria-label={`${page.title} sections`} className="mt-5">
                <ol className="grid gap-1">
                  {page.sections.map((section) => (
                    <li key={section.id}>
                      <a
                        className="block rounded-qrf-sm px-3 py-2 text-sm leading-5 text-qrf-muted transition-colors hover:bg-white/[0.05] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-qrf-cyan"
                        href={`#${section.id}`}
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </aside>

          <article className="min-w-0">
            <div className="rounded-qrf-md border border-white/10 bg-qrf-card/55 px-6 py-2 sm:px-8 md:px-10">
              {page.sections.map((section) => (
                <section
                  className="scroll-mt-28 border-b border-white/10 py-8 last:border-b-0 md:py-10"
                  id={section.id}
                  key={section.id}
                >
                  <h2 className="qrf-balance font-heading text-2xl font-bold text-white">
                    {section.title}
                  </h2>
                  <div className="mt-5 grid gap-4">
                    {section.paragraphs.map((paragraph) => (
                      <p
                        className="qrf-pretty text-sm leading-7 text-qrf-soft md:text-base md:leading-8"
                        key={paragraph.slice(0, 55)}
                      >
                        {paragraph}
                      </p>
                    ))}
                    {section.bullets && (
                      <ul className="mt-1 grid gap-3">
                        {section.bullets.map((bullet) => (
                          <li
                            className="grid grid-cols-[0.65rem_1fr] gap-3 text-sm leading-7 text-qrf-soft md:text-base"
                            key={bullet}
                          >
                            <span
                              aria-hidden="true"
                              className="mt-[0.72rem] h-1.5 w-1.5 rounded-full bg-qrf-cyan"
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-8 flex flex-col justify-between gap-6 rounded-qrf-md border border-qrf-cyan/25 bg-qrf-blue/10 p-6 sm:flex-row sm:items-center md:p-8">
              <div className="flex gap-4">
                <Mail
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-qrf-cyan"
                />
                <div>
                  <h2 className="font-heading text-lg font-bold text-white">
                    Questions about this page?
                  </h2>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-qrf-soft">
                    Contact QRF if you need clarification or want to make a
                    privacy-related request.
                  </p>
                </div>
              </div>
              <QrfButton className="flex-none" href="/contact" variant="secondary">
                Contact QRF
              </QrfButton>
            </div>

            <p className="mt-7 text-xs leading-6 text-qrf-muted">
              You can also review our{" "}
              {page.path !== "/privacy" && (
                <>
                  <Link className="text-qrf-cyan hover:text-white" to="/privacy">
                    Privacy Policy
                  </Link>
                  {page.path !== "/terms" ? ", " : " or "}
                </>
              )}
              {page.path !== "/terms" && (
                <>
                  <Link className="text-qrf-cyan hover:text-white" to="/terms">
                    Terms of Use
                  </Link>
                  {page.path !== "/disclaimer" && " or "}
                </>
              )}
              {page.path !== "/disclaimer" && (
                <Link className="text-qrf-cyan hover:text-white" to="/disclaimer">
                  Website Disclaimer
                </Link>
              )}
              .
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

