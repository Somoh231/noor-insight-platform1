import {
  Body,
  ButtonLink,
  type Citation,
  CitationList,
  Display,
  Eyebrow,
  InlineLink,
  Lede,
  NumberBlock,
  type Pillar,
  Pillars,
  PullQuote,
  Section,
} from "@/components/ds";

const previewPillars: readonly Pillar[] = [
  {
    n: "01",
    title: "Revenue integrity",
    description:
      "Billed revenue reconciled to collections. Meter-to-ledger traceability that management and the regulator can corroborate, line by line.",
    capabilities: [
      "Commercial loss accounting",
      "Collections-to-bill reconciliation",
      "Connection regularisation",
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
    ],
  },
];

const previewCitations: readonly Citation[] = [
  { n: 1, source: "IMF Article IV Consultation, Liberia, 2024.", pending: true },
  { n: 2, source: "LEC public filing, 2024.", pending: true },
  { n: 3, source: "LERC published tariff schedule, 2025 revision.", pending: true },
];

/**
 * Design-system preview. Rendered at `/` until the home page content lands
 * in Deliverable 3. Shows every DS primitive in-situ so the tokens and
 * spacing can be reviewed against the design brief.
 */
export function DesignSystemPreview() {
  return (
    <main>
      <Section id="preview-intro" rhythm="loose">
        <Eyebrow>Deliverable 02 · Design system</Eyebrow>
        <Display as="h1" size="xl" className="mt-10">
          Tokens, primitives, and chrome.
        </Display>
        <Lede className="mt-8">
          This page renders the Noor Insight design system in isolation:
          typography scale, spacing rhythm, one amber accent, warm paper
          background, restrained nav, institutional footer. The home-page
          content arrives in Deliverable 3.
        </Lede>
        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink href="/contact" variant="primary">
            Request a structured briefing
          </ButtonLink>
          <ButtonLink href="/about" variant="secondary" arrow={false}>
            How we work
          </ButtonLink>
        </div>
      </Section>

      <Section id="preview-type" topRule rhythm="standard">
        <Eyebrow>Typography</Eyebrow>
        <Display as="h2" size="l" className="mt-8">
          Display serif for headings. Sans for body. Mono for numbers.
        </Display>
        <Lede className="mt-6">
          Source Serif 4, Inter, and JetBrains Mono are self-hosted via{" "}
          <InlineLink href="https://nextjs.org/docs/app/api-reference/components/font">
            next/font
          </InlineLink>
          . No external CDN font calls at runtime.
        </Lede>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div>
            <Eyebrow>Display xl · 64px</Eyebrow>
            <p className="mt-3 font-serif text-4xl font-normal leading-[1.08] tracking-[-0.02em] text-ink sm:text-display-xl">
              Reconciled, not reported.
            </p>
          </div>
          <div>
            <Eyebrow>Display l · 48px</Eyebrow>
            <p className="mt-3 font-serif text-3xl font-normal leading-[1.1] tracking-[-0.015em] text-ink sm:text-display-l">
              A signal is the work of a person.
            </p>
          </div>
          <div>
            <Eyebrow>Body · 17px / 1.6</Eyebrow>
            <Body className="mt-3">
              Noor Insight works alongside utility management and regulators to
              reconcile billed revenue with collections, produce defensible loss
              accounting, and build reporting that withstands regulatory and
              donor scrutiny.
            </Body>
          </div>
          <div>
            <Eyebrow>Mono · 12px · tabular</Eyebrow>
            <p className="mt-3 font-mono text-[12px] leading-[1.6] tracking-[0.02em] text-ink-2 tabular">
              41.3% → 27.5% (2022–2024) · LEC commercial losses
              <br />
              126 MW installed capacity · 315,691 connections
            </p>
          </div>
        </div>
      </Section>

      <Section id="preview-pillars" topRule>
        <Eyebrow>Approach</Eyebrow>
        <Display as="h2" size="l" className="mt-6">
          Three disciplines, one reporting posture.
        </Display>
        <Pillars className="mt-14" items={previewPillars} />
      </Section>

      <Section id="preview-numbers" topRule>
        <Eyebrow>Number block · citations</Eyebrow>
        <Display as="h2" size="l" className="mt-6">
          Numbers carry the argument. Citations carry the numbers.
        </Display>
        <Lede className="mt-6">
          Every external figure is rendered with a footnote anchor and a
          visible &ldquo;source forthcoming&rdquo; tag until the underlying
          citation is attested. Placeholder values shown for preview only.
        </Lede>
        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <NumberBlock
            value="41.3%"
            toValue="27.5%"
            label="LEC commercial losses, 2022–late 2024."
            footnote={1}
            sourceForthcoming
          />
          <NumberBlock
            value="126"
            unit="MW"
            label="Installed generation capacity, LEC, 2024."
            footnote={2}
            sourceForthcoming
          />
          <NumberBlock
            value="0.22"
            unit="USD/kWh"
            label="Residential prepaid tariff, effective Jan 1, 2026."
            footnote={3}
            sourceForthcoming
          />
        </div>
        <CitationList className="mt-16" citations={previewCitations} />
      </Section>

      <Section id="preview-quote" tone="surface" topRule bottomRule>
        <PullQuote cite="Noor Insight · method note">
          A utility&apos;s credibility with regulators and donors is not bought
          with software. It is produced, monthly, by disciplined reconciliation —
          and it is the work of the utility&apos;s own people.
        </PullQuote>
      </Section>

      <Section id="preview-cta" rhythm="standard">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr] lg:items-end">
          <div>
            <Eyebrow>Next step</Eyebrow>
            <Display as="h2" size="l" className="mt-6">
              Request a structured briefing.
            </Display>
            <Body className="mt-6">
              Briefings run 45 minutes and are delivered under NDA to named
              counterparties at utilities, regulators, ministries, and donor
              programs. Sources attested on request.
            </Body>
          </div>
          <div className="flex flex-col gap-3 lg:items-end">
            <ButtonLink href="/contact" variant="primary">
              Request briefing
            </ButtonLink>
            <InlineLink href="/about">Read how we work</InlineLink>
          </div>
        </div>
      </Section>
    </main>
  );
}
