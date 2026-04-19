import { ButtonLink } from "@/components/ui/button-link";

export function HomeCtaStrip() {
  return (
    <section
      aria-labelledby="home-cta-title"
      className="section-y border-b border-navy/10 bg-[linear-gradient(90deg,rgb(var(--color-panel-rgb))_0%,rgb(var(--color-lgray-rgb))_50%,rgb(var(--color-panel-rgb))_100%)]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-12 rounded-2xl border border-navy/[0.08] bg-lgray/75 p-9 shadow-soft ring-1 ring-navy/[0.04] sm:p-11 lg:flex-row lg:items-center lg:gap-16 lg:p-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gold/70" aria-hidden />
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
                Next step
              </p>
            </div>
            <h2
              id="home-cta-title"
              className="mt-5 text-balance text-2xl font-semibold tracking-[-0.02em] text-navy sm:text-3xl lg:text-[2.125rem] lg:leading-[1.12]"
            >
              If you are responsible for outcomes (not slides), let’s talk.
            </h2>
            <p className="text-dgray/78 mt-6 max-w-prose text-[15px] leading-[1.75]">
              We will respond with a short agenda: scope assumptions, relevant
              reference patterns, and a proposed path for a structured briefing
              with your technical and commercial leadership.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-end lg:w-auto lg:shrink-0">
            <ButtonLink
              href="/contact"
              variant="primary"
              className="sm:min-w-[11.5rem]"
            >
              Request a briefing
            </ButtonLink>
            <ButtonLink
              href="/about"
              variant="secondary"
              className="sm:min-w-[11.5rem]"
            >
              About Noor Insight
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
