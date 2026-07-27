import { ExternalLink, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/shell";
import { ContactDetails, ContactForm } from "@/components/qrf";
import { PageMeta } from "@/components/PageMeta";
import { company } from "@/content/company";
import { telHref } from "@/lib/utils";

const mapAddress =
  "Yumi Code, Spondias St, Port Moresby 111, National Capital District";
const officeCoordinates = "-9.461221, 147.176963";
const mapPoint = "-9.461221,147.176963";
const encodedMapPoint = encodeURIComponent(mapPoint);
const mapEmbedUrl = `https://www.google.com/maps?q=${encodedMapPoint}&z=18&output=embed`;
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedMapPoint}`;

export default function ContactPage() {
  return (
    <main className="qrf-page">
      <PageMeta
        description="Speak with QRF about internet, communications, security or network infrastructure requirements for your operation in Papua New Guinea."
        title="Contact QRF | Communications and Security Solutions PNG"
      />

      <section className="qrf-section-grid relative isolate min-h-[560px] overflow-hidden border-b border-white/10 py-12 md:py-16">
        <img
          alt="Technical project consultation in Port Moresby"
          className="absolute inset-y-0 right-0 -z-20 h-full w-full object-cover object-center md:w-[66%] md:[clip-path:polygon(14%_0,100%_0,100%_100%,0_100%)]"
          src="/assets/qrf/pages/contact-consultation.webp"
          {...{ fetchpriority: "high" }}
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(2,10,23,1)_0%,rgba(2,10,23,.97)_38%,rgba(2,10,23,.72)_62%,rgba(2,10,23,.18)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-qrf-ink to-transparent" />
        <div className="qrf-container flex min-h-[440px] flex-col">
          <Breadcrumbs items={[{ label: "Contact" }]} />
          <div className="my-auto mt-9 max-w-3xl">
            <div>
              <p className="qrf-kicker">Start a conversation</p>
              <h1 className="qrf-display qrf-balance mt-5 max-w-3xl text-white">
                Tell us what your operation needs
              </h1>
              <p className="qrf-pretty mt-5 max-w-2xl text-base leading-8 text-qrf-soft md:text-lg">
                Share the site, systems involved and what you are trying to achieve.
                We will respond using your preferred contact method.
              </p>
            </div>
            <address className="mt-8 grid max-w-2xl gap-3 not-italic sm:grid-cols-2">
              {company.mainTelephone && (
                <a
                  className="flex min-h-14 items-center gap-4 rounded-qrf-sm border border-white/15 bg-qrf-ink/75 px-5 text-sm font-bold text-white backdrop-blur transition-colors hover:border-qrf-bright"
                  href={telHref(company.mainTelephone)}
                >
                  <Phone aria-hidden="true" className="h-5 w-5 text-qrf-cyan" />
                  {company.mainTelephone}
                </a>
              )}
              {company.generalEmail && (
                <a
                  className="flex min-h-14 items-center gap-4 rounded-qrf-sm border border-white/15 bg-qrf-ink/75 px-5 text-sm font-bold text-white backdrop-blur transition-colors hover:border-qrf-bright"
                  href={`mailto:${company.generalEmail}`}
                >
                  <Mail aria-hidden="true" className="h-5 w-5 text-qrf-cyan" />
                  {company.generalEmail}
                </a>
              )}
            </address>
          </div>
        </div>
      </section>

      <section className="qrf-section-lg">
        <div className="qrf-container">
          <div className="grid gap-7 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <ContactForm />
            <div className="grid gap-6">
              <ContactDetails />
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-qrf-md border border-white/10 bg-qrf-navy/45">
            <div className="grid gap-6 p-6 md:grid-cols-[1fr_auto] md:items-end md:p-8">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-qrf-sm border border-qrf-bright/35 bg-qrf-blue/10 text-qrf-cyan">
                  <MapPin aria-hidden="true" className="h-5 w-5" />
                </span>
                <div>
                  <p className="qrf-kicker">GPS location</p>
                  <h2 className="mt-2 font-heading text-2xl font-bold text-white">
                    Find us at Kungu Haus
                  </h2>
                  <address className="mt-3 max-w-3xl not-italic text-sm leading-7 text-qrf-soft">
                    {mapAddress}
                  </address>
                  <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                    <span className="rounded-full border border-qrf-cyan/25 bg-qrf-blue/10 px-3 py-1.5 font-bold text-qrf-cyan">
                      Exact map pin
                    </span>
                    <a
                      className="font-mono text-qrf-soft underline decoration-white/25 underline-offset-4 transition-colors hover:text-white"
                      href={`https://www.google.com/maps/search/?api=1&query=${encodedMapPoint}`}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {officeCoordinates}
                    </a>
                  </div>
                </div>
              </div>
              <a
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-qrf-sm border border-qrf-bright/40 bg-qrf-blue/15 px-4 py-2 text-sm font-bold text-white transition-colors hover:border-qrf-bright hover:bg-qrf-blue/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-qrf-cyan"
                href={directionsUrl}
                rel="noreferrer"
                target="_blank"
              >
                <Navigation aria-hidden="true" className="h-4 w-4 text-qrf-cyan" />
                Get directions
                <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" />
              </a>
            </div>
            <div className="relative aspect-[16/7] min-h-72 border-t border-white/10 bg-qrf-card md:min-h-96">
              <iframe
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0 grayscale-[0.15] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={mapEmbedUrl}
                title="Map showing QRF at Kungu Haus in Hohola, Port Moresby"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
