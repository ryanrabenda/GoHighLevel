import Image from "next/image";
import { images } from "@/lib/business";
import Reveal from "./Reveal";

export default function Equipment() {
  return (
    <section className="relative overflow-hidden bg-forest-dark py-24 md:py-32">
      <Image
        src={images.equipment}
        alt="Professional tree service equipment including a bucket truck, wood chipper and arborist rigging staged in a driveway"
        fill
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-dark via-forest-dark/85 to-forest-dark/40" />

      <div className="container-tarzan relative">
        <Reveal className="max-w-xl">
          <p className="font-eyebrow text-xs uppercase tracking-[0.25em] text-khaki">
            Capability
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-[0.98] text-offwhite text-balance sm:text-5xl">
            Right crew.
            <br />
            Right tools.
            <br />
            <span className="text-moss">Tough job? Bring it on.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-offwhite/75 sm:text-lg">
            Tree work demands the right equipment, planning and experience.
            Tarzan Treescaping takes on demanding outdoor projects with a
            practical, job-specific approach.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
