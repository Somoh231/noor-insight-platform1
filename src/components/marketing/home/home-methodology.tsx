import type { Method } from "@/components/ds";
import { Kicker, MethodList, PullQuote, Section } from "@/components/ds";

const steps: readonly Method[] = [
  {
    title: "Ingest, without reshape",
    body: "Raw billing, metering, and settlement exports are preserved byte-for-byte. Every derived figure traces back to a source line with a reference id.",
  },
  {
    title: "Reconcile at the feeder",
    body: "Billed revenue is reconciled against collections at the feeder level before aggregation to the utility. Variance is attributed to its cause, not averaged away.",
  },
  {
    title: "Decompose losses",
    body: "Technical and commercial components are attributed using feeder metering, bulk-supply metering, and customer-meter sampling — with the gaps named rather than papered over.",
  },
  {
    title: "Publish with footnotes",
    body: "Every figure is published with its formula, its source, and the specific exclusions applied. Change history is preserved, not overwritten.",
  },
];

export function HomeMethodology() {
  return (
    <Section id="methodology" topRule rhythm="standard">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <Kicker>Methodology</Kicker>
          <PullQuote cite="— Noor reconciliation protocol, § 1.2" className="mt-6">
            We do not produce insights. We produce numbers that hold up
            under cross-examination — by the regulator, by the auditor,
            by the donor. Everything else follows.
          </PullQuote>
        </div>
        <MethodList items={steps} />
      </div>
    </Section>
  );
}
