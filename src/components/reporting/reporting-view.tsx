"use client";

import { useMemo, useState } from "react";
import { ReportingExportBar } from "@/components/reporting/reporting-export-bar";
import { ReportingKpiGrid } from "@/components/reporting/reporting-kpi-grid";
import { ReportingTrendsSection } from "@/components/reporting/reporting-trends-section";
import { ReportTypeSelector } from "@/components/reporting/report-type-selector";
import { PlatformPageHeader } from "@/components/ui/platform-page-header";
import {
  kpisByReportType,
  reportTypes,
  type ReportType,
} from "@/lib/demo-reporting-data";

export function ReportingView() {
  const [reportType, setReportType] = useState<ReportType>("DONOR_PACK");

  const kpis = useMemo(() => kpisByReportType[reportType], [reportType]);
  const label = useMemo(
    () => reportTypes.find((r) => r.id === reportType)?.label ?? "Report",
    [reportType]
  );

  return (
    <div className="mx-auto w-full max-w-[1480px] space-y-8 pb-10">
      <PlatformPageHeader
        kicker="Governance reporting"
        title="Reporting"
        description="Generate defensible packs with consistent definitions, so donors, regulators, and internal leadership read the same underlying truth."
        badges={
          <>
            <span className="rounded-full border border-navy/10 bg-panel px-3 py-1 text-xs font-semibold text-navy/75">
              Metric lineage
            </span>
            <span className="rounded-full border border-gold/25 bg-gold/10 px-3 py-1 text-xs font-semibold text-navy">
              Preview build
            </span>
          </>
        }
      />

      <div className="space-y-2">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-dgray/50">
          Report type
        </p>
        <ReportTypeSelector value={reportType} onChange={setReportType} />
      </div>

      <div className="space-y-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-dgray/50">
          Key outcomes
        </p>
        <ReportingKpiGrid kpis={kpis} />
      </div>

      <div className="space-y-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-dgray/50">
          Trend analysis
        </p>
        <ReportingTrendsSection reportType={reportType} />
      </div>

      <ReportingExportBar reportLabel={label} />

      <p className="text-center text-[11px] leading-relaxed text-dgray/50">
        Trend series are representative for evaluation. Production packs bind to governed warehouse
        facts, approval workflows, and immutable audit logs.
      </p>
    </div>
  );
}
