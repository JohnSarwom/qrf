import { QrfButton } from "./QrfButton";

interface ContactCtaProps {
  description: string;
  title: string;
}

export function ContactCta({ description, title }: ContactCtaProps) {
  return (
    <section className="qrf-card-surface qrf-section-grid relative overflow-hidden p-7 sm:p-9 lg:p-12">
      <div className="absolute -right-28 -top-28 h-64 w-64 rounded-full bg-qrf-blue/20 blur-3xl" />
      <div className="relative grid gap-9 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
        <div className="max-w-2xl">
          <p className="qrf-kicker">Start a conversation</p>
          <h2 className="qrf-heading qrf-balance mt-4 text-white">{title}</h2>
          <p className="qrf-pretty mt-5 text-base leading-7 text-qrf-soft">
            {description}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <QrfButton href="/contact">Request a Consultation</QrfButton>
          <QrfButton href="/contact" variant="secondary">
            Contact QRF
          </QrfButton>
        </div>
      </div>
    </section>
  );
}
