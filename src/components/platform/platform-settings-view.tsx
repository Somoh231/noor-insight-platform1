"use client";

import { DashboardPanel } from "@/components/dashboard/dashboard-panel";
import { PlatformPageHeader } from "@/components/ui/platform-page-header";
import { EMAIL_SUPPORT } from "@/lib/constants";

const sections = [
  {
    title: "Tenant & environment",
    body: "Production tenants lock to a single region, KMS-backed secrets, and audited admin roles. Evaluation builds stay on anonymized extracts.",
  },
  {
    title: "Notifications & approvals",
    body: "Route revenue recovery waves, upload failures, and regulator packs through Slack, email, or ServiceNow with immutable acknowledgment logs.",
  },
  {
    title: "Data retention",
    body: "Configurable retention for raw uploads vs. curated facts—aligns to your legal hold and national data residency policies.",
  },
] as const;

export function PlatformSettingsView() {
  return (
    <div className="mx-auto w-full max-w-[1480px] space-y-8 pb-10">
      <PlatformPageHeader
        kicker="Settings"
        title="Govern how Noor Insight runs inside your enterprise"
        description="Controls here are representative for evaluation. Deployed environments integrate with your IdP, SIEM, and change-management workflows."
        badges={
          <span className="rounded-full border border-navy/10 bg-lgray px-3 py-1 text-xs font-semibold text-navy/80">
            Prototype
          </span>
        }
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {sections.map((s) => (
          <DashboardPanel key={s.title} title={s.title}>
            <p className="px-6 py-5 text-sm leading-relaxed text-dgray/75">{s.body}</p>
          </DashboardPanel>
        ))}
      </div>

      <DashboardPanel title="Support & escalation">
        <div className="px-6 py-5">
          <p className="text-sm leading-relaxed text-dgray/75">
            For product issues, integration questions, and evaluation-environment help, contact the
            support desk. Enterprise customers receive routing under contract SLAs.
          </p>
          <a
            href={`mailto:${EMAIL_SUPPORT}?subject=${encodeURIComponent("Noor Insight Platform: support request")}`}
            className="mt-4 inline-flex text-sm font-semibold text-navy underline decoration-gold/40 underline-offset-4 transition hover:decoration-gold"
          >
            {EMAIL_SUPPORT}
          </a>
        </div>
      </DashboardPanel>
    </div>
  );
}
