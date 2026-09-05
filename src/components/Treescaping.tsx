import Image from "next/image";
import { images } from "@/lib/business";
import Reveal from "./Reveal";

const stages = [
  {
    word: "Tree",
    copy: "It starts with the tree itself — climbed, assessed and handled by hand.",
    image: images.treescaping.tree,
    alt: "Arborist working high in a mature tree canopy",
  },
  {
    word: "Clear",
    copy: "Overgrowth, brush and unwanted trees are opened up and taken down.",
    image: images.treescaping.clear,
    alt: "Land clearing equipment opening up a dense overgrown lot",
  },
  {
    word: "Clean",
    copy: "Debris, limbs and brush are hauled out so nothing is left behind.",
    image: images.treescaping.clean,
    alt: "Crew feeding cut branches into a wood chipper",
  },
  {
    word: "Transform",
    copy: "What's left is a usable, landscaped property you can actually enjoy.",
    image: images.treescaping.transform,
    alt: "Finished, manicured Hudson Valley property",
  },
];

export default function Treescaping() {
  return (
    <section className="bg-forest-deep py-20 md:py-28">
      <div className="container-tarzan">
        <Reveal className="max-w-2xl">
          <p className="font-eyebrow text-xs uppercase tracking-[0.25em] text-khaki">
            The Tarzan Difference
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-[1.02] text-offwhite text-balance sm:text-5xl">
            This is treescaping.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-offwhite/75 sm:text-lg">
            Some properties need more than landscaping. Tarzan Treescaping
            combines tree work, clearing, cleanup and landscape transformation
            to bring difficult outdoor spaces back under control.
          </p>
        </Reveal>

        <div className="relative mt-14">
          <div
            aria-hidden
            className="rope-divider absolute left-0 right-0 top-1/2 hidden -translate-y-1/2 text-khaki lg:block"
          />
          <div className="grid gap-6 lg:grid-cols-4 lg:gap-5">
            {stages.map((stage, i) => (
              <Reveal key={stage.word} delay={i * 0.1}>
                <div className="group relative flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm ring-1 ring-offwhite/10">
                    <Image
                      src={stage.image}
                      alt={stage.alt}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/95 via-forest-dark/10 to-transparent" />
                    <span className="absolute bottom-3 left-4 font-display text-3xl font-bold uppercase text-offwhite">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-3xl font-bold uppercase text-moss">
                    {stage.word}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-offwhite/70">
                    {stage.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
