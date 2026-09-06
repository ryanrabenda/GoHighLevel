import Image from "next/image";
import { business, images } from "@/lib/business";
import Reveal from "./Reveal";

export default function SpecialServicesCTA() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-20 md:py-24">
      <Image
        src={images.demolition}
        alt="Storm-damaged tree cleanup crew responding to a fallen tree on a residential lawn"
        fill
        sizes="100vw"
        className="object-cover opacity-25 grayscale"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/60" />

      <div className="container-tarzan relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
        <Reveal>
          <p className="font-eyebrow text-xs uppercase tracking-[0.25em] text-amber">
            Beyond Treescaping
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-[1.05] text-offwhite text-balance sm:text-4xl">
            Looking for demolition or emergency services?
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-offwhite/70 sm:text-base">
            For demolition projects and specialized emergency-service
            requests, visit our dedicated service site.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <a
            href={business.specialServicesUrl}
            className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-sm border border-amber px-7 py-4 font-eyebrow text-sm uppercase tracking-wider text-amber transition-colors hover:bg-amber hover:text-charcoal"
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
