import { images, business } from "@/lib/business";

// The logo file has its own flat background baked in, so its rectangular
// edge doesn't participate in the header's scroll transition (transparent
// gradient over the hero -> solid dark bar). A soft edge mask feathers
// that boundary to transparent on all sides so the box blends into
// whatever is behind it at any point in the transition, without touching
// the image file itself.
export default function Logo({ className = "" }: { className?: string }) {
  const feather =
    "linear-gradient(to right, transparent, black 6%, black 94%, transparent), " +
    "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)";

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={images.logo}
      alt={`${business.name} logo`}
      className={className}
      style={{
        WebkitMaskImage: feather,
        maskImage: feather,
        WebkitMaskComposite: "source-in, source-over",
        maskComposite: "intersect",
        WebkitMaskSize: "100% 100%",
        maskSize: "100% 100%",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
      }}
    />
  );
}
