import type { Metadata } from "next";
import { Body, Display, InlineLink, Kicker, Lede, Section } from "@/components/ds";
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
        <Kicker>Contact</Kicker>
        <Display as="h1" size="lg" className="mt-4">
          Request a structured briefing.
        </Display>
        <Lede className="mt-6">
          Briefings run forty-five minutes and are delivered under NDA to
          named counterparties at utilities, regulators, ministries, and
          donor programmes. Please share enough context for us to arrive
          with relevant questions, not slides.
        </Lede>
      </Section>

      <Section topRule rhythm="standard">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div>
            <Kicker>Direct channels</Kicker>
            <dl className="mt-6 space-y-7 text-sm leading-[1.6]">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-kicker text-muted">
                  Briefings
                </dt>
                <dd className="mt-2 text-ink">
                  <InlineLink href={`mailto:${EMAIL_BRIEFING}`} variant="ember">
                    {EMAIL_BRIEFING}
                  </InlineLink>
                </dd>
                <dd className="mt-2 text-ink-soft">
                  Fastest path for evaluation and procurement-aligned walkthroughs.
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-kicker text-muted">
                  General contact
                </dt>
                <dd className="mt-2 text-ink">
                  <InlineLink href={`mailto:${EMAIL_HELLO}`} variant="ember">
                    {EMAIL_HELLO}
                  </InlineLink>
                </dd>
                <dd className="mt-2 text-ink-soft">
                  Scheduling and introductory inquiries.
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-kicker text-muted">
                  Response standard
                </dt>
                <dd className="mt-2 text-ink-soft">
                  Two business days for initial scheduling. Faster when
                  flagged as time-sensitive to a procurement window or board
                  date.
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-kicker text-muted">
                  Offices
                </dt>
                <dd className="mt-2 text-ink-soft">Monrovia</dd>
              </div>
            </dl>
            <Body className="mt-8">
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
