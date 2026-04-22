import { Display, Eyebrow, type Pillar, Pillars, Section } from "@/components/ds";

const pillars: readonly Pillar[] = [
  {
    n: "01",
    title: "Revenue integrity",
    description:
      "Billed revenue reconciled to collections, month by month. Meter-to-ledger traceability that management and the regulator can corroborate line by line.",
    capabilities: [
      "Commercial loss accounting",
      "Collections-to-bill reconciliation",
      "Connection regularisation",
      "Tariff and arrears analysis",
    ],
  },
  {
    n: "02",
    title: "Operational visibility",
    description:
      "Feeder- and substation-level loss accounting. Structured monthly reviews that surface where commercial losses become technical losses, and where they do not.",
    capabilities: [
      "Feeder-level loss attribution",
      "Field operations lineage",
      "Outage and restoration records",
      "Customer, meter, and transformer registry",
    ],
  },
  {
    n: "03",
    title: "Accountable reporting",
    description:
      "Attested reporting to the regulator, ministry, and donor programs. Each figure sourced, each methodology documented, each change dated.",
    capabilities: [
      "Regulator-ready reporting packs",
      "Donor-facing monitoring narratives",
      "Board-level performance reviews",
      "Audit trail for every published figure",
    ],
  },
];

export function HomePillars() {
  return (
    <Section id="approach" topRule rhythm="standard">
      <div className="grid gap-10 lg:grid-cols-[240px_1fr] lg:items-start lg:gap-16">
        <div className="max-w-[260px]">
          <Eyebrow>Approach</Eyebrow>
          <Display as="h2" size="l" className="mt-6">
            Three disciplines, one reporting posture.
          </Display>
        </div>
        <Pillars items={pillars} />
      </div>
    </Section>
  );
}
