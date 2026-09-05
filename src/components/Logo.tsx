import { images, business } from "@/lib/business";

// Uses the original logo's alpha shape (real, unaltered shapes and font)
// as a CSS mask, filled with a single flat gold color. Only the alpha
// channel of the source image is ever used — its original RGB pixels
// (and any noise in them) are never rendered.
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
