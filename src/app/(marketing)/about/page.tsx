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
  title: "About",
  description:
    "Noor Insight is a utility systems and advisory firm. We partner with public electricity providers in emerging markets on revenue integrity, operational visibility, and accountable reporting.",
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
        <Eyebrow>About</Eyebrow>
        <Display as="h1" size="l" className="mt-6">
          A firm built for institutions that cannot afford ambiguity.
        </Display>
        <Lede className="mt-8">
          Noor Insight is a utility systems and advisory firm. We partner
          with public electricity providers in emerging markets to reduce
          losses, improve collections, and modernize field operations —
          using governed digital systems designed to fit inside the
          institution, not around it.
        </Lede>
        <Body className="mt-8">
          Our work is built for oversight. Every signal traceable, every
          decision defensible, every outcome measurable by a regulator, a
          board, or a donor. We are not a SaaS vendor, not a think tank,
          and not a management consultancy. We are a delivery firm that
          takes on the unglamorous work of reconciliation, control design,
          and attested reporting.
        </Body>
      </Section>

      <Section id="mission" topRule rhythm="standard">
        <div className="grid gap-10 lg:grid-cols-[240px_1fr] lg:items-start lg:gap-16">
          <Eyebrow>Mission</Eyebrow>
          <div>
            <p
              className="font-serif text-2xl font-normal leading-[1.35] tracking-[-0.005em] text-ink sm:text-3xl"
              style={{ textWrap: "balance" }}
            >
              Help public electricity utilities in emerging markets make
              their operations legible — to their own leadership, to
              regulators, and to the donors who fund them.
            </p>
          </div>
        </div>
      </Section>

      <Section id="how-we-work" topRule rhythm="standard">
        <Eyebrow>How we work</Eyebrow>
        <Display as="h2" size="l" className="mt-6 max-w-[28ch]">
          Phased, controls-first, embedded in institutional process.
        </Display>
        <ol className="mt-14 grid grid-cols-1 gap-0 border-t border-line sm:grid-cols-2">
          {howWeWork.map((item, i) => (
            <li
              key={item.title}
              className={[
                "flex gap-5 py-8 pr-4 sm:gap-6 sm:py-10",
                i % 2 === 0 ? "sm:pr-10" : "sm:pl-10",
                i < 2 ? "border-b border-line-soft" : "",
                i % 2 === 0 ? "sm:border-r sm:border-line-soft" : "",
              ].join(" ")}
            >
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-accent">
                0{i + 1}
              </span>
              <div>
                <h3 className="font-serif text-xl font-normal leading-[1.25] tracking-[-0.005em] text-ink sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[46ch] text-small leading-[1.65] text-ink-2">
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
        then the section is rendered with a visible "Forthcoming" label
        so no reader infers a roster.
      */}
      <Section id="people" topRule rhythm="standard">
        <Eyebrow>People</Eyebrow>
        <Display as="h2" size="l" className="mt-6 max-w-[26ch]">
          Named leadership and advisors. Forthcoming.
        </Display>
        <Body className="mt-8">
          Noor Insight is led by a small team of practitioners with
          backgrounds in utility operations, public-sector advisory, and
          regulated reporting. The named roster — partners, senior advisors,
          and engagement leads — will be published on this page before the
          first phase-one engagement commences.
        </Body>
        <div className="mt-10 inline-flex items-center gap-3 border border-line bg-surface px-5 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
          <span className="inline-block h-[6px] w-[6px] rounded-full bg-accent" />
          Forthcoming · to be published before first engagement
        </div>
      </Section>

      <Section id="next" topRule rhythm="standard">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr] lg:items-end">
          <div>
            <Eyebrow>Next step</Eyebrow>
            <Display as="h2" size="l" className="mt-6">
              Open a conversation.
            </Display>
            <Body className="mt-8">
              Briefings run forty-five minutes, under NDA, and are available
              to named counterparties at utilities, regulators, ministries,
              and donor programmes.
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
