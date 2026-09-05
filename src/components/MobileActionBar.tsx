import { business } from "@/lib/business";

export default function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex md:hidden">
      <a
        href={business.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 bg-forest-dark py-3.5 font-eyebrow text-sm uppercase tracking-wider text-offwhite"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
        </svg>
        Call Now
      </a>
      <a
        href="#contact"
        className="flex flex-1 items-center justify-center gap-2 bg-moss py-3.5 font-eyebrow text-sm uppercase tracking-wider text-forest-dark"
      >
        Get Estimate
      </a>
    </div>
  );
}
