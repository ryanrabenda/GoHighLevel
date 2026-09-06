import Image from "next/image";
import { business, images } from "@/lib/business";
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
            {business.name} has proudly served the Hudson Valley for{" "}
            {business.yearsInBusiness} years. We work closely with every
            client to bring their ideas to life, using a white-glove approach
            that makes the lightest impact on your property and environment —
            treating every property as if it were our own.
          </p>
          <p className="mt-4 text-base leading-relaxed text-offwhite/75 sm:text-lg">
            We work with trained horticulturalists and arborists to advise on
            the right trees and materials, and with local suppliers we&rsquo;ve
            partnered with for years to keep costs down without cutting
            corners — on residential and commercial properties alike.
          </p>
          <p className="mt-4 text-sm font-medium uppercase tracking-wide text-khaki/90">
            {business.license}
          </p>
          <p className="mt-8 font-display text-2xl font-bold uppercase text-moss">
            &ldquo;{business.tagline}&rdquo;
          </p>
        </Reveal>
      </div>
    </section>
  );
}
