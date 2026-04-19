"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { chartTheme } from "@/lib/dashboard-chart-theme";
import { completionsLast7Days } from "@/lib/demo-field-operations-data";

export function CompletionThroughputChart() {
  const data = completionsLast7Days.map((d) => ({ ...d }));

  return (
    <div className="h-[190px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid stroke={chartTheme.grid} vertical={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tick={{ fill: chartTheme.axis, fontSize: 11, fontWeight: 700 }}
          />
          <YAxis
            width={34}
            tickLine={false}
            axisLine={false}
            tick={{ fill: chartTheme.axis, fontSize: 11, fontWeight: 700 }}
            allowDecimals={false}
          />
          <Tooltip
            cursor={{ fill: chartTheme.navySoft }}
            content={({ active, payload }) => {
              if (!active || !payload?.length) return null;
              const row = payload[0]?.payload as {
                day: string;
                completed: number;
              };
              return (
                <div className="rounded-lg border border-navy/10 bg-panel px-3 py-2 shadow-card">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-dgray/55">
                    Shift
                  </p>
                  <p className="mt-1 text-sm font-semibold tabular-nums text-navy">
                    {row.completed} completed
                  </p>
                </div>
              );
            }}
          />
          <Bar
            dataKey="completed"
            radius={[10, 10, 0, 0]}
            fill={chartTheme.navy}
            opacity={0.9}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
