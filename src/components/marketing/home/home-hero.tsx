import type { CSSProperties, ReactNode } from "react";
import { ButtonLink, Eyebrow, Lede, Section } from "@/components/ds";
import { HomeHeroChart } from "./home-hero-chart";

/**
 * Quiet staggered enter animation. 180ms opacity fade + 4px translateY,
 * delays spread across ≤ 320ms total — well inside the brief's "no
 * staggered hero reveals over 400ms total" rule. No scroll-jacking, no
 * transforms other than the micro-translate, no gradients.
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

/**
 * Home hero. One sharp statement, one supporting sentence, one muted CTA,
 * paired with a hairline editorial chart of the LEC commercial-loss
 * trajectory (figures from the positioning brief). No illustration, no
 * product screenshot, no gradient.
 */
export function HomeHero() {
  return (
    <Section id="top" rhythm="loose" ariaLabelledBy="home-hero-title">
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

        <Reveal delay={220} className="mt-2 lg:mt-10">
          <HomeHeroChart />
        </Reveal>
      </div>
    </Section>
  );
}
