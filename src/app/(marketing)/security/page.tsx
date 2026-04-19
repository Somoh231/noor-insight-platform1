import type { Metadata } from "next";
import Link from "next/link";
import { APP_NAME, CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Security",
  description: `Security posture and practices for ${APP_NAME} deployments, evaluations, and procurement due diligence.`,
  robots: { index: true, follow: true },
};

export default function SecurityPage() {
  return (
      <main className="border-b border-navy/10 bg-lgray">
        <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-dgray/50">
            Trust & assurance
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Security overview
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-dgray/80">
            This page summarizes how we think about security for {APP_NAME}, from evaluation
            consoles through production utility deployments. It is a diligence aid, not a
            substitute for a completed questionnaire (e.g. CAIQ), penetration test report, or
            customer-specific architecture review under NDA.
          </p>

          <section className="mt-12 space-y-4 text-sm leading-relaxed text-dgray/85">
            <h2 className="text-base font-semibold text-navy">Identity and access</h2>
            <p>
              Production tenants integrate with your governed identity model. Console access uses
              authenticated sessions with role separation (executive, operations, field) and
              configurable session lifetime. Directory users are stored with salted password hashes
              (bcrypt); shared evaluation passwords are intended for controlled pilots only and
              should be removed from reachable deployments once directory authentication is live.
            </p>
          </section>

          <section className="mt-10 space-y-4 text-sm leading-relaxed text-dgray/85">
            <h2 className="text-base font-semibold text-navy">Data platform</h2>
            <p>
              Hosted data planes are designed around least-privilege database roles, encrypted
              transport to the application tier, and clear separation between environments (e.g.
              evaluation vs production). Exact residency, retention, and backup objectives are
              captured in your data processing agreement and infrastructure runbook.
            </p>
          </section>

          <section className="mt-10 space-y-4 text-sm leading-relaxed text-dgray/85">
            <h2 className="text-base font-semibold text-navy">Logging and auditability</h2>
            <p>
              We design workflows so significant actions can be attributed to users and systems,
              supporting internal governance and external audit. The depth of logging and export
              you require is configured per engagement, aligned to regulator and donor
              expectations.
            </p>
          </section>

          <section className="mt-10 space-y-4 text-sm leading-relaxed text-dgray/85">
            <h2 className="text-base font-semibold text-navy">Vulnerability disclosure</h2>
            <p>
              If you believe you have found a security issue affecting this site or an authorized
              deployment, contact us with a concise description and reproduction steps. We treat
              good-faith reports seriously and ask that you avoid disruptive testing without prior
              written agreement.
            </p>
            <p>
              <a
                className="font-semibold text-navy underline decoration-navy/25 underline-offset-4 hover:decoration-navy/50"
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`${APP_NAME}: security disclosure`)}`}
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </section>

          <section className="mt-10 space-y-4 text-sm leading-relaxed text-dgray/85">
            <h2 className="text-base font-semibold text-navy">Procurement packages</h2>
            <p>
              For formal RFPs, we provide architecture diagrams, control narratives, and evidence
              packs under NDA as part of structured diligence, not as anonymous downloads from this
              marketing site.
            </p>
          </section>

          <p className="mt-14 text-xs text-dgray/55">
            Last updated April 2026. Material changes to our public security posture will be
            reflected here with an updated date.
          </p>

          <p className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <Link
              href="/privacy"
              className="font-semibold text-navy underline decoration-navy/25 underline-offset-4 hover:decoration-navy/50"
            >
              Privacy notice
            </Link>
            <Link
              href="/terms"
              className="font-semibold text-navy underline decoration-navy/25 underline-offset-4 hover:decoration-navy/50"
            >
              Terms of use
            </Link>
          </p>
        </article>
      </main>
  );
}
