import type { Metadata } from "next";
import { InlineLink } from "@/components/ds";
import { LegalPage, LegalSection } from "@/components/marketing/legal-layout";
import { APP_NAME, EMAIL_HELLO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of use",
  description: `Terms governing use of the ${APP_NAME} website.`,
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of use"
      lead={`These terms govern use of the ${APP_NAME} website. They do not govern engagement work, which is always delivered under a separate, signed engagement letter and associated data processing instrument.`}
      lastUpdated="April 2026"
      related={[
        { href: "/privacy", label: "Privacy notice" },
        { href: "/security", label: "Information handling" },
        { href: "/contact", label: "Contact" },
      ]}
    >
      <LegalSection title="No engagement created by use">
        <p>
          Using this website does not create a client relationship. Nothing
          published here should be relied on as engagement advice, a
          representation, or a warranty. Commercial commitments exist only
          under a signed engagement letter.
        </p>
      </LegalSection>

      <LegalSection title="Information on this site">
        <p>
          We take reasonable care to keep published information accurate
          and current, but the site may contain imprecisions, omissions, or
          figures whose underlying citations are marked forthcoming. We
          will correct errors promptly on request.
        </p>
      </LegalSection>

      <LegalSection title="Intellectual property">
        <p>
          The wordmark, copy, and layout on this site are the property of
          {` ${APP_NAME} `}or its licensors. You may quote short excerpts
          with attribution. Other redistribution requires written
          permission.
        </p>
      </LegalSection>

      <LegalSection title="Third-party sources">
        <p>
          Where the site references public figures or publications — IMF,
          World Bank, LERC, LEC, and others — the underlying documents
          remain the property of their respective authors and are cited for
          reference only.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Questions about these terms: write to{" "}
          <InlineLink href={`mailto:${EMAIL_HELLO}`}>{EMAIL_HELLO}</InlineLink>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
