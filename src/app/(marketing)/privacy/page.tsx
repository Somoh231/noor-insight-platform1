import type { Metadata } from "next";
import Link from "next/link";
import { APP_NAME, CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy",
  description: `How ${APP_NAME} handles information in briefings, pilots, and product evaluation.`,
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
      <main className="border-b border-navy/10 bg-lgray">
        <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-dgray/50">
            Legal
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Privacy notice
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-dgray/80">
            {APP_NAME} works with utilities, ministries, regulators, and development partners on
            sensitive operational topics. This notice describes how we treat information in
            ordinary commercial and evaluation contexts. It is not a substitute for a
            project-specific data processing agreement where one is required.
          </p>

          <section className="mt-12 space-y-4 text-sm leading-relaxed text-dgray/85">
            <h2 className="text-base font-semibold text-navy">What we collect</h2>
            <p>
              When you request a briefing or contact us, we process the details you choose to
              share (for example, name, institutional affiliation, email content, and scheduling
              metadata). When you use an evaluation or pilot deployment of our software, we process
              account identifiers, access logs, and operational data you configure the system to
              hold, always subject to the contractual instruments governing that deployment.
            </p>
          </section>

          <section className="mt-10 space-y-4 text-sm leading-relaxed text-dgray/85">
            <h2 className="text-base font-semibold text-navy">How we use it</h2>
            <p>
              We use contact and briefing information to respond, to prepare agendas, and to
              maintain appropriate commercial records. We do not sell personal data. We use
              operational telemetry from hosted systems only to secure, operate, and improve the
              service, and only in line with customer instructions and applicable law.
            </p>
          </section>

          <section className="mt-10 space-y-4 text-sm leading-relaxed text-dgray/85">
            <h2 className="text-base font-semibold text-navy">Retention and security</h2>
            <p>
              Retention periods follow the underlying agreement and the nature of the records
              (commercial correspondence versus operational datasets). We apply administrative,
              technical, and organizational controls proportionate to the sensitivity of the
              materials we handle.
            </p>
          </section>

          <section className="mt-10 space-y-4 text-sm leading-relaxed text-dgray/85">
            <h2 className="text-base font-semibold text-navy">Your rights</h2>
            <p>
              Depending on jurisdiction, you may have rights to access, correct, or object to
              certain processing. For requests related to this site or a commercial inquiry, write
              to{" "}
              <a
                className="font-semibold text-navy underline decoration-navy/25 underline-offset-4 hover:decoration-navy/50"
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`${APP_NAME}: privacy inquiry`)}`}
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </section>

          <p className="mt-14 text-xs text-dgray/55">
            Last updated April 2026. This notice may be updated as offerings evolve; material
            changes will be reflected here with an updated date.
          </p>

          <p className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <Link
              href="/security"
              className="font-semibold text-navy underline decoration-navy/25 underline-offset-4 hover:decoration-navy/50"
            >
              Security overview
            </Link>
            <Link
              href="/terms"
              className="font-semibold text-navy underline decoration-navy/25 underline-offset-4 hover:decoration-navy/50"
            >
              Terms of use
            </Link>
            <Link
              href="/contact"
              className="font-semibold text-navy underline decoration-navy/25 underline-offset-4 hover:decoration-navy/50"
            >
              Contact
            </Link>
          </p>
        </article>
      </main>
  );
}
