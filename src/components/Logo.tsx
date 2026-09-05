import Image from "next/image";
import { images, business } from "@/lib/business";

export default function Logo({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={images.logo}
      alt={`${business.name} logo`}
      width={640}
      height={360}
      priority={priority}
      className={className}
      unoptimized
    />
  );
}
