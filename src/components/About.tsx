import Image from "next/image";
import { images } from "@/lib/business";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="bg-forest-deep py-20 md:py-28">
      <div className="container-tarzan grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal className="relative aspect-[4/3] overflow-hidden rounded-sm ring-1 ring-offwhite/10 lg:order-2">
          <Image
            src={images.about}
            alt="Tree service crew standing together beside a truck and equipment on a Hudson Valley property"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </Reveal>

        <Reveal className="lg:order-1">
          <p className="font-eyebrow text-xs uppercase tracking-[0.25em] text-khaki">
            About
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-[1.02] text-offwhite text-balance sm:text-5xl">
            Local work. Personal attention. No cookie-cutter yards.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-offwhite/75 sm:text-lg">
            Tarzan Treescaping is based in Newburgh and works throughout the
            Hudson Valley, helping property owners tackle tree work,
            overgrowth, cleanup and outdoor improvement projects of all sizes.
          </p>
          <p className="mt-4 text-base leading-relaxed text-offwhite/75 sm:text-lg">
            Every property is different. The goal is simple: understand what
            the owner wants, determine the practical way to get there, and
            leave the property looking better than we found it.
          </p>
          <p className="mt-8 font-display text-2xl font-bold uppercase text-moss">
            &ldquo;Taming the Jungle in Your Yard.&rdquo;
          </p>
        </Reveal>
      </div>
    </section>
  );
}
