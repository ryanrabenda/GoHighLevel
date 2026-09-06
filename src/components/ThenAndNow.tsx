import Image from "next/image";
import { images } from "@/lib/business";
import Reveal from "./Reveal";

export default function ThenAndNow() {
  return (
    <section className="bg-parchment-light py-20 md:py-24">
      <div className="wrap">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="font-label text-xs font-semibold uppercase tracking-[0.25em] text-oxblood">
            Then &amp; Now
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.1] text-forest text-balance sm:text-4xl">
            Same property. One visit from Tarzan.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={images.introBefore}
              alt="Illustrative overgrown, neglected Hudson Valley yard before treescaping"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
            <span className="absolute left-4 top-4 rounded-full bg-charcoal/80 px-3 py-1 font-label text-[11px] font-semibold uppercase tracking-wide text-cream">
              Before
            </span>
          </Reveal>
          <Reveal delay={0.1} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={images.introAfter}
              alt="Illustrative same property after clearing, pruning, cleanup and landscaping"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
            <span className="absolute left-4 top-4 rounded-full bg-forest/90 px-3 py-1 font-label text-[11px] font-semibold uppercase tracking-wide text-cream">
              After
            </span>
          </Reveal>
        </div>
        <p className="mt-3 text-center text-xs text-charcoal/45">
          Illustrative transformation imagery, not an actual job site.
        </p>
      </div>
    </section>
  );
}
