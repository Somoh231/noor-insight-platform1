import {
  Body,
  type Citation,
  CitationList,
  Display,
  Eyebrow,
  NumberBlock,
  Section,
} from "@/components/ds";

/**
 * Real Liberia / LEC figures from the founder's positioning brief.
 * Every citation is marked `pending` until a source URL / document is
 * attached — per the brief's constraint on unattested numbers.
 *
 * TODO(cite): replace each `source` line with the attested document and
 * remove `pending: true` when LEC and LERC provide the underlying
 * filings (expected week of 2026-04-27).
 */
const citations: readonly Citation[] = [
  {
    n: 1,
    source: "LEC public filings · commercial losses, 2022 and late 2024.",
    pending: true,
  },
  {
    n: 2,
    source:
      "Ministry of Mines & Energy / IMF Article IV, Liberia — national electricity access.",
    pending: true,
  },
  {
    n: 3,
    source: "LEC Annual Report, 2024 — installed generation capacity.",
    pending: true,
  },
  {
    n: 4,
    source: "LEC customer records, 2024 — connections summary.",
    pending: true,
  },
  {
    n: 5,
    source:
      "LERC published tariff schedule · residential prepaid, effective 1 January 2026.",
    pending: true,
  },
];

export function HomeAtStake() {
  return (
    <Section id="stake" topRule rhythm="standard">
      <div className="grid gap-12 lg:grid-cols-[320px_1fr] lg:items-start lg:gap-20">
        <div>
          <Eyebrow>What is at stake</Eyebrow>
          <Display as="h2" size="l" className="mt-6">
            Published figures. Cited sources. Unadorned.
          </Display>
          <Body className="mt-8">
            The Liberia Electricity Corporation&apos;s own record already
            tells a defensible story. Noor Insight&apos;s work is to extend
            that trajectory and make every step of it auditable.
          </Body>
        </div>

        <div>
          <div className="grid grid-cols-1 gap-x-12 gap-y-12 border-t border-line pt-10 sm:grid-cols-2">
            <NumberBlock
              value="41.3%"
              toValue="27.5%"
              label="LEC commercial losses, 2022 to late 2024."
              footnote={1}
              sourceForthcoming
            />
            <NumberBlock
              value="32.5%"
              label="Population with access to grid electricity, Liberia."
              footnote={2}
              sourceForthcoming
            />
            <NumberBlock
              value="126"
              unit="MW"
              label="Total installed generation capacity, 2024."
              footnote={3}
              sourceForthcoming
            />
            <NumberBlock
              value="315,691"
              label="Customer connections on LEC network, 2024."
              footnote={4}
              sourceForthcoming
            />
            <NumberBlock
              value="0.22"
              unit="USD/kWh"
              label="Residential prepaid tariff, effective 1 January 2026."
              footnote={5}
              sourceForthcoming
            />
          </div>
          <CitationList className="mt-14" citations={citations} />
        </div>
      </div>
    </Section>
  );
}
