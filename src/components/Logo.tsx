import { images, business } from "@/lib/business";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={images.logo}
      alt={`${business.name} logo`}
      className={className}
      style={{ backgroundColor: "#081A13" }}
    />
  );
}
