import Reveal from "./Reveal";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="bg-forest-dark py-20 md:py-28">
      <div className="container-tarzan grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="font-eyebrow text-xs uppercase tracking-[0.25em] text-khaki">
            Get Started
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-[1.02] text-offwhite text-balance sm:text-5xl">
            Ready to tame your jungle?
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-offwhite/75 sm:text-lg">
            Tell us what your property needs and request a free estimate.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
