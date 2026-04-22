import type { Metadata } from "next";
import { Body, Display, Eyebrow, InlineLink, Lede, Section } from "@/components/ds";
import { ContactForm } from "@/components/marketing/contact-form";
import { EMAIL_BRIEFING, EMAIL_HELLO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a structured briefing with Noor Insight. Open to named counterparties at utilities, regulators, ministries, and donor programmes.",
};

export default function ContactPage() {
  return (
    <main>
      <Section rhythm="loose">
        <Eyebrow>Contact</Eyebrow>
        <Display as="h1" size="l" className="mt-6">
          Request a structured briefing.
        </Display>
        <Lede className="mt-8">
          Briefings run forty-five minutes and are delivered under NDA to
          named counterparties at utilities, regulators, ministries, and
          donor programmes. Please share enough context for us to arrive
          with relevant questions, not slides.
        </Lede>
      </Section>

      <Section topRule rhythm="standard">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div>
            <Eyebrow>Direct channels</Eyebrow>
            <dl className="mt-8 space-y-8 text-small leading-[1.6]">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3">
                  Briefings
                </dt>
                <dd className="mt-2 text-ink">
                  <InlineLink href={`mailto:${EMAIL_BRIEFING}`}>
                    {EMAIL_BRIEFING}
                  </InlineLink>
                </dd>
                <dd className="mt-2 text-ink-2">
                  Fastest path for evaluation and procurement-aligned walkthroughs.
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3">
                  General contact
                </dt>
                <dd className="mt-2 text-ink">
                  <InlineLink href={`mailto:${EMAIL_HELLO}`}>
                    {EMAIL_HELLO}
                  </InlineLink>
                </dd>
                <dd className="mt-2 text-ink-2">
                  Scheduling and introductory inquiries.
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3">
                  Response standard
                </dt>
                <dd className="mt-2 text-ink-2">
                  Two business days for initial scheduling. Faster when
                  flagged as time-sensitive to a procurement window or board
                  date.
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3">
                  Offices
                </dt>
                <dd className="mt-2 text-ink-2">Monrovia · London</dd>
              </div>
            </dl>
            <Body className="mt-10">
              Your message is reviewed by a named partner and is not
              forwarded outside the firm without written consent.
            </Body>
          </div>

          <ContactForm />
        </div>
      </Section>
    </main>
  );
}
