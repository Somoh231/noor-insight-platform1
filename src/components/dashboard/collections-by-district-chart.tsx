"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { chartTheme } from "@/lib/dashboard-chart-theme";
import { collectionsByDistrict } from "@/lib/demo-executive-dashboard-data";
import { formatCurrency } from "@/lib/format";

function TooltipCard({
  active,
  payload,
}: {
  active?: boolean;
  payload?: Array<{ payload: { district: string; amount: number } }>;
}) {
  if (!active || !payload?.length) return null;
  const row = payload[0]?.payload;
  if (!row) return null;
  return (
    <div className="rounded-lg border border-navy/10 bg-panel px-3 py-2 shadow-card">
      <p className="text-[11px] font-semibold uppercase tracking-wide text-dgray/55">
        {row.district}
      </p>
      <p className="mt-1 text-sm font-semibold tabular-nums text-navy">
        {formatCurrency(row.amount)}
      </p>
    </div>
  );
}

export function CollectionsByDistrictChart() {
  const data = collectionsByDistrict.map((d) => ({ ...d }));

  return (
    <div className="h-[320px] w-full px-2 pb-2 pt-4 sm:h-[340px] sm:px-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 8, right: 28, left: 8, bottom: 8 }}
        >
          <CartesianGrid stroke={chartTheme.grid} horizontal={false} />
          <XAxis
            type="number"
            tickFormatter={(v) =>
              formatCurrency(Number(v), { notation: "compact" })
            }
            tickLine={false}
            axisLine={false}
            tick={{ fill: chartTheme.axis, fontSize: 11, fontWeight: 600 }}
          />
          <YAxis
            type="category"
            dataKey="district"
            width={150}
            tickLine={false}
            axisLine={false}
            tick={{ fill: chartTheme.axis, fontSize: 12, fontWeight: 600 }}
          />
          <Tooltip
            content={<TooltipCard />}
            cursor={{ fill: chartTheme.navySoft }}
          />
          <Bar
            dataKey="amount"
            radius={[0, 10, 10, 0]}
            fill={chartTheme.navy}
            maxBarSize={18}
            opacity={0.92}
          >
            <LabelList
              dataKey="amount"
              position="right"
              formatter={(v) =>
                formatCurrency(typeof v === "number" ? v : Number(v), {
                  notation: "compact",
                })
              }
              style={{
                fill: chartTheme.navyMuted,
                fontSize: 11,
                fontWeight: 700,
              }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
