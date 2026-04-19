import type { Metadata } from "next";
import { SectionHeading } from "@/components/marketing/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a structured briefing with Noor Insight. We work with utilities, ministries, regulators, and development partners.",
};

export default function ContactPage() {
  return (
      <main className="border-b border-navy/10 bg-panel">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Contact"
            title="Request a structured briefing"
            lead="Share your context (utility, role, and urgency). We will respond with a concise agenda and any prerequisites for a productive first conversation."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-start">
            <aside className="rounded-lg border border-navy/10 bg-lgray p-8 shadow-card lg:col-span-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
                Direct channels
              </p>
              <dl className="mt-6 space-y-5 text-sm">
                <div>
                  <dt className="font-semibold text-navy">Email</dt>
                  <dd className="mt-1">
                    <a
                      className="text-dgray/85 underline decoration-navy/20 underline-offset-4 transition hover:text-navy hover:decoration-navy/40"
                      href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Noor Insight: briefing request")}`}
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-navy">Response standard</dt>
                  <dd className="mt-1 leading-relaxed text-dgray/80">
                    Two business days for initial scheduling, faster when flagged
                    as time-sensitive procurement.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-navy">Meetings</dt>
                  <dd className="mt-1 leading-relaxed text-dgray/80">
                    Virtual and in-person sessions by arrangement (Monrovia ·
                    regional hubs).
                  </dd>
                </div>
              </dl>
            </aside>

            <div className="lg:col-span-7">
              <div className="rounded-lg border border-navy/10 bg-lgray/60 p-8 sm:p-9">
                <p className="text-sm font-semibold text-navy">
                  What to include in your note
                </p>
                <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-dgray/85">
                  <li>Utility / institution name and jurisdiction</li>
                  <li>
                    Primary objective (loss reduction, controls, reporting,
                    etc.)
                  </li>
                  <li>Current systems landscape (even if partial)</li>
                  <li>
                    Timeline constraints (procurement windows, board dates)
                  </li>
                </ul>
                <div className="mt-8">
                  <ButtonLink
                    href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Noor Insight: briefing request")}`}
                    variant="primary"
                    className="px-6 py-3"
                  >
                    Compose briefing email
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
  );
}
