import { Body, Display, Eyebrow, Section } from "@/components/ds";

const posture: ReadonlyArray<readonly [string, string]> = [
  ["Counterparty", "LEC management and board"],
  ["Regulator", "Liberia Electricity Regulatory Commission (LERC)"],
  ["Ministries", "Mines & Energy · Finance & Development Planning"],
  ["Donor programs", "MCC · World Bank · EU · AfDB · USAID"],
  ["Phasing", "Diagnostic → reconciliation → attested reporting"],
  ["First phase", "18 months"],
];

/**
 * Starting-market section. Frames LEC as the partner whose existing
 * trajectory Noor Insight helps defend and extend, never as the utility
 * failing. Reads as a counterpart table, not a case study.
 */
export function HomeStartingMarket() {
  return (
    <Section id="market" tone="surface" topRule bottomRule rhythm="standard">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <Eyebrow>Starting market · 01</Eyebrow>
          <Display as="h2" size="l" className="mt-6">
            Liberia Electricity Corporation.
          </Display>
          <Body className="mt-8">
            We begin with a single utility, in a single country, under the
            supervision of a single regulator. The engagement is phased,
            procurement-aligned, and designed to be defensible before the
            Ministry of Finance &amp; Development Planning, the Liberia
            Electricity Regulatory Commission, and the donor programs
            already funding the sector.
          </Body>
          <Body className="mt-6">
            The work amplifies the utility&apos;s own commercial and
            engineering teams. It does not replace them. Our role is to make
            the decisions they are already making more traceable, and the
            reporting they already produce more defensible.
          </Body>
        </div>
        <div>
          <div className="border border-line bg-page p-8 sm:p-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
              Engagement posture
            </p>
            <dl className="mt-6 divide-y divide-line-soft">
              {posture.map(([k, v]) => (
                <div
                  key={k}
                  className="grid grid-cols-[140px_1fr] gap-6 py-3 text-small leading-[1.55]"
                >
                  <dt className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-3">
                    {k}
                  </dt>
                  <dd className="text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Section>
  );
}
