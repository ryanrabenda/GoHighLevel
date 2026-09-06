import { company, services } from "@/lib/business";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-deep pb-24 pt-16 md:pb-16">
      <div className="wrap grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="inline-block rounded-lg bg-parchment px-3 py-2">
            <Logo className="h-12 w-auto" />
          </div>
          <p className="mt-4 font-body text-sm text-cream/60">
            {company.street}
            <br />
            {company.city}, {company.state} {company.zip}
          </p>
          <a
            href={company.phoneHref}
            className="mt-2 inline-block font-label text-sm font-semibold uppercase tracking-wide text-gold"
          >
            {company.phone}
          </a>
        </div>

        <div>
          <h3 className="font-label text-xs font-semibold uppercase tracking-[0.2em] text-cream/45">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2 font-body text-sm text-cream/70">
            <li><a href="#services" className="hover:text-gold">Services</a></li>
            <li><a href="#story" className="hover:text-gold">About</a></li>
            <li><a href="#gallery" className="hover:text-gold">Photos</a></li>
            <li><a href="#testimonials" className="hover:text-gold">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-gold">Request a Quote</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-label text-xs font-semibold uppercase tracking-[0.2em] text-cream/45">
            Services
          </h3>
          <ul className="mt-4 space-y-2 font-body text-sm text-cream/70">
            {services.map((s) => (
              <li key={s.id}>
                <a href="#services" className="hover:text-gold">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-label text-xs font-semibold uppercase tracking-[0.2em] text-cream/45">
            More
          </h3>
          <ul className="mt-4 space-y-2 font-body text-sm text-cream/70">
            <li>
              <a href={company.emergencyUrl} className="hover:text-gold">
                Demolition &amp; Emergency Services
              </a>
            </li>
            <li>
              <a
                href={`mailto:${company.email}?subject=${encodeURIComponent("Referral to Tarzan Treescaping")}`}
                className="hover:text-gold"
              >
                Refer a Friend
              </a>
            </li>
          </ul>
          <p className="mt-6 font-display text-lg font-semibold italic text-parchment">
            {company.tagline}
          </p>
        </div>
      </div>

      <div className="wrap mt-12 border-t border-cream/10 pt-6">
        <p className="text-xs text-cream/40">
          &copy; {year} {company.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
