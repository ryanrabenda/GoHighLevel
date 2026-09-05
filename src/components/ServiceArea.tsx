import { business } from "@/lib/business";
import Reveal from "./Reveal";

export default function ServiceArea() {
  return (
    <section id="service-area" className="bg-offwhite py-20 md:py-28">
      <div className="container-tarzan grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <p className="font-eyebrow text-xs uppercase tracking-[0.25em] text-oxblood">
            Service Area
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-[1.02] text-forest-dark text-balance sm:text-5xl">
            Taming jungles across the Hudson Valley.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-charcoal/75 sm:text-lg">
            Based at {business.fullAddress}, and serving surrounding Hudson
            Valley communities across Orange, Dutchess, Ulster and Putnam
            counties.
          </p>

          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-eyebrow text-sm uppercase tracking-wide text-charcoal/70">
            {business.serviceTowns.map((town) => (
              <li key={town} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-moss" />
                {town}
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-sm border border-moss/40 bg-forest-deep/5 p-5">
            <p className="font-eyebrow text-sm uppercase tracking-wide text-forest-dark">
              Not sure if we service your area?
            </p>
            <a
              href={business.phoneHref}
              className="mt-2 inline-block font-display text-2xl font-bold text-oxblood"
            >
              Call {business.phoneDisplay}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-sm bg-forest-deep p-2 shadow-xl shadow-forest-dark/20 ring-1 ring-moss/30">
            <div className="aspect-square w-full overflow-hidden rounded-sm">
              <iframe
                title={`Map showing ${business.name} at ${business.fullAddress}`}
                src={business.googleMapsEmbedSrc}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.15) contrast(1.05)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
              />
            </div>
            <a
              href={business.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-between gap-2 rounded-sm bg-forest-dark px-4 py-3 font-eyebrow text-xs uppercase tracking-wide text-offwhite/80 transition-colors hover:text-khaki"
            >
              <span>{business.fullAddress}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5 shrink-0">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
