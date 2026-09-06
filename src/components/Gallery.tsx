import Image from "next/image";
import { gallery } from "@/lib/business";
import Reveal from "./Reveal";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream py-24 md:py-32">
      <div className="wrap">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-label text-xs font-semibold uppercase tracking-[0.25em] text-oxblood">
              Photos
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] text-forest text-balance sm:text-5xl">
              Recent work around the valley.
            </h2>
          </div>
          <p className="font-body text-sm text-charcoal/60">Scroll to see more &rarr;</p>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="mt-10 flex gap-4 overflow-x-auto pb-4 pl-5 pr-5 [scrollbar-width:thin] sm:pl-8 sm:pr-8 lg:pl-[max(2rem,calc((100vw-84rem)/2+2rem))]">
          {gallery.map((item) => (
            <figure
              key={item.id}
              className="group relative h-72 w-56 shrink-0 overflow-hidden rounded-2xl sm:h-80 sm:w-64"
            >
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="256px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 font-label text-xs font-medium uppercase tracking-wide text-cream">
                {item.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
