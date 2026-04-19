import type { Metadata } from "next";
import Link from "next/link";
import { APP_NAME, EMAIL_SUPPORT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of use",
  description: `Terms governing use of this website and evaluation access to ${APP_NAME} software.`,
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
      <main className="border-b border-navy/10 bg-panel">
        <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-dgray/50">
            Legal
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Terms of use
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-dgray/80">
            These terms apply to your use of this public website and to any evaluation or pilot
            access to {APP_NAME} software that we authorize outside a fully executed enterprise
            agreement. Where a written contract exists, it prevails over conflicting language
            below.
          </p>

          <section className="mt-12 space-y-4 text-sm leading-relaxed text-dgray/85">
            <h2 className="text-base font-semibold text-navy">Contracting entity</h2>
            <p>
              Invoices, purchase orders, and legal notices identify the counterparty by the legal
              name and address printed on your governing agreement (order form, statement of work,
              or master services agreement). If you are engaging us before a contract is executed,
              preliminary materials from this site are non-binding until countersigned by both
              parties.
            </p>
          </section>

          <section className="mt-10 space-y-4 text-sm leading-relaxed text-dgray/85">
            <h2 className="text-base font-semibold text-navy">Permitted use</h2>
            <p>
              You may use the site to learn about {APP_NAME}, to initiate contact, and to navigate
              materials we intentionally publish. You may not attempt to disrupt the service,
              probe it for vulnerabilities without authorization, or misrepresent your affiliation.
            </p>
          </section>

          <section className="mt-10 space-y-4 text-sm leading-relaxed text-dgray/85">
            <h2 className="text-base font-semibold text-navy">Evaluation and pilot access</h2>
            <p>
              Access credentials issued for evaluation are confidential, non-transferable, and may
              be revoked at any time. Sample data, visualizations, and exports may be synthetic or
              anonymized and are provided to illustrate product behavior, not as operational advice,
              regulatory filings, or investment recommendations.
            </p>
          </section>

          <section className="mt-10 space-y-4 text-sm leading-relaxed text-dgray/85">
            <h2 className="text-base font-semibold text-navy">Intellectual property</h2>
            <p>
              {APP_NAME} retains all rights in software, documentation, and branding. Except for
              limited rights necessary to use the service as expressly authorized, no license is
              granted by implication.
            </p>
          </section>

          <section className="mt-10 space-y-4 text-sm leading-relaxed text-dgray/85">
            <h2 className="text-base font-semibold text-navy">Disclaimer</h2>
            <p>
              The site and evaluation environments are provided &ldquo;as is&rdquo; to the extent
              permitted by law. To the fullest extent permitted, {APP_NAME} disclaims warranties not
              expressly stated in a governing contract.
            </p>
          </section>

          <section className="mt-10 space-y-4 text-sm leading-relaxed text-dgray/85">
            <h2 className="text-base font-semibold text-navy">Disputes</h2>
            <p>
              Where a master services agreement or equivalent exists, its dispute resolution and
              governing law provisions apply. For other matters, we ask that you contact us first so
              we can resolve concerns commercially and quickly.
            </p>
            <p className="text-xs text-dgray/60">
              Procurement teams should rely on executed statements of work, data processing
              terms, and security exhibits, not on this summary alone.
            </p>
          </section>

          <p className="mt-14 text-xs text-dgray/55">
            Last updated April 2026. Questions:{" "}
            <a
              className="font-semibold text-navy underline decoration-navy/25 underline-offset-4 hover:decoration-navy/50"
              href={`mailto:${EMAIL_SUPPORT}?subject=${encodeURIComponent(`${APP_NAME}: terms question`)}`}
            >
              {EMAIL_SUPPORT}
            </a>
            .
          </p>

          <p className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <Link
              href="/security"
              className="font-semibold text-navy underline decoration-navy/25 underline-offset-4 hover:decoration-navy/50"
            >
              Security overview
            </Link>
            <Link
              href="/privacy"
              className="font-semibold text-navy underline decoration-navy/25 underline-offset-4 hover:decoration-navy/50"
            >
              Privacy notice
            </Link>
          </p>
        </article>
      </main>
  );
}
