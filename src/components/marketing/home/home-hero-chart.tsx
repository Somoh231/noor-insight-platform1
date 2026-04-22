/**
 * Hairline editorial chart of LEC's commercial-loss trajectory,
 * 2022 to late 2024 (41.3% → 27.5%). Rendered as an inline SVG with
 * tabular values — the FT / Bloomberg register, not a product illustration.
 * Static server-rendered; no chart library, no animation library.
 *
 * TODO(cite): replace "Source forthcoming" once the underlying LEC / LERC
 * publication is attested (expected week of 2026-04-27).
 */
export function HomeHeroChart() {
  // --- Data (real figures from the positioning brief) ---
  const series = [
    { x: "2022", label: "2022", value: 41.3 },
    { x: "late-2024", label: "Late 2024", value: 27.5 },
  ] as const;

  // --- Chart geometry ---
  const VB_W = 480;
  const VB_H = 320;
  const PAD = { top: 40, right: 56, bottom: 56, left: 24 };
  const plotW = VB_W - PAD.left - PAD.right;
  const plotH = VB_H - PAD.top - PAD.bottom;

  const Y_MAX = 50;
  const yTicks = [0, 10, 20, 30, 40, 50];
  const yFor = (v: number) => PAD.top + plotH * (1 - v / Y_MAX);

  const xFor = (i: number) =>
    PAD.left + (plotW * i) / (series.length - 1);

  const points = series.map((d, i) => ({
    cx: xFor(i),
    cy: yFor(d.value),
    value: d.value,
    label: d.label,
  }));

  const linePath = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.cx} ${p.cy}`)
    .join(" ");

  return (
    <figure className="relative w-full">
      <div className="mb-4 flex items-baseline gap-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3">
          Figure · 01
        </span>
        <span className="h-px flex-1 bg-line-soft" aria-hidden />
      </div>

      <svg
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        role="img"
        aria-label="Line chart showing LEC commercial losses falling from 41.3 percent in 2022 to 27.5 percent in late 2024."
        className="block h-auto w-full"
      >
        {/* y-axis gridlines */}
        {yTicks.map((t) => (
          <g key={t}>
            <line
              x1={PAD.left}
              x2={VB_W - PAD.right}
              y1={yFor(t)}
              y2={yFor(t)}
              stroke={t === 0 ? "rgb(var(--color-line-rgb))" : "rgb(var(--color-line-soft-rgb))"}
              strokeWidth={1}
              shapeRendering="crispEdges"
            />
            <text
              x={VB_W - PAD.right + 8}
              y={yFor(t) + 4}
              fontFamily="var(--font-mono)"
              fontSize={11}
              fill="rgb(var(--color-ink-3-rgb))"
              letterSpacing="0.05em"
            >
              {t}%
            </text>
          </g>
        ))}

        {/* indicative baseline notation: "2019–2024 window" — no fabricated intermediate points */}
        <line
          x1={points[0].cx}
          y1={points[0].cy}
          x2={points[1].cx}
          y2={points[1].cy}
          stroke="rgb(var(--color-accent-rgb))"
          strokeWidth={1.5}
          strokeLinecap="round"
        />

        {/* datapoints */}
        {points.map((p, i) => (
          <g key={i}>
            <circle
              cx={p.cx}
              cy={p.cy}
              r={4}
              fill="rgb(var(--color-page-rgb))"
              stroke="rgb(var(--color-accent-rgb))"
              strokeWidth={1.5}
            />
            <text
              x={p.cx}
              y={p.cy - 14}
              textAnchor="middle"
              fontFamily="var(--font-serif)"
              fontSize={22}
              fontWeight={500}
              fill="rgb(var(--color-ink-rgb))"
              style={{ fontVariantNumeric: "tabular-nums lining-nums" }}
            >
              {p.value.toFixed(1)}%
            </text>
          </g>
        ))}

        {/* x-axis labels */}
        {points.map((p, i) => (
          <text
            key={i}
            x={p.cx}
            y={VB_H - PAD.bottom + 22}
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            fontSize={11}
            fill="rgb(var(--color-ink-3-rgb))"
            letterSpacing="0.08em"
            style={{ textTransform: "uppercase" }}
          >
            {p.label}
          </text>
        ))}

        {/* direction tick — small arrow between the two points implying improvement */}
        <text
          x={(points[0].cx + points[1].cx) / 2}
          y={(points[0].cy + points[1].cy) / 2 - 8}
          textAnchor="middle"
          fontFamily="var(--font-mono)"
          fontSize={11}
          fill="rgb(var(--color-ink-3-rgb))"
          letterSpacing="0.08em"
        >
          −13.8 pts
        </text>
      </svg>

      <figcaption className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-t border-line-soft pt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
        <span>LEC commercial losses · 2022 to late 2024</span>
        <span aria-hidden className="text-ink-4">·</span>
        <span className="text-ink-4">Source forthcoming</span>
      </figcaption>
    </figure>
  );
}
