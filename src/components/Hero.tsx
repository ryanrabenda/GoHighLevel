import Image from "next/image";
import { business, images } from "@/lib/business";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-forest-dark md:min-h-screen"
    >
      <Image
        src={images.hero}
        alt="Arborist and ground crew safely removing a large limb from a mature oak tree at a Hudson Valley home"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/60 to-forest-dark/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 via-forest-dark/30 to-transparent" />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, transparent 0 40px, rgba(245,241,231,0.5) 40px 41px)",
        }}
      />

      <div className="container-tarzan relative z-10 py-32 md:py-40">
        <Reveal>
          <p className="font-eyebrow text-xs uppercase tracking-[0.25em] text-khaki sm:text-sm">
            Tree Service &bull; Land Clearing &bull; Landscaping
            <br className="sm:hidden" />
            <span className="sm:ml-2">Newburgh, NY</span>
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-5 font-display text-6xl font-bold uppercase leading-[0.95] text-offwhite text-balance sm:text-7xl md:text-8xl">
            Taming the{" "}
            <span className="text-moss [text-shadow:0_0_28px_rgba(108,124,58,0.55)]">
              Jungle
            </span>
            <br />
            in Your Yard.
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-offwhite/85 sm:text-lg">
            From hazardous tree removal and precision pruning to complete land
            clearing, landscaping, junk removal and stonework, {business.name}{" "}
            transforms unruly properties throughout the Hudson Valley.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-sm bg-moss px-8 py-4 text-center font-eyebrow text-sm uppercase tracking-wider text-forest-dark shadow-lg shadow-black/30 transition-transform hover:scale-[1.03] hover:bg-khaki"
            >
              Get a Free Estimate
            </a>
            <a
              href={business.phoneHref}
              className="rounded-sm border border-offwhite/40 px-8 py-4 text-center font-eyebrow text-sm uppercase tracking-wider text-offwhite transition-colors hover:border-khaki hover:text-khaki"
            >
              Call {business.phoneDisplay}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-eyebrow text-xs uppercase tracking-wider text-offwhite/70">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-moss" /> {business.yearsInBusiness} Years
              in the Hudson Valley
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-moss" /> Residential +
              Commercial
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-moss" /> Free
              Estimates
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
