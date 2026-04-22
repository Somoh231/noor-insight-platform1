import { Body, ButtonLink, Display, Eyebrow, InlineLink, Section } from "@/components/ds";

export function HomeCta() {
  return (
    <Section id="next-step" rhythm="standard">
      <div className="grid gap-12 lg:grid-cols-[2fr_1fr] lg:items-end lg:gap-20">
        <div>
          <Eyebrow>Next step</Eyebrow>
          <Display as="h2" size="l" className="mt-6">
            Request a structured briefing.
          </Display>
          <Body className="mt-8">
            Briefings run forty-five minutes and are delivered under NDA to
            named counterparties at utilities, regulators, ministries, and
            donor programs. Sources are attested on request.
          </Body>
        </div>
        <div className="flex flex-col gap-4 lg:items-end">
          <ButtonLink href="/contact" variant="primary">
            Request briefing
          </ButtonLink>
          <InlineLink href="/about" variant="arrow">
            How we work
          </InlineLink>
        </div>
      </div>
    </Section>
  );
}
