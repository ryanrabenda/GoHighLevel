import { images, business } from "@/lib/business";

// Plain <img>, not next/image: no resizing, no format conversion, no
// quality/compression pass. The browser loads and paints the source file
// exactly as it exists at the URL, so nothing here can reintroduce the
// edge artifacts an image-processing step caused previously. Sizing comes
// entirely from the height utility classes passed in via `className`
// (e.g. h-11, h-14) with width left auto to preserve the source aspect
// ratio — no filter, transform, mask, blend-mode, or opacity is applied
// here or on any ancestor of this element.
export default function Logo({ className = "" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={images.logo} alt={`${business.name} logo`} className={className} />
  );
}
