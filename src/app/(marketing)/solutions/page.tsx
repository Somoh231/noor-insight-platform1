import type { Metadata } from "next";
import {
  Body,
  ButtonLink,
  Display,
  Eyebrow,
  InlineLink,
  Lede,
  Section,
} from "@/components/ds";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Noor Insight's six working modules for public electricity utilities in emerging markets: revenue protection, grid intelligence, field operations, customer and meter records, oversight reporting, and modernization advisory.",
};

type Module = {
  id: string;
  title: string;
  outcome: string;
  detail: string;
};

const modules: readonly Module[] = [
  {
    id: "revenue-protection",
    title: "Revenue protection",
    outcome:
      "Billed revenue reconciled to collections with a documented, monthly loss account.",
    detail:
      "Commercial loss accounting, ledger-to-meter reconciliation, arrears triage, and connection regularisation, each traceable to a named process owner at the utility.",
  },
  {
    id: "grid-intelligence",
    title: "Grid intelligence",
    outcome:
      "Feeder- and substation-level loss attribution that separates commercial from technical losses.",
    detail:
      "Transformer performance records, feeder-level operating reviews, outage and restoration registers — the operational picture the engineering team already keeps, made legible to the finance and regulatory audience.",
  },
  {
    id: "field-operations",
    title: "Field operations",
    outcome:
      "Field work with a documented trail: every crew visit attested, timestamped, and tied to an intervention.",
    detail:
      "Technician workflows, work-order evidence, route records, and crew productivity reporting. Built so a regulator or donor can audit what happened on a specific feeder on a specific day.",
  },
  {
    id: "customer-meter-records",
    title: "Customer & meter records",
    outcome:
      "A clean customer register: one meter, one ledger line, one responsible household.",
    detail:
      "Meter registry, GPS-linked accounts, National ID reconciliation, and the customer record lifecycle — the foundation for any defensible loss narrative.",
  },
  {
    id: "oversight-reporting",
    title: "Oversight reporting",
    outcome:
      "Board, regulator, and donor reporting where the same number survives every audience.",
    detail:
      "Reporting packs built from the operational record, not a separate spreadsheet. Methodology documented, definitions fixed, change history visible.",
  },
  {
    id: "modernization-advisory",
    title: "Modernization advisory",
    outcome:
      "Phased programs designed for the institution: procurement-aligned, trained, and staffed for adoption.",
    detail:
      "Roadmaps that respect staffing, existing systems, and political calendars. Delivery planning with explicit controls, training, and acceptance criteria from day one.",
  },
];

export default function SolutionsPage() {
  return (
    <main>
      <Section rhythm="loose">
        <Eyebrow>Solutions</Eyebrow>
        <Display as="h1" size="l" className="mt-6">
          Six working modules, one reporting posture.
        </Display>
        <Lede className="mt-8">
          The modules below describe how Noor Insight&apos;s work shows up
          inside a utility. They are not products to be purchased
          separately; they are the disciplines a serious revenue-integrity
          programme has to cover.
        </Lede>
      </Section>

      <Section topRule rhythm="standard">
        <ol className="grid grid-cols-1 border-t border-line sm:grid-cols-2">
          {modules.map((m, i) => (
            <li
              key={m.id}
              id={m.id}
              className={[
                "scroll-mt-24 flex flex-col gap-4 py-10 sm:gap-5 sm:py-12",
                i % 2 === 0 ? "sm:pr-10" : "sm:pl-10",
                i < modules.length - 2 ? "border-b border-line-soft" : "",
                i % 2 === 0 ? "sm:border-r sm:border-line-soft" : "",
              ].join(" ")}
            >
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="font-serif text-2xl font-normal leading-[1.2] tracking-[-0.005em] text-ink sm:text-[28px]">
                {m.title}
              </h2>
              <p className="max-w-[48ch] text-body leading-[1.6] text-ink">
                {m.outcome}
              </p>
              <p className="max-w-[52ch] text-small leading-[1.65] text-ink-2">
                {m.detail}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section topRule rhythm="standard">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr] lg:items-end">
          <div>
            <Eyebrow>How engagements begin</Eyebrow>
            <Display as="h2" size="l" className="mt-6">
              Scope is written in the briefing, not in a proposal.
            </Display>
            <Body className="mt-8">
              A structured briefing aligns scope to the utility&apos;s
              procurement posture, data readiness, and regulatory calendar.
              From there, we propose a phased delivery with explicit
              controls, training, and acceptance criteria so the adoption
              trajectory is measurable and oversight-friendly from the first
              month.
            </Body>
          </div>
          <div className="flex flex-col gap-4 lg:items-end">
            <ButtonLink href="/contact" variant="primary">
              Request a briefing
            </ButtonLink>
            <InlineLink href="/use-cases" variant="arrow">
              Review use-case patterns
            </InlineLink>
          </div>
        </div>
      </Section>
    </main>
  );
}
