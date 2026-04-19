"use client";

import type { ReportType } from "@/lib/demo-reporting-data";
import { reportingSeriesByType } from "@/lib/demo-reporting-data";
import { ReportingTrendMini } from "@/components/reporting/reporting-trend-mini";

export function ReportingTrendsSection({
  reportType,
}: {
  reportType: ReportType;
}) {
  const data = reportingSeriesByType[reportType];

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <ReportingTrendMini
        title="Revenue recovery"
        subtitle="Trailing window trend for recovered commercial revenue."
        data={data}
        dataKey="revenueRecovery"
      />
      <ReportingTrendMini
        title="Loss reduction"
        subtitle="Progress against reconciled loss baseline (commercial + technical)."
        data={data}
        dataKey="lossReduction"
      />
      <ReportingTrendMini
        title="Connections added"
        subtitle="Net new energized connections with valid metering posture."
        data={data}
        dataKey="connections"
      />
      <ReportingTrendMini
        title="Outage trends"
        subtitle="Pressure index trend (lower indicates improving reliability)."
        data={data}
        dataKey="outages"
      />
    </div>
  );
}
