import { images, business } from "@/lib/business";

// The icon mark only (no wordmark). No background box at all: only the
// source image's alpha shape is used as a mask, filled with solid gold.
// There is nothing behind it except whatever the header itself is doing
// at that moment, so it has no separate layer of its own to keep in sync
// through the header's transparent-to-solid scroll transition.
export default function Logo({ className = "" }: { className?: string }) {
  const maskImage = `url(${images.logo})`;

  return (
    <span
      role="img"
      aria-label={`${business.name} logo`}
      className={className}
      style={{
        display: "inline-block",
        aspectRatio: "3 / 4",
        backgroundColor: "var(--color-gold)",
        WebkitMaskImage: maskImage,
        maskImage,
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
  );
}
