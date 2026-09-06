import Image from "next/image";
import { services, moreServices } from "@/lib/business";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="bg-cream py-24 md:py-32">
      <div className="wrap">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-label text-xs font-semibold uppercase tracking-[0.25em] text-oxblood">
            What We Do
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] text-forest text-balance sm:text-5xl">
            Six ways we bring a property back under control.
          </h2>
        </Reveal>

        <div className="mt-16 divide-y divide-forest/10">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.05}>
              <div
                className={`grid items-center gap-8 py-10 md:grid-cols-2 md:gap-14 md:py-14 ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <span className="font-display text-6xl font-semibold text-parchment sm:text-7xl">
                    {service.number}
                  </span>
                  <h3 className="mt-2 font-display text-3xl font-semibold text-forest sm:text-4xl">
                    {service.name}
                  </h3>
                  <p className="mt-4 max-w-md font-body text-base leading-relaxed text-charcoal/75 sm:text-lg">
                    {service.summary}
                  </p>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-2 font-label text-sm font-semibold uppercase tracking-wide text-oxblood hover:text-forest"
                  >
                    Get a quote for {service.name.toLowerCase()}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </a>
                </div>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mx-auto mt-16 max-w-3xl rounded-2xl border border-forest/15 bg-parchment-light/60 px-6 py-8 text-center sm:px-10">
          <p className="font-label text-xs font-semibold uppercase tracking-[0.2em] text-forest/70">
            Also Offering
          </p>
          <ul className="mt-4 flex flex-wrap justify-center gap-x-3 gap-y-2">
            {moreServices.map((item) => (
              <li
                key={item}
                className="rounded-full border border-forest/20 bg-cream px-3.5 py-1.5 text-xs text-charcoal/75"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
