import { Body, Display, Kicker, Section } from "@/components/ds";

const posture: ReadonlyArray<readonly [string, string]> = [
  ["Counterparty", "LEC management and board"],
  ["Regulator", "Liberia Electricity Regulatory Commission (LERC)"],
  ["Ministries", "Mines & Energy · Finance & Development Planning"],
  ["Donor programs", "MCC · World Bank · EU · AfDB · USAID"],
  ["Phasing", "Diagnostic → reconciliation → attested reporting"],
  ["First phase", "18 months"],
];

/**
 * Starting-market section, LEC-anchored. Frames the utility's existing
 * trajectory as what Noor Insight defends and extends, not what needs
 * fixing. Data table on the right follows the v2 `dtable` register:
 * uppercase header row with an ink bottom rule, hairline rows.
 */
export function HomeStartingMarket() {
  return (
    <Section
      id="starting-market"
      tone="paper-soft"
      topRule
      bottomRule
      rhythm="standard"
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
        <div>
          <Kicker>Starting market · 01</Kicker>
          <Display as="h2" size="md" className="mt-4">
            Liberia Electricity Corporation.
          </Display>
          <Body className="mt-6">
            We begin with a single utility, in a single country, under the
            supervision of a single regulator. The engagement is phased,
            procurement-aligned, and designed to be defensible before the
            Ministry of Finance, the Liberia Electricity Regulatory
            Commission, and the donor programmes already funding the sector.
          </Body>
          <Body className="mt-4">
            The work amplifies the utility&apos;s own commercial and
            engineering teams. It does not replace them. Our role is to
            make the decisions they are already making more traceable,
            and the reporting they already produce more defensible.
          </Body>
        </div>

        <div className="border border-rule bg-paper p-6 sm:p-8">
          <Kicker muted>Engagement posture</Kicker>
          <dl className="mt-5 divide-y divide-rule">
            {posture.map(([k, v]) => (
              <div
                key={k}
                className="grid grid-cols-[140px_1fr] gap-5 py-3 text-sm leading-[1.55]"
              >
                <dt className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
                  {k}
                </dt>
                <dd className="text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
