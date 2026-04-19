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
import { revenueTrend } from "@/lib/demo-executive-dashboard-data";
import { formatCurrency } from "@/lib/format";

function TooltipCard({
  active,
  payload,
}: {
  active?: boolean;
  payload?: Array<{ payload: { period: string; revenue: number } }>;
}) {
  if (!active || !payload?.length) return null;
  const row = payload[0]?.payload;
  if (!row) return null;
  return (
    <div className="rounded-lg border border-navy/10 bg-panel px-3 py-2 shadow-card">
      <p className="text-[11px] font-semibold uppercase tracking-wide text-dgray/55">
        {row.period}
      </p>
      <p className="mt-1 text-sm font-semibold tabular-nums text-navy">
        {formatCurrency(row.revenue)}
      </p>
    </div>
  );
}

export function RevenueTrendChart() {
  const data = revenueTrend.map((p) => ({ ...p }));

  return (
    <div className="h-[320px] w-full px-2 pb-2 pt-4 sm:h-[360px] sm:px-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="niRevenueFill" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor={chartTheme.gold}
                stopOpacity={0.35}
              />
              <stop
                offset="100%"
                stopColor={chartTheme.navy}
                stopOpacity={0.05}
              />
            </linearGradient>
            <linearGradient id="niRevenueStroke" x1="0" y1="0" x2="1" y2="0">
              <stop
                offset="0%"
                stopColor={chartTheme.navy}
                stopOpacity={0.95}
              />
              <stop
                offset="100%"
                stopColor={chartTheme.gold}
                stopOpacity={0.85}
              />
            </linearGradient>
          </defs>
          <CartesianGrid stroke={chartTheme.grid} vertical={false} />
          <XAxis
            dataKey="period"
            tickLine={false}
            axisLine={false}
            tick={{ fill: chartTheme.axis, fontSize: 12, fontWeight: 600 }}
            dy={8}
          />
          <YAxis
            tickFormatter={(v) =>
              formatCurrency(Number(v), { notation: "compact" })
            }
            width={64}
            tickLine={false}
            axisLine={false}
            tick={{ fill: chartTheme.axis, fontSize: 11, fontWeight: 600 }}
            dx={-4}
          />
          <Tooltip
            content={<TooltipCard />}
            cursor={{ stroke: chartTheme.navySoft }}
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="url(#niRevenueStroke)"
            strokeWidth={2.25}
            fill="url(#niRevenueFill)"
            activeDot={{ r: 5, strokeWidth: 0, fill: chartTheme.navy }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
