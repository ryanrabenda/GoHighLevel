import Reveal from "./Reveal";

const points = [
  {
    title: "Property-first approach",
    copy: "We treat every property as if it were our own.",
    icon: (
      <path d="M3 12 12 4l9 8M5 10v10h14V10M9 20v-6h6v6" />
    ),
  },
  {
    title: "Tree-service capability",
    copy: "Tree removal and pruning are at the core of the business.",
    icon: <path d="M12 2v20M12 2c-3 3-4 6-4 9s1 5 4 6c3-1 4-3 4-6s-1-6-4-9Z" />,
  },
  {
    title: "From cleanup to transformation",
    copy: "Handle more than the tree itself.",
    icon: <path d="M4 20h16M6 20V10l6-6 6 6v10M9 20v-5h6v5" />,
  },
  {
    title: "Residential + commercial",
    copy: "Work for homeowners and property owners.",
    icon: <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6M9 11h.01M15 11h.01M9 7h.01M15 7h.01" />,
  },
  {
    title: "Local Hudson Valley service",
    copy: "Based in Newburgh and serving the surrounding region.",
    icon: <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />,
  },
  {
    title: "Free estimates",
    copy: "Make getting started easy.",
    icon: <path d="M9 11l3 3L22 4M2 12l3 3 3-3M2 12a10 10 0 1 0 4-8" />,
  },
];

export default function WhyTarzan() {
  return (
    <section className="bg-offwhite py-20 md:py-28">
      <div className="container-tarzan">
        <Reveal className="max-w-2xl">
          <p className="font-eyebrow text-xs uppercase tracking-[0.25em] text-oxblood">
            Why Tarzan
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-[1.02] text-forest-dark text-balance sm:text-5xl">
            Built for the tough jobs.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point, i) => (
            <Reveal key={point.title} delay={i * 0.06}>
              <div className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest-deep/10 text-forest-deep">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    {point.icon}
                  </svg>
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold uppercase text-forest-dark">
                    {point.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-charcoal/70">
                    {point.copy}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
