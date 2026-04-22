/**
 * Hero RHS: hairline grid background with a single-line distribution
 * schematic laid over it, plus three quietly pulsing signal dots at
 * transformer nodes. Brief permits both:
 *   - "schematic diagrams of distribution feeders or reporting flows,
 *      rendered in hairline strokes against the page color";
 *   - "typographic compositions (large numbers, pull quotes) treated
 *      as imagery".
 *
 * No chart machinery. No fabricated product UI. No gradients. The
 * schematic is illustrative of a generic electricity distribution
 * network — the shape that Noor Insight's work wraps around.
 */

const VB_W = 480;
const VB_H = 540;
const GRID = 40;

export function HomeHeroFigure() {
  // -- Feeder geometry: 3 feeders branching from an 11 kV busbar.
  //    Each feeder carries an ordered sequence of distribution
  //    transformers; each transformer serves 3–5 customer dots below.
  const feeders = [
    { x: 80, transformers: 4, customersPerTx: 4, label: "FEEDER 01" },
    { x: 240, transformers: 3, customersPerTx: 5, label: "FEEDER 02" },
    { x: 400, transformers: 4, customersPerTx: 3, label: "FEEDER 03" },
  ] as const;

  // three stable, hand-picked signal-dot positions
  const signalDots = [
    { feederIdx: 0, txIdx: 2, delay: 0 },
    { feederIdx: 1, txIdx: 1, delay: 900 },
    { feederIdx: 2, txIdx: 3, delay: 1800 },
  ] as const;

  // y-coordinates of fixed features
  const yTransmission = 48;
  const ySubstationTop = 84;
  const ySubstationBot = 116;
  const yBusbar = 160;
  const yFeederStart = yBusbar;
  const yTransformerRow = 260;
  const yCustomerRow = 316;

  const txSpacing = 28; // distance between transformers along a feeder
  const custSpacing = 10;

  const signalPoints = signalDots.map(({ feederIdx, txIdx, delay }) => {
    const feeder = feeders[feederIdx];
    const xOffset = (txIdx - (feeder.transformers - 1) / 2) * txSpacing;
    return { cx: feeder.x + xOffset, cy: yTransformerRow, delay };
  });

  return (
    <figure className="relative w-full">
      <div className="mb-4 flex items-baseline gap-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3">
          Figure · 01 · Distribution schematic
        </span>
        <span className="h-px flex-1 bg-line-soft" aria-hidden />
      </div>

      <div className="relative border border-line bg-page">
        <svg
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          className="block h-auto w-full"
          role="img"
          aria-label="Illustrative single-line diagram of an electricity distribution network: transmission, substation, 11 kV busbar, three feeders with distribution transformers and customer service drops."
        >
          {/* Hairline grid background (RHG-style) */}
          <defs>
            <pattern
              id="ni-hero-grid"
              width={GRID}
              height={GRID}
              patternUnits="userSpaceOnUse"
            >
              <path
                d={`M ${GRID} 0 L 0 0 0 ${GRID}`}
                fill="none"
                stroke="rgb(var(--color-line-soft-rgb))"
                strokeWidth={1}
                shapeRendering="crispEdges"
              />
            </pattern>
          </defs>
          <rect width={VB_W} height={VB_H} fill="url(#ni-hero-grid)" />

          {/* ========== Transmission in ========== */}
          <g stroke="rgb(var(--color-ink-rgb))" strokeWidth={1.25}>
            <line
              x1={VB_W / 2 - 36}
              y1={yTransmission}
              x2={VB_W / 2 + 36}
              y2={yTransmission}
            />
            {/* insulator ticks */}
            {[-24, -8, 8, 24].map((dx) => (
              <line
                key={dx}
                x1={VB_W / 2 + dx}
                y1={yTransmission - 5}
                x2={VB_W / 2 + dx}
                y2={yTransmission + 5}
              />
            ))}
            {/* drop to substation */}
            <line
              x1={VB_W / 2}
              y1={yTransmission}
              x2={VB_W / 2}
              y2={ySubstationTop}
            />
          </g>
          <text
            x={VB_W / 2 + 48}
            y={yTransmission + 4}
            fontFamily="var(--font-mono)"
            fontSize={10}
            letterSpacing="0.14em"
            fill="rgb(var(--color-ink-3-rgb))"
            style={{ textTransform: "uppercase" }}
          >
            132 kV
          </text>

          {/* ========== Substation ========== */}
          <g>
            <rect
              x={VB_W / 2 - 56}
              y={ySubstationTop}
              width={112}
              height={32}
              fill="rgb(var(--color-page-rgb))"
              stroke="rgb(var(--color-ink-rgb))"
              strokeWidth={1.25}
            />
            {/* transformer symbol: two overlapping circles */}
            <g
              fill="none"
              stroke="rgb(var(--color-ink-rgb))"
              strokeWidth={1.25}
            >
              <circle cx={VB_W / 2 - 8} cy={ySubstationTop + 16} r={7} />
              <circle cx={VB_W / 2 + 8} cy={ySubstationTop + 16} r={7} />
            </g>
            <text
              x={VB_W / 2 + 22}
              y={ySubstationTop + 19}
              fontFamily="var(--font-mono)"
              fontSize={10}
              letterSpacing="0.14em"
              fill="rgb(var(--color-ink-2-rgb))"
              style={{ textTransform: "uppercase" }}
            >
              SUB-A
            </text>
            {/* drop to busbar */}
            <line
              x1={VB_W / 2}
              y1={ySubstationBot}
              x2={VB_W / 2}
              y2={yBusbar}
              stroke="rgb(var(--color-ink-rgb))"
              strokeWidth={1.25}
            />
          </g>

          {/* ========== 11 kV busbar ========== */}
          <line
            x1={48}
            y1={yBusbar}
            x2={VB_W - 48}
            y2={yBusbar}
            stroke="rgb(var(--color-ink-rgb))"
            strokeWidth={1.5}
            shapeRendering="crispEdges"
          />
          <text
            x={48}
            y={yBusbar - 8}
            fontFamily="var(--font-mono)"
            fontSize={10}
            letterSpacing="0.14em"
            fill="rgb(var(--color-ink-3-rgb))"
            style={{ textTransform: "uppercase" }}
          >
            11 kV bus
          </text>

          {/* ========== Feeders ========== */}
          {feeders.map((feeder, fi) => {
            const xStart =
              feeder.x - ((feeder.transformers - 1) * txSpacing) / 2;
            return (
              <g key={feeder.label}>
                {/* vertical feeder drop */}
                <line
                  x1={feeder.x}
                  y1={yFeederStart}
                  x2={feeder.x}
                  y2={yTransformerRow - 24}
                  stroke="rgb(var(--color-ink-rgb))"
                  strokeWidth={1.25}
                />
                {/* protection diamond (breaker/switch) */}
                <g
                  transform={`translate(${feeder.x} ${yFeederStart + 32}) rotate(45)`}
                  fill="rgb(var(--color-page-rgb))"
                  stroke="rgb(var(--color-ink-rgb))"
                  strokeWidth={1.25}
                >
                  <rect x={-5} y={-5} width={10} height={10} />
                </g>
                {/* horizontal branch across transformers */}
                <line
                  x1={xStart}
                  y1={yTransformerRow - 24}
                  x2={xStart + (feeder.transformers - 1) * txSpacing}
                  y2={yTransformerRow - 24}
                  stroke="rgb(var(--color-ink-rgb))"
                  strokeWidth={1.25}
                />
                {/* transformer tees + symbols */}
                {Array.from({ length: feeder.transformers }).map((_, ti) => {
                  const x = xStart + ti * txSpacing;
                  return (
                    <g key={ti}>
                      <line
                        x1={x}
                        y1={yTransformerRow - 24}
                        x2={x}
                        y2={yTransformerRow - 6}
                        stroke="rgb(var(--color-ink-rgb))"
                        strokeWidth={1.25}
                      />
                      <circle
                        cx={x}
                        cy={yTransformerRow}
                        r={5}
                        fill="rgb(var(--color-page-rgb))"
                        stroke="rgb(var(--color-ink-rgb))"
                        strokeWidth={1.25}
                      />
                      {/* service drop to customer row */}
                      <line
                        x1={x}
                        y1={yTransformerRow + 5}
                        x2={x}
                        y2={yCustomerRow - 6}
                        stroke="rgb(var(--color-ink-3-rgb))"
                        strokeWidth={1}
                      />
                      {/* customer dots fanning out */}
                      {Array.from({ length: feeder.customersPerTx }).map(
                        (_, ci) => {
                          const cx =
                            x +
                            (ci - (feeder.customersPerTx - 1) / 2) *
                              custSpacing;
                          return (
                            <circle
                              key={ci}
                              cx={cx}
                              cy={yCustomerRow + 2}
                              r={1.4}
                              fill="rgb(var(--color-ink-3-rgb))"
                            />
                          );
                        },
                      )}
                    </g>
                  );
                })}
                {/* feeder label */}
                <text
                  x={feeder.x}
                  y={yCustomerRow + 34}
                  textAnchor="middle"
                  fontFamily="var(--font-mono)"
                  fontSize={10}
                  letterSpacing="0.16em"
                  fill="rgb(var(--color-ink-3-rgb))"
                  style={{ textTransform: "uppercase" }}
                >
                  {feeder.label}
                </text>
              </g>
            );
          })}

          {/* ========== Signal dots (pulsing) ========== */}
          {signalPoints.map((p, i) => (
            <g key={i}>
              <circle
                cx={p.cx}
                cy={p.cy}
                r={3.5}
                className="ni-signal-dot"
                style={{ animationDelay: `${p.delay}ms` } as React.CSSProperties}
                fill="rgb(var(--color-accent-rgb))"
              />
            </g>
          ))}

          {/* ========== Bottom legend band ========== */}
          <g>
            <line
              x1={24}
              y1={VB_H - 72}
              x2={VB_W - 24}
              y2={VB_H - 72}
              stroke="rgb(var(--color-line-rgb))"
              strokeWidth={1}
              shapeRendering="crispEdges"
            />
            <LegendItem
              x={40}
              y={VB_H - 48}
              label="Substation"
              swatch={(cx, cy) => (
                <rect
                  x={cx - 6}
                  y={cy - 4}
                  width={12}
                  height={8}
                  fill="rgb(var(--color-page-rgb))"
                  stroke="rgb(var(--color-ink-rgb))"
                  strokeWidth={1.25}
                />
              )}
            />
            <LegendItem
              x={160}
              y={VB_H - 48}
              label="Transformer"
              swatch={(cx, cy) => (
                <circle
                  cx={cx}
                  cy={cy}
                  r={5}
                  fill="rgb(var(--color-page-rgb))"
                  stroke="rgb(var(--color-ink-rgb))"
                  strokeWidth={1.25}
                />
              )}
            />
            <LegendItem
              x={288}
              y={VB_H - 48}
              label="Customer"
              swatch={(cx, cy) => (
                <circle
                  cx={cx}
                  cy={cy}
                  r={1.6}
                  fill="rgb(var(--color-ink-3-rgb))"
                />
              )}
            />
            <LegendItem
              x={396}
              y={VB_H - 48}
              label="Signal"
              swatch={(cx, cy) => (
                <circle
                  cx={cx}
                  cy={cy}
                  r={3.5}
                  fill="rgb(var(--color-accent-rgb))"
                />
              )}
            />
          </g>
        </svg>
      </div>

      <figcaption className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3">
        <span>Illustrative — not a specific feeder on the LEC network.</span>
        <span aria-hidden className="text-ink-4">·</span>
        <span className="text-ink-4">Figure prepared by Noor Insight</span>
      </figcaption>
    </figure>
  );
}

function LegendItem({
  x,
  y,
  label,
  swatch,
}: {
  x: number;
  y: number;
  label: string;
  swatch: (cx: number, cy: number) => React.ReactNode;
}) {
  return (
    <g>
      {swatch(x, y)}
      <text
        x={x + 14}
        y={y + 3}
        fontFamily="var(--font-mono)"
        fontSize={10}
        letterSpacing="0.14em"
        fill="rgb(var(--color-ink-3-rgb))"
        style={{ textTransform: "uppercase" }}
      >
        {label}
      </text>
    </g>
  );
}
