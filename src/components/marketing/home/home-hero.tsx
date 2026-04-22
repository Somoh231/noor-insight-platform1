import type { CSSProperties, ReactNode } from "react";
import { ButtonLink, Eyebrow, Lede } from "@/components/ds";
import { HomeHeroFigure } from "./home-hero-figure";

/**
 * Quiet staggered enter animation. 180ms opacity fade + 4px translateY,
 * delays spread across ≤ 320ms total — inside the brief's "no staggered
 * hero reveals over 400ms total" ceiling. Respects prefers-reduced-motion
 * via globals.css.
 */
function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const style: CSSProperties = {
    animationDelay: `${delay}ms`,
    animationFillMode: "both",
  };
  return (
    <div className={`animate-fade-in ${className ?? ""}`} style={style}>
      {children}
    </div>
  );
}

const gridBackground: CSSProperties = {
  backgroundImage: `linear-gradient(to right, rgb(var(--color-line-soft-rgb)) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--color-line-soft-rgb)) 1px, transparent 1px)`,
  backgroundSize: "40px 40px",
  backgroundPosition: "left top",
  maskImage:
    "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 6%, #000 16%, #000 100%)",
  WebkitMaskImage:
    "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 6%, #000 16%, #000 100%)",
};

/**
 * Home hero. Sharp headline + supporting sentence + muted CTA on the
 * left. Constellation of dots on the right, sitting on top of a hairline
 * grid that IS the section's right-side background — bleeding from the
 * mid-viewport to the right viewport edge, full height of the hero. The
 * grid's left edge is softened by a mask so it reads as paper texture
 * rather than a framed panel.
 */
export function HomeHero() {
  return (
    <section
      id="top"
      aria-labelledby="home-hero-title"
      className="relative overflow-x-hidden bg-page scroll-mt-24 sm:scroll-mt-28"
    >
      {/* Full-height hairline grid on the right half of the section.
          On mobile the grid is not shown — the RHS figure stacks under
          the text. */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden lg:block"
        style={{ ...gridBackground, width: "58vw" }}
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-content px-6 sm:px-8 lg:px-outer py-24 sm:py-32 lg:py-section-lg">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start lg:gap-16">
          <div>
            <Reveal delay={0}>
              <Eyebrow>Noor Insight · Revenue integrity for utilities</Eyebrow>
            </Reveal>

            <Reveal delay={40} className="mt-10">
              <h1
                id="home-hero-title"
                className="font-serif text-4xl font-normal leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl lg:text-[64px] lg:leading-[1.06]"
                style={{ textWrap: "balance" }}
              >
                Revenue integrity for emerging-market electricity utilities.
              </h1>
            </Reveal>

            <Reveal delay={80} className="mt-8">
              <Lede>
                Noor Insight works alongside utility management and regulators
                to reconcile billed revenue with collections, produce
                defensible loss accounting, and build reporting that
                withstands regulatory and donor scrutiny.
              </Lede>
            </Reveal>

            <Reveal
              delay={120}
              className="mt-10 flex flex-wrap items-center gap-6"
            >
              <ButtonLink href="/contact" variant="primary">
                Request a structured briefing
              </ButtonLink>
            </Reveal>

            <Reveal
              delay={160}
              className="mt-14 flex max-w-measure flex-wrap items-baseline gap-x-8 gap-y-2 border-t border-line pt-6"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
                Starting market
              </span>
              <span className="font-serif text-[18px] text-ink">
                Liberia Electricity Corporation
              </span>
            </Reveal>
          </div>

          <Reveal delay={220} className="relative mt-2 lg:mt-10">
            <HomeHeroFigure />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
