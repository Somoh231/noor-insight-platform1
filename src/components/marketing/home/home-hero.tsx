import { ButtonLink, Kicker, Lede } from "@/components/ds";

/**
 * v2 hero. Sharp kicker + large serif headline with an italic-ember
 * emphasis on one word, paired with a supporting lede and two CTAs in
 * a two-column layout. No illustration, no product screenshot, no
 * gradient. The bottom of the section carries a strong ink rule — the
 * hero transitions into the stat strip below without decorative chrome.
 */
export function HomeHero() {
  return (
    <section
      id="top"
      aria-labelledby="home-hero-title"
      className="bg-paper scroll-mt-24 sm:scroll-mt-28 border-b border-ink"
    >
      <div className="mx-auto w-full max-w-content px-6 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-24 lg:px-outer lg:pb-[64px] lg:pt-[80px]">
        <div className="grid items-end gap-12 lg:grid-cols-[2fr_1fr] lg:gap-20">
          <div>
            <Kicker>
              Defensible loss accounting · est. 2026
            </Kicker>
            <h1
              id="home-hero-title"
              className="mt-[14px] font-serif text-[44px] font-normal leading-[1.0] tracking-[-0.02em] text-ink sm:text-[60px] lg:text-[84px]"
            >
              Reconciling<br />
              the <em className="font-normal italic text-ember">light</em> that<br />
              goes unbilled.
            </h1>
          </div>
          <div>
            <Lede>
              Noor Insight is a utility systems and advisory firm for
              public electricity providers in West Africa. We work
              alongside utility management and regulators to reconcile
              billed revenue with collections, producing loss accounting
              that withstands donor and regulatory scrutiny.
            </Lede>
            <div className="mt-6 flex flex-wrap gap-[10px]">
              <ButtonLink href="/use-cases" variant="primary">
                Read the methodology
              </ButtonLink>
              <ButtonLink href="/contact" variant="ghost">
                Request a briefing
              </ButtonLink>
            </div>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-kicker text-muted">
              Starting market · Liberia Electricity Corporation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
