import { ButtonLink, Eyebrow, Lede, Section } from "@/components/ds";

/**
 * Home hero. One sharp statement, one supporting sentence, one muted CTA.
 * No illustration. No product screenshot. No decorative gradient. The
 * eyebrow carries a briefing reference; the supporting line below the
 * CTA anchors the starting market as a fact, not a promise.
 */
export function HomeHero() {
  return (
    <Section id="top" rhythm="loose" ariaLabelledBy="home-hero-title">
      <Eyebrow>Noor Insight · Revenue integrity for utilities</Eyebrow>
      <h1
        id="home-hero-title"
        className="mt-10 font-serif text-4xl font-normal leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl lg:text-[72px] lg:leading-[1.04]"
        style={{ textWrap: "balance" }}
      >
        Revenue integrity for emerging-market electricity utilities.
      </h1>
      <Lede className="mt-8">
        Noor Insight works alongside utility management and regulators to
        reconcile billed revenue with collections, produce defensible loss
        accounting, and build reporting that withstands regulatory and donor
        scrutiny.
      </Lede>
      <div className="mt-10 flex flex-wrap items-center gap-6">
        <ButtonLink href="/contact" variant="primary">
          Request a structured briefing
        </ButtonLink>
      </div>
      <div
        className="mt-14 flex max-w-measure flex-wrap items-baseline gap-x-8 gap-y-2 border-t border-line pt-6"
        aria-label="Starting market"
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
          Starting market
        </span>
        <span className="font-serif text-[18px] text-ink">
          Liberia Electricity Corporation
        </span>
      </div>
    </Section>
  );
}
