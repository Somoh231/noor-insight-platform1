import type { Metadata } from "next";
import { InlineLink } from "@/components/ds";
import { LegalPage, LegalSection } from "@/components/marketing/legal-layout";
import { APP_NAME, EMAIL_HELLO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Information handling",
  description: `How ${APP_NAME} handles sensitive information during advisory and delivery engagements.`,
  robots: { index: true, follow: true },
};

export default function SecurityPage() {
  return (
    <LegalPage
      eyebrow="Information handling"
      title="How we treat sensitive information."
      lead={`${APP_NAME} is an advisory and delivery firm, not a software vendor. We do not offer a hosted product to sign up for. This page describes how we handle information during engagements with utilities, regulators, ministries, and donor programmes. It is a diligence aid, not a substitute for an engagement-specific data processing instrument or information-security annex.`}
      lastUpdated="April 2026"
      related={[
        { href: "/privacy", label: "Privacy notice" },
        { href: "/terms", label: "Terms of use" },
      ]}
    >
      <LegalSection title="Engagement information">
        <p>
          Information shared under an NDA — draft reports, loss figures,
          crew records, customer identifiers — is handled under the terms
          of that NDA and the data processing instrument attached to the
          engagement letter. Residency, retention, access, and deletion
          obligations are set there.
        </p>
      </LegalSection>

      <LegalSection title="Operational data in utility systems">
        <p>
          Where we work on systems inside a utility&apos;s own
          infrastructure, we follow the utility&apos;s access policy,
          change-management process, and audit trail. Our preferred
          posture is to leave no parallel copies of operational data
          outside the utility&apos;s controlled environment unless an
          engagement explicitly requires it.
        </p>
      </LegalSection>

      <LegalSection title="Correspondence and briefing data">
        <p>
          Briefing requests submitted through this site arrive in the
          firm&apos;s mailbox and are reviewed by a named partner. They are
          not forwarded to third parties. We do not run marketing
          analytics, tracking pixels, or retargeting on this site.
        </p>
      </LegalSection>

      <LegalSection title="Procurement packages">
        <p>
          For formal RFPs, we provide an information-security questionnaire,
          reference architectures for proposed systems, and control
          narratives under NDA — as part of structured diligence, not as
          anonymous downloads from this marketing site.
        </p>
      </LegalSection>

      <LegalSection title="Reporting a concern">
        <p>
          If you believe information shared with us has been mishandled, or
          have a responsible-disclosure issue about this website, write to{" "}
          <InlineLink href={`mailto:${EMAIL_HELLO}`}>{EMAIL_HELLO}</InlineLink>
          . We treat good-faith reports seriously and ask that testing
          avoid disruption or unauthorised access.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
