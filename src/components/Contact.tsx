import { company } from "@/lib/business";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="bg-forest py-24 md:py-32">
      <div className="wrap grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <p className="font-label text-xs font-semibold uppercase tracking-[0.25em] text-parchment/70">
            Request a Quote
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] text-cream text-balance sm:text-5xl">
            Let&rsquo;s talk about your property.
          </h2>
          <p className="mt-5 max-w-md font-body text-lg leading-relaxed text-cream/75">
            Tell us what you need and we&rsquo;ll get back to you with a free
            estimate.
          </p>
          <div className="mt-8 space-y-2 font-body text-cream/80">
            <p>{company.street}</p>
            <p>
              {company.city}, {company.state} {company.zip}
            </p>
            <a href={company.phoneHref} className="block font-display text-2xl font-semibold text-gold">
              {company.phone}
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
