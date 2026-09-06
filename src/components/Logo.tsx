import { images, business } from "@/lib/business";

// No background box at all: only the source image's alpha shape (real,
// unaltered outline of the icon and wordmark) is used as a mask, filled
// with solid gold. There is nothing behind the letters except whatever
// the header itself is doing at that moment — so as the header fades
// between its transparent and solid states on scroll, the logo has no
// separate layer of its own to keep in sync; it's already part of it.
export default function Logo({ className = "" }: { className?: string }) {
  const maskImage = `url(${images.logo})`;

  return (
    <span
      role="img"
      aria-label={`${business.name} logo`}
      className={className}
      style={{
        display: "inline-block",
        aspectRatio: "2000 / 876",
        backgroundColor: "var(--color-gold)",
        WebkitMaskImage: maskImage,
        maskImage,
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "left center",
        maskPosition: "left center",
      }}
    />
  );
}
