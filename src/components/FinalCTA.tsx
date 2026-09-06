import Image from "next/image";
import { business, images } from "@/lib/business";
import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <Image
        src={images.treescaping.transform}
        alt="Finished, healthy Hudson Valley property"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-forest-dark/70" />

      <div className="container-tarzan relative flex flex-col items-center gap-8 text-center">
        <Reveal>
          <h2 className="font-display text-4xl font-bold uppercase leading-[1.02] text-offwhite text-balance sm:text-5xl md:text-6xl">
            Your yard doesn&rsquo;t have to
            <br /> stay a jungle.
          </h2>
          <p className="mt-4 font-eyebrow text-sm uppercase tracking-[0.2em] text-khaki">
            {business.tagline}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-sm bg-moss px-8 py-4 font-eyebrow text-sm uppercase tracking-wider text-forest-dark transition-transform hover:scale-[1.03] hover:bg-khaki"
            >
              Get a Free Estimate
            </a>
            <a
              href={business.phoneHref}
              className="rounded-sm border border-offwhite/50 px-8 py-4 font-eyebrow text-sm uppercase tracking-wider text-offwhite hover:border-khaki hover:text-khaki"
            >
              Call Now
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
