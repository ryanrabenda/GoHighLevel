import Image from "next/image";
import { company, images } from "@/lib/business";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="bg-cream">
      <div className="grid lg:grid-cols-[1.05fr_1fr]">
        <div className="flex flex-col justify-center px-5 py-16 sm:px-8 sm:py-20 lg:py-28 lg:pl-8 lg:pr-14 xl:pl-16">
          <Reveal>
            <p className="font-label text-xs font-semibold uppercase tracking-[0.25em] text-oxblood">
              {company.region} &middot; Newburgh, NY
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.04] text-forest text-balance sm:text-6xl xl:text-7xl">
              {company.tagline}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-lg font-body text-lg leading-relaxed text-charcoal/80">
              Tree removal, pruning, land clearing, landscaping, junk removal
              and stonework for homes and businesses throughout the Hudson
              Valley — done by a crew that treats every property as if it
              were their own.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-forest px-7 py-3.5 text-center font-label text-sm font-semibold uppercase tracking-wide text-cream transition-colors hover:bg-oxblood"
              >
                Request a Free Quote
              </a>
              <a
                href={company.phoneHref}
                className="rounded-full border border-forest/30 px-7 py-3.5 text-center font-label text-sm font-semibold uppercase tracking-wide text-forest transition-colors hover:border-oxblood hover:text-oxblood"
              >
                Call {company.phone}
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <p className="mt-8 font-label text-xs uppercase tracking-[0.2em] text-stone">
              {company.yearsInBusiness} years in the Hudson Valley &middot; Residential
              &amp; commercial &middot; Free estimates
            </p>
          </Reveal>
        </div>

        <div className="relative h-[46vh] lg:h-auto">
          <Image
            src={images.hero}
            alt="Arborist and ground crew safely removing a large limb from a mature oak tree at a Hudson Valley home"
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-deep/30 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-cream/10" />
        </div>
      </div>
    </section>
  );
}
