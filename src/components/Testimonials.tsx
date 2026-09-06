import { company, testimonialThemes } from "@/lib/business";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-parchment-light py-24 md:py-32">
      <div className="wrap">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-label text-xs font-semibold uppercase tracking-[0.25em] text-oxblood">
            Testimonials
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] text-forest text-balance sm:text-5xl">
            What Hudson Valley property owners say.
          </h2>
          <p className="mt-5 font-body text-lg text-charcoal/75">
            {company.googleRating ? (
              <>
                Rated {company.googleRating} on Google from {company.googleReviewCount} reviews.
              </>
            ) : (
              <>The same handful of things come up again and again:</>
            )}
          </p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl gap-x-10 gap-y-8 sm:grid-cols-2">
          {testimonialThemes.map((theme, i) => (
            <Reveal key={theme} delay={i * 0.05}>
              <div className="flex items-start gap-4">
                <span className="mt-1 font-display text-3xl leading-none text-gold">&ldquo;</span>
                <p className="font-display text-xl font-medium leading-snug text-forest">{theme}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mx-auto mt-16 flex max-w-3xl flex-col items-center gap-4 rounded-2xl bg-forest px-8 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="font-label text-sm font-medium uppercase tracking-wide text-cream/90">
            See what customers are saying on Google.
          </p>
          <a
            href={company.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap rounded-full bg-gold px-6 py-3 font-label text-xs font-semibold uppercase tracking-wider text-charcoal transition-colors hover:bg-parchment"
          >
            Read Our Reviews
          </a>
        </Reveal>
      </div>
    </section>
  );
}
