import { business, services } from "@/lib/business";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-dark pb-24 pt-16 md:pb-16">
      <div className="container-tarzan grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo className="h-14 w-auto" />
          <p className="mt-4 text-sm text-offwhite/60">
            {business.streetAddress}
            <br />
            {business.addressLocality}, {business.addressRegion}
          </p>
          <a
            href={business.phoneHref}
            className="mt-2 inline-block font-eyebrow text-sm uppercase tracking-wide text-khaki"
          >
            {business.phoneDisplay}
          </a>
        </div>

        <div>
          <h3 className="font-eyebrow text-xs uppercase tracking-[0.2em] text-offwhite/50">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-offwhite/70">
            <li><a href="#services" className="hover:text-khaki">Services</a></li>
            <li><a href="#about" className="hover:text-khaki">About</a></li>
            <li><a href="#work" className="hover:text-khaki">Our Work</a></li>
            <li><a href="#reviews" className="hover:text-khaki">Reviews</a></li>
            <li><a href="#contact" className="hover:text-khaki">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-eyebrow text-xs uppercase tracking-[0.2em] text-offwhite/50">
            Services
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-offwhite/70">
            {services.map((s) => (
              <li key={s.id}>
                <a href="#services" className="hover:text-khaki">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-eyebrow text-xs uppercase tracking-[0.2em] text-offwhite/50">
            More
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-offwhite/70">
            <li>
              <a href={business.specialServicesUrl} className="hover:text-khaki">
                Demolition &amp; Emergency Services
              </a>
            </li>
          </ul>
          <p className="mt-6 font-display text-lg font-bold uppercase text-moss">
            {business.tagline}
          </p>
        </div>
      </div>

      <div className="container-tarzan mt-12 border-t border-offwhite/10 pt-6">
        <p className="text-xs text-offwhite/40">
          &copy; {year} {business.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
