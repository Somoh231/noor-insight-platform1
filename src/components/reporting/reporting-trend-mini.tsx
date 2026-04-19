"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { chartTheme } from "@/lib/dashboard-chart-theme";
import type { ReportingSeriesPoint } from "@/lib/demo-reporting-data";
import { formatInteger, formatPercent } from "@/lib/format";

type MetricKey = keyof Pick<
  ReportingSeriesPoint,
  "revenueRecovery" | "lossReduction" | "connections" | "outages"
>;

const formatters: Record<MetricKey, (v: number) => string> = {
  revenueRecovery: (v) => formatPercent(v),
  lossReduction: (v) => formatPercent(v),
  connections: (v) => formatInteger(v),
  outages: (v) => v.toFixed(2),
};

export function ReportingTrendMini({
  title,
  subtitle,
  data,
  dataKey,
}: {
  title: string;
  subtitle: string;
  data: readonly ReportingSeriesPoint[];
  dataKey: MetricKey;
}) {
  const rows = data.map((d) => ({ ...d }));

  return (
    <div className="rounded-2xl border border-navy/[0.07] bg-panel/90 p-4 shadow-sm ring-1 ring-navy/[0.03] sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-dgray/55">
            {title}
          </p>
          <p className="mt-2 text-xs leading-relaxed text-dgray/60">
            {subtitle}
          </p>
        </div>
      </div>
      <div className="mt-4 h-[170px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={rows}
            margin={{ top: 6, right: 6, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient
                id={`ni-${dataKey}-fill`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor={chartTheme.gold}
                  stopOpacity={0.28}
                />
                <stop
                  offset="100%"
                  stopColor={chartTheme.navy}
                  stopOpacity={0.06}
                />
              </linearGradient>
            </defs>
            <CartesianGrid stroke={chartTheme.grid} vertical={false} />
            <XAxis
              dataKey="period"
              tickLine={false}
              axisLine={false}
              tick={{ fill: chartTheme.axis, fontSize: 11, fontWeight: 700 }}
            />
            <YAxis
              width={44}
              tickLine={false}
              axisLine={false}
              tick={{ fill: chartTheme.axis, fontSize: 10, fontWeight: 700 }}
              tickFormatter={(v) => formatters[dataKey](Number(v))}
            />
            <Tooltip
              cursor={{ stroke: chartTheme.navySoft }}
              content={({ active, payload }) => {
                if (!active || !payload?.length) return null;
                const row = payload[0]?.payload as ReportingSeriesPoint;
                const val = Number(payload[0]?.value);
                return (
                  <div className="rounded-lg border border-navy/10 bg-panel px-3 py-2 shadow-card">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-dgray/55">
                      {row.period}
                    </p>
                    <p className="mt-1 text-sm font-semibold tabular-nums text-navy">
                      {formatters[dataKey](val)}
                    </p>
                  </div>
                );
              }}
            />
            <Area
              type="monotone"
              dataKey={dataKey}
              stroke={chartTheme.navy}
              strokeWidth={2}
              fill={`url(#ni-${dataKey}-fill)`}
              activeDot={{ r: 4, strokeWidth: 0, fill: chartTheme.gold }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
