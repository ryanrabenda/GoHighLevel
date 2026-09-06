import Image from "next/image";
import { images, process } from "@/lib/business";
import Reveal from "./Reveal";

const stageImages = [images.process.assess, images.process.clear, images.process.clean, images.process.transform];

export default function Process() {
  return (
    <section id="process" className="bg-forest py-24 md:py-32">
      <div className="wrap">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-label text-xs font-semibold uppercase tracking-[0.25em] text-parchment/70">
            How We Work
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] text-cream text-balance sm:text-5xl">
            From overgrown to under control.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((stage, i) => (
            <Reveal key={stage.word} delay={i * 0.1}>
              <div className="relative">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image
                    src={stageImages[i]}
                    alt={stage.word}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/10 to-transparent" />
                  <span className="absolute left-4 top-4 font-display text-2xl italic text-parchment/80">
                    {stage.step}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold text-cream">{stage.word}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-cream/70">{stage.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
