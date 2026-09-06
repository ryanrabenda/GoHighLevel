import Image from "next/image";
import { images, business } from "@/lib/business";

// The real Tarzan Treescaping logo, extracted directly from the archived
// site (icon + wordmark + tagline, original dark-green/oxblood colors,
// unmodified) and upscaled for crisp rendering. The original site set it
// on a warm parchment background (#ddc490) — reproduced here as a backing
// chip so the unrecolored artwork stays legible on this site's dark
// header and footer, exactly as it read on the original.
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-sm bg-parchment px-3 py-1.5 shadow-sm ${className}`}
    >
      <Image
        src={images.logo}
        alt={`${business.name} — ${business.tagline}`}
        width={1212}
        height={292}
        priority
        className="h-full w-auto object-contain"
      />
    </span>
  );
}
