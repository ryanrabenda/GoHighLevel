import { images, business } from "@/lib/business";

// The source cutout has red/yellow JPEG compression noise baked into the
// edge pixels (chroma subsampling artifacts along the letterforms), which
// a plain image render still shows. A CSS mask sidesteps this: only the
// image's alpha shape is used as a stencil, filled with a single flat
// gold color, so the contaminated RGB values at the edges are never
// actually painted.
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
