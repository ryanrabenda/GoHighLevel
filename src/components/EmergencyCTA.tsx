import { company } from "@/lib/business";
import Reveal from "./Reveal";

export default function EmergencyCTA() {
  return (
    <section className="bg-bark py-14 md:py-16">
      <div className="wrap flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <Reveal>
          <p className="font-label text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Beyond Treescaping
          </p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-cream sm:text-3xl">
            Need demolition or emergency storm cleanup?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <a
            href={company.emergencyUrl}
            className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-gold px-7 py-3.5 font-label text-sm font-semibold uppercase tracking-wide text-charcoal transition-transform hover:scale-[1.03]"
          >
            Demolition &amp; Emergency Services
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
