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
import { LinkedInLink } from "@/components/marketing/linkedin-link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Noor Insight is a utility systems and advisory firm for public electricity providers in West Africa. We reconcile billed revenue with collections and produce defensible loss accounting. Starting market: Liberia Electricity Corporation.",
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
          Noor Insight is a utility systems and advisory firm for public
          electricity providers in West Africa. Our starting market is the
          Liberia Electricity Corporation, with deliberate expansion across
          the CLSG transmission corridor and the ECOWAS networks.
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
            Help public electricity utilities in West Africa make their
            operations legible — to their own leadership, to regulators,
            and to the donors who fund them.
          </p>
        </div>
      </Section>

      <Section id="geography" topRule rhythm="standard">
        <div className="grid gap-10 lg:grid-cols-[240px_1fr] lg:items-start lg:gap-16">
          <Kicker>Starting geography</Kicker>
          <div>
            <Body>
              Our starting geography is West Africa. The first engagement is
              with the Liberia Electricity Corporation, under the supervision
              of the Liberia Electricity Regulatory Commission and the
              donor programmes already funding the sector.
            </Body>
            <Body className="mt-4">
              Deliberate expansion follows the CLSG transmission corridor
              (Côte d&apos;Ivoire · Liberia · Sierra Leone · Guinea) and the
              anglophone and francophone distribution utilities across the
              ECOWAS network. We do not publish a customer list before a
              customer is engaged.
            </Body>
          </div>
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

      <Section id="people" topRule rhythm="standard">
        <Kicker>Founding team</Kicker>
        <Display as="h2" size="md" className="mt-4 max-w-[28ch]">
          Practitioners in energy systems and public-sector delivery.
        </Display>
        <Body className="mt-6">
          Noor Insight is built by two founders whose prior work sits on
          either side of the same problem: the quantitative analysis of
          power systems, and the operational delivery of public-sector
          programmes. Named senior advisors and engagement leads will be
          added here ahead of the first phase-one engagement.
        </Body>

        <div className="mt-10 grid grid-cols-1 gap-px border border-rule bg-rule lg:grid-cols-2">
          <FounderCard
            name="Mahmoud Mobir"
            subtitle="Energy systems modelling · power-sector analysis"
            bio="Senior Analyst in the Energy & Climate practice at Rhodium Group, where he leads the global analysis of the electric power transition and maintains Rhodium's Global Energy Model."
            prior={[
              "Energy analyst, GRTgaz — modelling European and French energy systems",
              "Research, Schneider Electric — renewables and grid reliability in a decarbonised power mix",
            ]}
            education={[
              "M.A.S., Energy Systems Optimization — École des Mines, Paris",
              "M.Sc., Energy Dynamics — INP Toulouse",
            ]}
            linkedInUrl="https://www.linkedin.com/in/mmobir"
          />
          <FounderCard
            name="Mohammed Soumaoro"
            subtitle="Public-sector delivery · software for African markets"
            bio="Co-founder of Neldon, a software studio serving African markets, and previously a programme officer in the Ministry of Health of the Republic of Liberia. Alumnus of African Leadership University; recipient of the Diana Award for social impact."
            prior={[
              "Member operations, BioForward — 220+ life-sciences members",
              "Programme officer, Ministry of Health, Monrovia",
              "Co-founder, Neldon — software development for African markets",
            ]}
            education={[
              "B.A., African Leadership University (Kigali / Mauritius)",
            ]}
            honours={["Diana Award · social impact"]}
            linkedInUrl="https://www.linkedin.com/in/somoh231"
          />
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

function FounderCard({
  name,
  subtitle,
  bio,
  prior,
  education,
  honours,
  linkedInUrl,
}: {
  name: string;
  subtitle: string;
  bio: string;
  prior: readonly string[];
  education: readonly string[];
  honours?: readonly string[];
  linkedInUrl: string;
}) {
  return (
    <article className="flex flex-col bg-paper p-7 sm:p-9">
      <Kicker>Founder</Kicker>
      <h3 className="mt-3 font-serif text-[26px] font-normal leading-[1.15] tracking-[-0.01em] text-ink sm:text-[30px]">
        {name}
      </h3>
      <p className="mt-2 font-mono text-[11px] uppercase tracking-kicker text-muted">
        {subtitle}
      </p>

      <p className="mt-5 max-w-[48ch] text-sm leading-[1.65] text-ink-soft">
        {bio}
      </p>

      <dl className="mt-7 grid grid-cols-[110px_1fr] gap-x-5 gap-y-[10px] border-t border-rule pt-5 text-sm">
        <DlRow label="Prior" items={prior} />
        <DlRow label="Education" items={education} />
        {honours?.length ? <DlRow label="Honours" items={honours} /> : null}
      </dl>

      <div className="mt-7 flex items-center justify-between border-t border-rule pt-4">
        <span className="font-mono text-[10px] uppercase tracking-kicker text-muted">
          LinkedIn
        </span>
        <LinkedInLink href={linkedInUrl} name={name} />
      </div>
    </article>
  );
}

function DlRow({
  label,
  items,
}: {
  label: string;
  items: readonly string[];
}) {
  return (
    <>
      <dt className="pt-[2px] font-mono text-[10px] uppercase tracking-kicker text-muted">
        {label}
      </dt>
      <dd className="flex flex-col gap-[6px] text-ink-soft">
        {items.map((it) => (
          <span key={it}>{it}</span>
        ))}
      </dd>
    </>
  );
}
