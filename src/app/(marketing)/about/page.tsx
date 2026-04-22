import type { Metadata } from "next";
import {
  Badge,
  Body,
  ButtonLink,
  Display,
  InlineLink,
  Kicker,
  Lede,
  Section,
} from "@/components/ds";

export const metadata: Metadata = {
  title: "About",
  description:
    "Noor Insight is an accounting-grade reporting partner for emerging-market electricity utilities. We reconcile billed revenue with collections and produce defensible loss accounting.",
};

const howWeWork = [
  {
    title: "Phased delivery",
    body: "Engagements proceed in named phases — diagnostic, reconciliation, attested reporting — each with its own acceptance criteria. We do not begin a phase before the previous one has been signed off by the utility.",
  },
  {
    title: "Controls first",
    body: "Role separation, change logs, and evidence requirements are designed in at the start, not retrofitted after an audit. The system a regulator inspects is the same system the team uses day-to-day.",
  },
  {
    title: "Embedded in the institution",
    body: "We work alongside the utility's existing commercial, technical, and field teams. Our aim is to strengthen their record, not to replace their role with an external dashboard.",
  },
  {
    title: "Procurement- and donor-aligned",
    body: "Engagements are sized for real procurement windows and disbursement milestones. Documentation is produced to the standard the utility's oversight bodies already use.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <Section rhythm="loose">
        <Kicker>About</Kicker>
        <Display as="h1" size="lg" className="mt-4">
          An accounting-grade reporting partner.
        </Display>
        <Lede className="mt-6">
          Noor Insight is not a dashboard vendor. We work alongside utility
          management and regulators to reconcile billed revenue with
          collections, produce defensible loss accounting, and build
          reporting that withstands donor and regulatory scrutiny.
        </Lede>
        <Body className="mt-6">
          Our work is built for oversight. Every signal traceable, every
          decision defensible, every outcome measurable by a regulator, a
          board, or a donor. We are not a SaaS vendor, not a think tank, and
          not a management consultancy. We are a delivery firm that takes on
          the unglamorous work of reconciliation, control design, and
          attested reporting.
        </Body>
      </Section>

      <Section id="mission" topRule rhythm="standard">
        <div className="grid gap-10 lg:grid-cols-[240px_1fr] lg:items-start lg:gap-16">
          <Kicker>Mission</Kicker>
          <p
            className="font-serif text-2xl font-normal leading-[1.35] tracking-[-0.005em] text-ink sm:text-[28px]"
            style={{ textWrap: "balance" }}
          >
            Help public electricity utilities in emerging markets make
            their operations legible — to their own leadership, to
            regulators, and to the donors who fund them.
          </p>
        </div>
      </Section>

      <Section id="how-we-work" topRule rhythm="standard">
        <Kicker>How we work</Kicker>
        <Display as="h2" size="md" className="mt-4 max-w-[28ch]">
          Phased, controls-first, embedded in institutional process.
        </Display>
        <ol className="mt-10 grid grid-cols-1 gap-px border border-rule bg-rule sm:grid-cols-2">
          {howWeWork.map((item, i) => (
            <li
              key={item.title}
              className="flex gap-5 bg-paper p-7 sm:gap-6 sm:p-8"
            >
              <span className="font-mono text-xxs font-semibold uppercase tracking-kicker text-ember">
                0{i + 1}
              </span>
              <div>
                <h3 className="font-serif text-xl font-normal leading-[1.25] tracking-[-0.005em] text-ink sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[46ch] text-sm leading-[1.65] text-ink-soft">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/*
        TODO(team): Replace this block with the named partners, senior
        advisors, and engagement leads when the team is finalised. Until
        then the section is rendered with a visible "Forthcoming" badge
        so no reader infers a roster.
      */}
      <Section id="people" topRule rhythm="standard">
        <Kicker>People</Kicker>
        <Display as="h2" size="md" className="mt-4 max-w-[26ch]">
          Named leadership and advisors.
        </Display>
        <Body className="mt-6">
          Noor Insight is led by a small team of practitioners with
          backgrounds in utility operations, public-sector advisory, and
          regulated reporting. The named roster — partners, senior advisors,
          and engagement leads — will be published on this page before the
          first phase-one engagement commences.
        </Body>
        <div className="mt-8">
          <Badge variant="accent">Forthcoming · published before first engagement</Badge>
        </div>
      </Section>

      <Section id="next" topRule rhythm="standard">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr] lg:items-end">
          <div>
            <Kicker>Next step</Kicker>
            <Display as="h2" size="md" className="mt-4">
              Open a conversation.
            </Display>
            <Body className="mt-6">
              Briefings run forty-five minutes, under NDA, and are available
              to named counterparties at utilities, regulators, ministries,
              and donor programmes.
            </Body>
          </div>
          <div className="flex flex-col items-start gap-4 lg:items-end">
            <ButtonLink href="/contact" variant="accent">
              Request a briefing
            </ButtonLink>
            <InlineLink href="/solutions" variant="ember">
              Review the programmes →
            </InlineLink>
          </div>
        </div>
      </Section>
    </main>
  );
}
