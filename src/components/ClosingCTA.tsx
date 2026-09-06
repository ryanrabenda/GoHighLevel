import { company } from "@/lib/business";
import Reveal from "./Reveal";

export default function ClosingCTA() {
  return (
    <section className="bg-gold py-16 md:py-20">
      <div className="wrap flex flex-col items-center gap-6 text-center">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold leading-[1.1] text-charcoal text-balance sm:text-4xl">
            Your yard doesn&rsquo;t have to stay a jungle.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-charcoal px-8 py-3.5 font-label text-sm font-semibold uppercase tracking-wide text-cream transition-colors hover:bg-forest-deep"
            >
              Request a Free Quote
            </a>
            <a
              href={company.phoneHref}
              className="rounded-full border border-charcoal/40 px-8 py-3.5 font-label text-sm font-semibold uppercase tracking-wide text-charcoal transition-colors hover:border-charcoal"
            >
              Call {company.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
