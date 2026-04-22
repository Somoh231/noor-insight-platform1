import type { Metadata } from "next";
import {
  Body,
  ButtonLink,
  Display,
  InlineLink,
  Kicker,
  Lede,
  Section,
} from "@/components/ds";

export const metadata: Metadata = {
  title: "Programmes",
  description:
    "Noor Insight's six working disciplines for public electricity utilities: revenue protection, grid intelligence, field operations, customer and meter records, oversight reporting, and modernization advisory.",
};

type Module = {
  id: string;
  kicker: string;
  title: string;
  outcome: string;
  detail: string;
};

const modules: readonly Module[] = [
  {
    id: "revenue-protection",
    kicker: "Discipline 01",
    title: "Revenue protection",
    outcome:
      "Billed revenue reconciled to collections with a documented, monthly loss account.",
    detail:
      "Commercial loss accounting, ledger-to-meter reconciliation, arrears triage, and connection regularisation, each traceable to a named process owner at the utility.",
  },
  {
    id: "grid-intelligence",
    kicker: "Discipline 02",
    title: "Grid intelligence",
    outcome:
      "Feeder- and substation-level loss attribution that separates commercial from technical losses.",
    detail:
      "Transformer performance records, feeder-level operating reviews, outage and restoration registers — the operational picture engineering already keeps, made legible to finance and regulator.",
  },
  {
    id: "field-operations",
    kicker: "Discipline 03",
    title: "Field operations",
    outcome:
      "Every crew visit attested, timestamped, and tied to an intervention.",
    detail:
      "Technician workflows, work-order evidence, route records, and crew productivity reporting. Built so a regulator or donor can audit what happened on a specific feeder on a specific day.",
  },
  {
    id: "customer-meter-records",
    kicker: "Discipline 04",
    title: "Customer & meter records",
    outcome:
      "A clean customer register: one meter, one ledger line, one responsible household.",
    detail:
      "Meter registry, GPS-linked accounts, National ID reconciliation, and the customer record lifecycle — the foundation for any defensible loss narrative.",
  },
  {
    id: "oversight-reporting",
    kicker: "Discipline 05",
    title: "Oversight reporting",
    outcome:
      "Board, regulator, and donor reporting where the same number survives every audience.",
    detail:
      "Reporting packs built from the operational record, not a separate spreadsheet. Methodology documented, definitions fixed, change history visible.",
  },
  {
    id: "modernization-advisory",
    kicker: "Discipline 06",
    title: "Modernization advisory",
    outcome:
      "Phased programmes designed for the institution — procurement-aligned, trained, and staffed for adoption.",
    detail:
      "Roadmaps that respect staffing, existing systems, and political calendars. Delivery planning with explicit controls, training, and acceptance criteria from day one.",
  },
];

export default function SolutionsPage() {
  return (
    <main>
      <Section rhythm="loose">
        <Kicker>Programmes</Kicker>
        <Display as="h1" size="lg" className="mt-4">
          Six working disciplines, one reporting posture.
        </Display>
        <Lede className="mt-6">
          The disciplines below describe how Noor Insight&apos;s work shows
          up inside a utility. They are not products to be purchased
          separately; they are the areas of craft a serious revenue-integrity
          programme has to cover.
        </Lede>
      </Section>

      <Section topRule rhythm="standard">
        <ol className="grid grid-cols-1 gap-px border border-rule bg-rule lg:grid-cols-2">
          {modules.map((m) => (
            <li
              key={m.id}
              id={m.id}
              className="scroll-mt-24 flex flex-col bg-paper p-7 sm:p-8"
            >
              <Kicker>{m.kicker}</Kicker>
              <h2 className="mt-3 font-serif text-2xl font-normal leading-[1.2] tracking-[-0.005em] text-ink sm:text-[28px]">
                {m.title}
              </h2>
              <p className="mt-4 max-w-[48ch] text-base leading-[1.6] text-ink">
                {m.outcome}
              </p>
              <p className="mt-3 max-w-[52ch] text-sm leading-[1.65] text-ink-soft">
                {m.detail}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section topRule rhythm="standard">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr] lg:items-end">
          <div>
            <Kicker>How engagements begin</Kicker>
            <Display as="h2" size="md" className="mt-4">
              Scope is written in the briefing, not in a proposal.
            </Display>
            <Body className="mt-6">
              A structured briefing aligns scope to the utility&apos;s
              procurement posture, data readiness, and regulatory calendar.
              From there, we propose a phased delivery with explicit
              controls, training, and acceptance criteria so the adoption
              trajectory is measurable and oversight-friendly from the first
              month.
            </Body>
          </div>
          <div className="flex flex-col items-start gap-4 lg:items-end">
            <ButtonLink href="/contact" variant="accent">
              Request a briefing
            </ButtonLink>
            <InlineLink href="/use-cases" variant="ember">
              Review use-case patterns →
            </InlineLink>
          </div>
        </div>
      </Section>
    </main>
  );
}
