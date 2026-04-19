import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Official NOOR INSIGHT lockup (trimmed transparent PNG, wide aspect). Footer, shell, and auth.
 */
export function BrandLogo({
  className,
  href = "/",
  heightClass = "h-8 sm:h-9",
}: {
  className?: string;
  href?: string;
  /** Tailwind height classes; width follows intrinsic aspect ratio. */
  heightClass?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex shrink-0 items-center rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy/30",
        className
      )}
      aria-label="Noor Insight, home"
    >
      <Image
        src="/brand/noor-insight-logo-nav-transparent.png"
        alt="Noor Insight"
        width={583}
        height={233}
        quality={95}
        unoptimized
        className={cn(
          "block h-auto max-h-full w-auto object-contain transition-opacity motion-reduce:transition-none group-hover:opacity-90",
          heightClass
        )}
        sizes="(max-width: 768px) 140px, 180px"
        priority={false}
      />
    </Link>
  );
}
