import type { Metadata } from "next";
import { InlineLink } from "@/components/ds";
import { LegalPage, LegalSection } from "@/components/marketing/legal-layout";
import { APP_NAME, EMAIL_HELLO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy",
  description: `How ${APP_NAME} handles information received through the website and during advisory engagements.`,
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy notice"
      lead={`${APP_NAME} works with utilities, regulators, ministries, and donor programmes on sensitive operational topics. This notice describes how we treat information received through this website and during ordinary commercial correspondence. It is not a substitute for an engagement-specific data processing agreement, which governs any utility data we handle under contract.`}
      lastUpdated="April 2026"
      related={[
        { href: "/security", label: "Information handling" },
        { href: "/terms", label: "Terms of use" },
        { href: "/contact", label: "Contact" },
      ]}
    >
      <LegalSection title="What we collect">
        <p>
          When you request a briefing or contact us, we process the details
          you choose to share: name, role, organization, country, email
          address, and the content of your message. We do not deploy
          analytics scripts, tracking pixels, or third-party advertising
          tags on this site.
        </p>
      </LegalSection>

      <LegalSection title="How we use it">
        <p>
          Briefing and correspondence information is used to respond, to
          prepare structured first meetings, and to maintain the
          counter­party record that is customary for a professional
          services firm. We do not sell personal data. We do not share your
          message outside the firm without written consent.
        </p>
      </LegalSection>

      <LegalSection title="Engagement data">
        <p>
          Operational data processed during an engagement — customer
          records, meter records, field reports, financial ledgers — is
          handled under the data processing instrument governing that
          engagement, not under this notice. Retention, residency, access
          controls, and deletion obligations are set there.
        </p>
      </LegalSection>

      <LegalSection title="Retention">
        <p>
          Commercial correspondence is retained for the duration of an
          active conversation and for a reasonable period afterwards. If
          you would like correspondence removed, contact{" "}
          <InlineLink href={`mailto:${EMAIL_HELLO}`}>{EMAIL_HELLO}</InlineLink>
          . Engagement data is retained per the contractual instrument
          described above.
        </p>
      </LegalSection>

      <LegalSection title="Your rights">
        <p>
          Depending on jurisdiction, you may have rights to access,
          correct, or object to certain processing. For requests related to
          this site or a commercial inquiry, write to{" "}
          <InlineLink href={`mailto:${EMAIL_HELLO}`}>{EMAIL_HELLO}</InlineLink>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
