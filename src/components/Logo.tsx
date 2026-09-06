import Image from "next/image";
import { images, company } from "@/lib/business";

// The real Tarzan Treescaping logo, extracted from the archived site
// (icon + wordmark + tagline, original colors, unmodified). This site's
// header and footer are the same parchment tone the logo was originally
// designed to sit on, so it renders directly with no backing chip needed.
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src={images.logo}
      alt={`${company.name} — ${company.tagline}`}
      width={1212}
      height={292}
      priority
      className={`object-contain ${className}`}
    />
  );
}
