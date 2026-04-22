import { Body, ButtonLink, Display, InlineLink, Kicker, Section } from "@/components/ds";

export function HomeCta() {
  return (
    <Section id="next-step" topRule rhythm="standard">
      <div className="grid gap-10 lg:grid-cols-[2fr_1fr] lg:items-end lg:gap-20">
        <div>
          <Kicker>Next step</Kicker>
          <Display as="h2" size="md" className="mt-4">
            Request a structured briefing.
          </Display>
          <Body className="mt-6">
            Briefings run forty-five minutes and are delivered under NDA
            to named counterparties at utilities, regulators, ministries,
            and donor programmes. Sources are attested on request.
          </Body>
        </div>
        <div className="flex flex-col items-start gap-4 lg:items-end">
          <ButtonLink href="/contact" variant="accent">
            Request briefing
          </ButtonLink>
          <InlineLink href="/about" variant="ember">
            How we work →
          </InlineLink>
        </div>
      </div>
    </Section>
  );
}
