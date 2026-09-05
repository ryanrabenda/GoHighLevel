"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { business } from "@/lib/business";
import Logo from "./Logo";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Our Work" },
  { href: "#reviews", label: "Reviews" },
  { href: "#service-area", label: "Service Area" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-forest-dark/95 backdrop-blur-sm shadow-lg shadow-black/20"
          : "bg-gradient-to-b from-forest-dark/80 to-transparent"
      }`}
    >
      <div className="container-tarzan flex h-16 items-center justify-between md:h-20">
        <Link href="#top" className="flex items-center gap-2" aria-label={`${business.name} home`}>
          <Logo className="h-11 w-auto md:h-14" />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-eyebrow text-sm uppercase tracking-wide text-offwhite/85 transition-colors hover:text-khaki"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={business.phoneHref}
            className="font-eyebrow text-sm uppercase tracking-wide text-offwhite/90 hover:text-khaki"
          >
            {business.phoneDisplay}
          </a>
          <a
            href="#contact"
            className="rounded-sm bg-moss px-5 py-2.5 font-eyebrow text-sm uppercase tracking-wider text-forest-dark transition-colors hover:bg-khaki"
          >
            Get a Free Estimate
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-sm text-offwhite lg:hidden"
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
      </div>

      <div
        id="mobile-nav"
        className={`fixed inset-x-0 top-16 z-40 origin-top bg-forest-dark transition-transform duration-300 lg:hidden ${
          menuOpen ? "scale-y-100" : "pointer-events-none scale-y-0"
        }`}
      >
        <nav aria-label="Mobile" className="container-tarzan flex flex-col gap-1 py-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-offwhite/10 py-3 font-eyebrow text-base uppercase tracking-wide text-offwhite/90"
            >
              {link.label}
            </a>
          ))}
          <a
            href={business.phoneHref}
            className="mt-4 py-2 font-eyebrow text-base uppercase tracking-wide text-khaki"
          >
            Call {business.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}
