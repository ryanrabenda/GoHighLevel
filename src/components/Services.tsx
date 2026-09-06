import Image from "next/image";
import { services, additionalServices } from "@/lib/business";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="bg-charcoal py-20 md:py-28">
      <div className="container-tarzan">
        <Reveal className="max-w-2xl">
          <p className="font-eyebrow text-xs uppercase tracking-[0.25em] text-khaki">
            What We Do
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-[1.02] text-offwhite text-balance sm:text-5xl">
            We tame more than trees.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-offwhite/70 sm:text-lg">
            One crew for the tough outdoor work your property needs.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.08}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-sm bg-forest-dark/40 ring-1 ring-offwhite/10 transition-shadow hover:ring-moss/60">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-transparent to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl font-bold uppercase text-offwhite">
                    {service.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-offwhite/70">
                    {service.summary}
                  </p>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-2 font-eyebrow text-xs uppercase tracking-wider text-khaki transition-colors group-hover:text-moss"
                  >
                    Explore {service.shortName}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-14 border-t border-offwhite/10 pt-8">
          <p className="font-eyebrow text-xs uppercase tracking-[0.2em] text-offwhite/50">
            Also Offering
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
            {additionalServices.map((item) => (
              <li
                key={item}
                className="rounded-full border border-offwhite/15 px-3.5 py-1.5 text-xs text-offwhite/70"
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
