import { BRAND_CLOSING_TAGLINE } from "@/lib/constants";

/** Closing brand line at the end of the marketing homepage. */
export function HomeBrandClose() {
  return (
    <section
      className="border-t border-navy/10 bg-white py-16 text-center sm:py-20"
      aria-label="Noor Insight tagline"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="flex justify-center" aria-hidden>
          <span className="h-px w-12 bg-gold/75" />
        </div>
        <p className="mt-6 text-balance text-lg font-semibold tracking-tight text-navy sm:text-xl">
          {BRAND_CLOSING_TAGLINE}
        </p>
      </div>
    </section>
  );
}
