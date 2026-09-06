import Image from "next/image";
import { company, images, story, trustPoints } from "@/lib/business";
import Reveal from "./Reveal";

export default function Story() {
  return (
    <section id="story" className="relative overflow-hidden bg-forest-deep py-24 md:py-32">
      <Image
        src={images.story}
        alt="Tree service crew standing together beside a truck and equipment on a Hudson Valley property"
        fill
        sizes="100vw"
        className="object-cover opacity-[0.16]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-deep via-forest-deep/95 to-forest-deep" />

      <div className="wrap relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-label text-xs font-semibold uppercase tracking-[0.25em] text-parchment/70">
            {story.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.1] text-cream text-balance sm:text-5xl">
            {story.heading}
          </h2>
        </Reveal>

        <div className="mx-auto mt-10 max-w-2xl space-y-5">
          {story.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.08 + i * 0.06}>
              <p className="text-center font-body text-lg leading-relaxed text-cream/80">{p}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mx-auto mt-14 max-w-4xl">
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-cream/15 pt-10 sm:grid-cols-4">
            {trustPoints.map((point) => (
              <div key={point.title} className="text-center">
                <p className="font-display text-2xl font-semibold text-parchment sm:text-3xl">
                  {point.title}
                </p>
                <p className="mt-1 font-label text-xs uppercase tracking-wide text-cream/60">
                  {point.copy}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.36} className="mt-14 text-center">
          <p className="font-display text-2xl italic text-gold sm:text-3xl">
            &ldquo;{company.tagline}&rdquo;
          </p>
        </Reveal>
      </div>
    </section>
  );
}
