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
            Based in Newburgh, New York, and serving surrounding Hudson Valley
            communities across Orange, Dutchess, Ulster and Putnam counties.
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
          <div className="relative mx-auto aspect-square w-full max-w-md rounded-sm bg-forest-deep p-8">
            <svg
              viewBox="0 0 200 200"
              className="h-full w-full text-khaki/25"
              aria-hidden
              fill="none"
              stroke="currentColor"
              strokeWidth="0.6"
            >
              {[...Array(8)].map((_, i) => (
                <path
                  key={i}
                  d={`M ${10 + i * 3} 10 C ${40 + i * 4} ${50 + i * 6}, ${150 - i * 4} ${60 + i * 8}, ${190 - i * 3} ${190 - i * 4}`}
                />
              ))}
            </svg>
            <div className="absolute inset-8 flex items-center justify-center">
              <div className="relative flex h-full w-full items-center justify-center">
                <span className="absolute h-3 w-3 animate-ping rounded-full bg-moss/60" />
                <span className="relative h-3 w-3 rounded-full bg-moss ring-4 ring-offwhite/20" />
                <span className="absolute top-[calc(50%+12px)] whitespace-nowrap font-eyebrow text-xs uppercase tracking-wider text-offwhite">
                  Newburgh, NY
                </span>
              </div>
            </div>
            <span className="absolute left-6 top-6 font-eyebrow text-[10px] uppercase tracking-[0.2em] text-offwhite/50">
              41.5&deg;N, 74.0&deg;W
            </span>
            <span className="absolute bottom-6 right-6 font-eyebrow text-[10px] uppercase tracking-[0.2em] text-offwhite/50">
              Hudson Valley
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
