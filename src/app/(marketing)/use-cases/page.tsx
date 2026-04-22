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
  title: "Use cases",
  description:
    "Reference patterns for how Noor Insight engagements are scoped: commercial loss containment, operational reviews under stress, regulator- and donor-ready reporting.",
};

type Pattern = {
  id: string;
  title: string;
  problem: string;
  posture: string;
};

const patterns: readonly Pattern[] = [
  {
    id: "commercial-loss-containment",
    title: "Commercial-loss containment",
    problem:
      "Non-technical losses dominate the narrative, but the story behind the headline percentage is thin — which feeders, which tariff bands, which connection types.",
    posture:
      "We reconcile metering posture, billing integrity, and field verification into a single monthly account. The output is a defensible story that shows where capital has moved the curve and where it has not.",
  },
  {
    id: "operational-review-under-stress",
    title: "Operational reviews under stress",
    problem:
      "Outages and constrained capacity erode legitimacy as fast as they erode revenue. Operations and commercial teams often see different numbers for the same feeder.",
    posture:
      "One operational picture that links incidents, crews, and customer impact. Monthly reviews with a single set of figures for leadership, regulator, and donor audiences.",
  },
  {
    id: "regulator-donor-reporting",
    title: "Regulator- and donor-ready reporting",
    problem:
      "Oversight audiences ask different questions — technical loss attribution, connection growth, collection ratios, tariff pass-through — but the underlying record needs to agree across every report.",
    posture:
      "Reporting packs produced from the operational record, not a second spreadsheet. Definitions fixed, methodology documented, change history visible. The same number survives the audit.",
  },
  {
    id: "modernization-after-pilot",
    title: "Modernization after a pilot",
    problem:
      "A successful pilot needs to survive the transition to steady-state operations, with the controls, training, and documentation the utility’s procurement and audit functions will require.",
    posture:
      "Phased scaling aligned to procurement windows and donor disbursement milestones. Controls and acceptance criteria carry over from pilot to programme.",
  },
  {
    id: "new-connection-programmes",
    title: "New-connection programmes",
    problem:
      "Access expansion is counted in connections, but the underlying register often drifts — one customer carries two meters, or one meter serves multiple households.",
    posture:
      "Customer and meter records reconciled against the field record before the connection count becomes a published figure. The register is the source of the number, not a summary of it.",
  },
  {
    id: "tariff-and-cost-of-service",
    title: "Tariff and cost-of-service reviews",
    problem:
      "Tariff reviews depend on a defensible cost-of-service base, but the inputs — losses, collections, capital deployed — often come from adjacent spreadsheets that cannot be audited together.",
    posture:
      "A reconciled base for the filing, with each input traceable to the operational system that produced it. The utility’s submission and the regulator&apos;s analysis can agree on the same starting point.",
  },
];

export default function UseCasesPage() {
  return (
    <main>
      <Section rhythm="loose">
        <Eyebrow>Use cases</Eyebrow>
        <Display as="h1" size="l" className="mt-6">
          Six reference patterns for scoping an engagement.
        </Display>
        <Lede className="mt-8">
          These patterns describe how utilities, regulators, and donor
          programmes typically engage us. They are deliberately abstract:
          we do not publish named clients, testimonials, or case studies
          on this site.
        </Lede>
      </Section>

      <Section topRule rhythm="standard">
        <ol className="flex flex-col divide-y divide-line-soft border-y border-line">
          {patterns.map((p, i) => (
            <li
              key={p.id}
              id={p.id}
              className="scroll-mt-24 grid gap-8 py-12 lg:grid-cols-[180px_1fr_1fr] lg:gap-12"
            >
              <div>
                <span className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-accent">
                  Pattern {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 font-serif text-xl font-normal leading-[1.25] tracking-[-0.005em] text-ink sm:text-2xl">
                  {p.title}
                </h2>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3">
                  Problem
                </div>
                <p className="mt-3 max-w-[52ch] text-small leading-[1.65] text-ink-2">
                  {p.problem}
                </p>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3">
                  Engagement posture
                </div>
                <p className="mt-3 max-w-[52ch] text-small leading-[1.65] text-ink-2">
                  {p.posture}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section topRule rhythm="standard">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr] lg:items-end">
          <div>
            <Eyebrow>Scoping a conversation</Eyebrow>
            <Display as="h2" size="l" className="mt-6">
              The first meeting is a briefing, not a pitch.
            </Display>
            <Body className="mt-8">
              If one of these patterns resembles the work in front of you,
              the fastest way to test a fit is a structured briefing. We
              arrive with questions, not slides. By the end of the
              conversation we either agree on a diagnostic brief, or we
              agree there is not an engagement to be had.
            </Body>
          </div>
          <div className="flex flex-col gap-4 lg:items-end">
            <ButtonLink href="/contact" variant="primary">
              Request a briefing
            </ButtonLink>
            <InlineLink href="/solutions" variant="arrow">
              Review the modules
            </InlineLink>
          </div>
        </div>
      </Section>
    </main>
  );
}
