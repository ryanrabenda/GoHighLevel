"use client";

import { useEffect, useState } from "react";
import { company } from "@/lib/business";
import Logo from "./Logo";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#story", label: "About" },
  { href: "#gallery", label: "Photos" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#service-area", label: "Area" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility strip — echoes the small top row on the original site */}
      <div className="hidden bg-forest-deep text-cream/80 md:block">
        <div className="wrap flex h-9 items-center justify-between text-xs tracking-wide">
          <span className="font-label uppercase tracking-[0.15em]">
            {company.region} Tree &amp; Property Service
          </span>
          <a href={`mailto:${company.email}`} className="font-label hover:text-gold">
            {company.email}
          </a>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`bg-parchment transition-shadow duration-300 ${
          scrolled ? "shadow-[0_6px_18px_rgba(34,28,21,0.18)]" : ""
        }`}
      >
        <div className="wrap grid h-16 grid-cols-[auto_1fr_auto] items-center md:h-[4.5rem] lg:grid-cols-[1fr_auto_1fr]">
          <nav aria-label="Primary" className="hidden items-center gap-5 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-label text-sm font-medium uppercase tracking-wide text-forest transition-colors hover:text-oxblood"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#top"
            aria-label={`${company.name} home`}
            className="col-start-2 shrink-0 justify-self-center lg:col-start-2"
          >
            <Logo className="h-10 w-auto md:h-12" />
          </a>

          <div className="col-start-3 hidden items-center justify-end gap-3 lg:flex xl:gap-4">
            <a
              href={company.phoneHref}
              className="whitespace-nowrap font-display text-base font-semibold text-forest hover:text-oxblood xl:text-lg"
            >
              {company.phone}
            </a>
            <a
              href="#contact"
              className="whitespace-nowrap rounded-full bg-forest px-4 py-2.5 font-label text-sm font-semibold uppercase tracking-wide text-cream transition-colors hover:bg-oxblood xl:px-5"
            >
              Request a Quote
            </a>
          </div>

          <button
            type="button"
            className="col-start-3 flex h-10 w-10 items-center justify-center justify-self-end text-forest lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="relative block h-4 w-6">
              <span
                className={`absolute left-0 top-0 h-0.5 w-6 bg-current transition-transform ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-6 bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-6 bg-current transition-transform ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </span>
          </button>
          <span className="col-start-1 w-10 lg:hidden" aria-hidden />
        </div>
      </div>

      {/* Full-screen mobile overlay menu */}
      <div
        id="mobile-nav"
        className={`fixed inset-0 top-16 z-40 bg-forest transition-opacity duration-300 lg:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="wrap flex h-full flex-col justify-center gap-2 pb-24">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-3xl font-semibold text-cream/95 py-2"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-8 flex flex-col gap-3">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-gold px-6 py-3.5 text-center font-label text-sm font-semibold uppercase tracking-wide text-charcoal"
            >
              Request a Quote
            </a>
            <a
              href={company.phoneHref}
              className="text-center font-display text-2xl font-semibold text-parchment"
            >
              Call {company.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
