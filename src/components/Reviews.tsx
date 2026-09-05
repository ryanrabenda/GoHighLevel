import Reveal from "./Reveal";

const themes = [
  "Reasonable pricing",
  "Reliable scheduling",
  "Professional crew",
  "Thorough cleanup",
  "Responsive communication",
  "Knowledgeable tree work",
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-offwhite py-20 md:py-28">
      <div className="container-tarzan">
        <Reveal className="max-w-2xl">
          <p className="font-eyebrow text-xs uppercase tracking-[0.25em] text-oxblood">
            Reviews
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-[1.02] text-forest-dark text-balance sm:text-5xl">
            Hudson Valley property owners have seen the difference.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-charcoal/75 sm:text-lg">
            Feedback from past customers consistently mentions a few things:
            fair pricing, dependable scheduling and a crew that leaves the
            property cleaner than they found it.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {themes.map((theme, i) => (
            <Reveal key={theme} delay={i * 0.05}>
              <div className="flex h-full flex-col justify-between gap-6 rounded-sm border border-stone/30 bg-white/50 p-6">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-7 w-7 text-moss"
                  aria-hidden
                >
                  <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6.83v-6.83H4.83c0-1.29 1.04-2.34 2.34-2.34V6Zm10 0A5.17 5.17 0 0 0 12 11.17V18h6.83v-6.83h-4a2.34 2.34 0 0 1 2.34-2.34V6Z" />
                </svg>
                <p className="font-display text-xl font-semibold uppercase tracking-wide text-forest-dark">
                  {theme}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col items-start gap-4 rounded-sm bg-forest-deep px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-eyebrow text-sm uppercase tracking-wide text-offwhite/85">
              See what customers are saying on Google.
            </p>
            <a
              href="https://www.google.com/search?q=Tarzan+Treescaping+Newburgh+NY+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap rounded-sm bg-khaki px-6 py-3 font-eyebrow text-xs uppercase tracking-wider text-forest-dark transition-colors hover:bg-moss"
            >
              Read Our Reviews
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
