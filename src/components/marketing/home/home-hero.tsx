import { HeroDataIllustration } from "@/components/marketing/hero-data-illustration";
import { HeroTrustStrip } from "@/components/marketing/hero-trust-strip";
import { ButtonLink } from "@/components/ui/button-link";
import { BRAND_STATEMENT } from "@/lib/constants";

const spec = [
  { k: "Built for", v: "Public accountability" },
  { k: "Primary domain", v: "Electricity utilities" },
  { k: "Operating context", v: "Emerging markets" },
] as const;

export function HomeHero() {
  return (
    <section
      aria-labelledby="home-hero-title"
      className="section-y relative overflow-hidden border-b border-navy/10"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--mesh-hero)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-gold via-gold/35 to-transparent sm:w-1"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgb(26_60_94/0.04)_1px,transparent_1px),linear-gradient(90deg,rgb(26_60_94/0.04)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-14">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-gold/75" aria-hidden />
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">
                Utility intelligence · Accountability
              </p>
            </div>

            <p className="mt-6 max-w-2xl text-sm font-semibold leading-relaxed text-navy/90 sm:text-base">
              {BRAND_STATEMENT}
            </p>

            <h1
              id="home-hero-title"
              className="mt-6 text-balance text-display-sm font-semibold text-navy sm:mt-7 sm:text-display lg:text-display-lg"
            >
              Operational truth for utilities under real constraints.
            </h1>
            <p className="text-dgray/88 mt-8 max-w-2xl text-pretty text-base leading-[1.75] sm:text-lg sm:leading-[1.75]">
              Noor Insight is a utility intelligence and accountability platform for electricity
              providers. We design and deploy governed digital systems that reduce losses, improve
              collections, surface theft and leakage signals, and modernize field operations, so
              public enterprises can answer to ministers, regulators, boards, and citizens with
              evidence, not anecdotes.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <ButtonLink href="/contact" variant="primary">
                Request a structured briefing
              </ButtonLink>
              <ButtonLink href="/solutions" variant="secondary">
                Review solution areas
              </ButtonLink>
            </div>
          </div>

          <div className="mt-14 lg:col-span-5 lg:mt-2">
            <div className="group/illustration">
              <HeroDataIllustration />
            </div>
            <p className="mt-4 text-center text-[12px] leading-relaxed text-dgray/55 lg:text-left">
              Concept visualization: technical and commercial signals converging into one
              operational picture for leadership review.
            </p>
          </div>

          <div className="mt-14 lg:col-span-12 lg:mt-4">
            <dl className="grid gap-6 rounded-2xl border border-navy/[0.07] bg-panel/60 p-6 shadow-sm backdrop-blur-sm sm:grid-cols-3 sm:p-7">
              {spec.map((row) => (
                <div
                  key={row.k}
                  className="border-l border-gold/55 pl-5 transition duration-200 ease-out hover:border-gold"
                >
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.22em] text-dgray/50">
                    {row.k}
                  </dt>
                  <dd className="mt-2 text-[15px] font-semibold tracking-tight text-navy">
                    {row.v}
                  </dd>
                </div>
              ))}
            </dl>

            <HeroTrustStrip />
          </div>
        </div>
      </div>
    </section>
  );
}
