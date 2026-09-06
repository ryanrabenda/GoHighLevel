import { company, counties, fullAddress, towns } from "@/lib/business";
import Reveal from "./Reveal";

export default function ServiceArea() {
  return (
    <section id="service-area" className="bg-cream py-24 md:py-32">
      <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-stretch lg:gap-0">
        <Reveal className="overflow-hidden rounded-2xl lg:rounded-r-none">
          <iframe
            title={`Map showing ${company.name} at ${fullAddress}`}
            src={company.googleMapsEmbedSrc}
            className="h-72 w-full lg:h-full"
            style={{ border: 0, filter: "sepia(0.15) saturate(0.9)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>

        <Reveal
          delay={0.1}
          className="rounded-2xl bg-forest px-8 py-10 text-cream lg:rounded-l-none lg:px-14 lg:py-14"
        >
          <p className="font-label text-xs font-semibold uppercase tracking-[0.25em] text-parchment/70">
            Service Area
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.1] text-cream text-balance sm:text-4xl">
            Based in Newburgh. Working across the Hudson Valley.
          </h2>

          <ul className="mt-6 flex flex-wrap gap-2 font-label text-xs uppercase tracking-wide text-cream/60">
            {counties.map((county) => (
              <li key={county} className="rounded-full border border-cream/20 px-3 py-1">
                {county}
              </li>
            ))}
          </ul>

          <p className="mt-6 font-body text-base leading-relaxed text-cream/80">
            {towns.join(" · ")}
          </p>

          <div className="mt-8 border-t border-cream/15 pt-6">
            <p className="font-label text-xs uppercase tracking-wide text-cream/60">
              Not sure if we cover your town?
            </p>
            <a
              href={company.phoneHref}
              className="mt-1 inline-block font-display text-2xl font-semibold text-gold"
            >
              Call {company.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
