import { images, business } from "@/lib/business";

// Recolors the original clean logo cutout to solid gold using a CSS mask,
// instead of an AI recolor pass — the alpha shape (and its crisp text
// edges) comes straight from the source image, untouched.
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
