import { Display, InlineLink, Kicker, Section } from "@/components/ds";

type Pillar = {
  kicker: string;
  title: string;
  body: string;
  meta: string;
};

/**
 * The three disciplines rendered in the v2 publications-grid pattern —
 * 3 cards, 1px rule gaps between cells, kicker + serif title + body +
 * mono meta footer. Matches the reference marketing kit's Recent
 * publications section.
 */
const pillars: readonly Pillar[] = [
  {
    kicker: "Discipline 01",
    title: "Reconcile billed revenue with collections, line by line.",
    body:
      "Feeder-level reconciliation between the billing ledger and settlement exports. Variance attributed to its cause, dated, and signed off before aggregation to DISCO.",
    meta: "Revenue integrity · 01",
  },
  {
    kicker: "Discipline 02",
    title: "Decompose technical versus commercial losses.",
    body:
      "Bulk-supply metering, feeder metering, and customer-meter sampling combined into a single loss account that management, the regulator, and the donor can read at the same time.",
    meta: "Operational visibility · 02",
  },
  {
    kicker: "Discipline 03",
    title: "Publish every figure with its formula and its source.",
    body:
      "Reporting packs produced from the operational record, with inline citations, explicit exclusions, and a dated change history so the figure survives audit.",
    meta: "Accountable reporting · 03",
  },
];

export function HomePillars() {
  return (
    <Section id="approach" rhythm="standard">
      <header className="flex items-baseline border-b border-ink pb-4">
        <Display as="h2" size="md">
          Three disciplines, one reporting posture.
        </Display>
        <span className="ml-auto">
          <InlineLink href="/solutions" variant="ember">
            See all programmes →
          </InlineLink>
        </span>
      </header>

      <div className="mt-8 grid grid-cols-1 gap-px border border-rule bg-rule lg:grid-cols-3">
        {pillars.map((p) => (
          <article
            key={p.title}
            className="flex flex-col bg-paper px-7 pb-8 pt-7 transition-colors duration-fast ease-standard hover:bg-paper-soft"
          >
            <Kicker>{p.kicker}</Kicker>
            <h3
              className="mt-3 font-serif text-[22px] font-normal leading-[1.2] tracking-[-0.005em] text-ink sm:text-[26px]"
              style={{ textWrap: "balance" }}
            >
              {p.title}
            </h3>
            <p className="mt-3 text-sm leading-[1.6] text-ink-soft">
              {p.body}
            </p>
            <div className="mt-auto pt-[14px]" />
            <div className="flex gap-[10px] border-t border-rule pt-[14px] font-mono text-[11px] text-muted">
              {p.meta}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
