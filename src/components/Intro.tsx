"use client";

import Image from "next/image";
import { useState } from "react";
import { images } from "@/lib/business";
import Reveal from "./Reveal";

export default function Intro() {
  const [reveal, setReveal] = useState(50);

  return (
    <section className="bg-offwhite py-20 md:py-28">
      <div className="container-tarzan grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <h2 className="font-display text-4xl font-bold uppercase leading-[1.02] text-forest-dark text-balance sm:text-5xl">
            When your yard starts looking like a jungle,{" "}
            <span className="text-moss">call Tarzan.</span>
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-charcoal/80 sm:text-lg">
            {"Tarzan Treescaping helps Hudson Valley homeowners and property owners reclaim, clean up and transform outdoor spaces — from individual trees to entire properties."}
          </p>
          <div className="mt-6 h-px w-24 bg-moss" />
          <p className="mt-6 max-w-lg font-eyebrow text-sm uppercase tracking-wide text-charcoal/60">
            Overgrown? We&rsquo;ll handle it.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div
            className="group relative aspect-[4/3] w-full select-none overflow-hidden rounded-sm shadow-2xl shadow-forest-dark/20"
            role="group"
            aria-label="Illustrative before and after transformation slider"
          >
            <Image
              src={images.introBefore}
              alt="Illustrative overgrown, neglected Hudson Valley yard before treescaping"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${reveal}%` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={images.introAfter}
                alt="Illustrative same property after clearing, pruning, cleanup and landscaping"
                className="absolute inset-0 h-full object-cover"
                style={{ width: `${(100 / Math.max(reveal, 1)) * 100}%`, maxWidth: "none" }}
              />
            </div>

            <div
              className="absolute inset-y-0 z-10 w-1 -translate-x-1/2 bg-offwhite shadow-[0_0_0_1px_rgba(0,0,0,0.15)]"
              style={{ left: `${reveal}%` }}
            >
              <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-offwhite shadow-lg">
                <svg viewBox="0 0 24 24" fill="none" stroke="#102e22" strokeWidth="2" className="h-4 w-4">
                  <path d="M8 6 3 12l5 6M16 6l5 6-5 6" />
                </svg>
              </div>
            </div>

            <input
              type="range"
              min={0}
              max={100}
              value={reveal}
              onChange={(e) => setReveal(Number(e.target.value))}
              aria-label="Drag to reveal after image"
              className="absolute inset-0 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0"
            />

            <span className="pointer-events-none absolute left-3 top-3 rounded-sm bg-forest-dark/80 px-2.5 py-1 font-eyebrow text-[10px] uppercase tracking-wider text-offwhite">
              Before
            </span>
            <span className="pointer-events-none absolute right-3 top-3 rounded-sm bg-moss/90 px-2.5 py-1 font-eyebrow text-[10px] uppercase tracking-wider text-forest-dark">
              After
            </span>
          </div>
          <p className="mt-3 text-xs text-charcoal/50">
            Illustrative transformation imagery, not an actual job site.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
