import { Display, InlineLink, Kicker, Section } from "@/components/ds";
import { LinkedInLink } from "@/components/marketing/linkedin-link";

type Founder = {
  name: string;
  subtitle: string;
  body: string;
  linkedInUrl: string;
};

const founders: readonly Founder[] = [
  {
    name: "Mahmoud Mobir",
    subtitle: "Senior Analyst, Rhodium Group · Energy & Climate",
    body:
      "Leads the firm's global analysis of the electric power transition and maintains Rhodium's Global Energy Model. Prior: GRTgaz (European energy-system modelling); Schneider Electric (grid reliability research). École des Mines, Paris · INP Toulouse.",
    linkedInUrl: "https://www.linkedin.com/in/mmobir",
  },
  {
    name: "Mohammed Soumaoro",
    subtitle: "Co-founder, Neldon · Former Ministry of Health, Liberia",
    body:
      "Public-sector delivery and software for African markets. Co-founded Neldon (software for African markets); programme officer at Liberia's Ministry of Health; member operations at BioForward. African Leadership University. Diana Award for social impact.",
    linkedInUrl: "https://www.linkedin.com/in/somoh231",
  },
];

/**
 * Compact founders strip on the home page — answers the "who is 'we'?"
 * question before it is asked. Full bios and credentials live on /about.
 */
export function HomeFounders() {
  return (
    <Section id="founders" tone="paper" rhythm="standard">
      <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <div>
          <Kicker>Founding team</Kicker>
          <Display as="h2" size="md" className="mt-4 max-w-[22ch]">
            Built by two practitioners.
          </Display>
          <p className="mt-6 max-w-[40ch] text-sm leading-[1.65] text-ink-soft">
            Noor Insight is co-founded by a power-sector analyst and a
            public-sector delivery operator. Both founders are named; both
            bios are published.
          </p>
          <p className="mt-4">
            <InlineLink href="/about#people" variant="ember">
              Read full bios →
            </InlineLink>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px border border-rule bg-rule sm:grid-cols-2">
          {founders.map((f) => (
            <article
              key={f.name}
              className="flex flex-col bg-paper p-6 sm:p-7"
            >
              <Kicker>Founder</Kicker>
              <h3 className="mt-3 font-serif text-[22px] font-normal leading-[1.2] tracking-[-0.005em] text-ink sm:text-2xl">
                {f.name}
              </h3>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-kicker text-muted">
                {f.subtitle}
              </p>
              <p className="mt-4 text-sm leading-[1.6] text-ink-soft">
                {f.body}
              </p>
              <div className="mt-auto pt-5" />
              <div className="flex items-center justify-between border-t border-rule pt-3">
                <span className="font-mono text-[10px] uppercase tracking-kicker text-muted">
                  LinkedIn
                </span>
                <LinkedInLink href={f.linkedInUrl} name={f.name} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
