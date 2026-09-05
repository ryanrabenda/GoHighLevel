"use client";

import Image from "next/image";
import { useState } from "react";
import { portfolio, type PortfolioItem } from "@/lib/business";
import Reveal from "./Reveal";

const filters: { id: PortfolioItem["category"] | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "tree-work", label: "Tree Work" },
  { id: "land-clearing", label: "Land Clearing" },
  { id: "landscaping", label: "Landscaping" },
  { id: "stonework", label: "Stonework" },
  { id: "cleanups", label: "Cleanups" },
];

export default function Portfolio() {
  const [active, setActive] = useState<(typeof filters)[number]["id"]>("all");

  const items =
    active === "all" ? portfolio : portfolio.filter((p) => p.category === active);

  return (
    <section id="work" className="bg-charcoal py-20 md:py-28">
      <div className="container-tarzan">
        <Reveal className="max-w-2xl">
          <p className="font-eyebrow text-xs uppercase tracking-[0.25em] text-khaki">
            Our Work
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-[1.02] text-offwhite text-balance sm:text-5xl">
            From jungle to job done.
          </h2>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter portfolio by category">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={active === f.id}
              onClick={() => setActive(f.id)}
              className={`rounded-full border px-4 py-2 font-eyebrow text-xs uppercase tracking-wider transition-colors ${
                active === f.id
                  ? "border-moss bg-moss text-forest-dark"
                  : "border-offwhite/25 text-offwhite/70 hover:border-khaki hover:text-khaki"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {items.map((item) => (
            <div key={item.id} className="mb-4 break-inside-avoid">
              <div
                className={`group relative overflow-hidden rounded-sm ring-1 ring-offwhite/10 ${
                  item.orientation === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <p className="absolute bottom-3 left-4 font-eyebrow text-sm uppercase tracking-wide text-offwhite opacity-0 transition-opacity group-hover:opacity-100">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
