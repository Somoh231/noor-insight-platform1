/**
 * Hero RHS: a constellation of dots on a hairline grid. Nothing literal —
 * no diagram, no chart, no numerals. Fourteen dark dots sit at grid
 * intersections in a considered, asymmetric field; three amber dots pulse
 * quietly at positions chosen to anchor the composition visually. The
 * brand metaphor is light (Noor = light); the motion is three points of
 * light breathing against a paper field.
 */

const VB_W = 480;
const VB_H = 540;
const GRID = 40;

type Dot = { col: number; row: number };
type Pulse = Dot & { delay: number };

// Hand-placed asymmetric field. Positions chosen for balance, not meaning.
const staticDots: readonly Dot[] = [
  { col: 2, row: 2 },
  { col: 7, row: 1 },
  { col: 10, row: 3 },
  { col: 1, row: 5 },
  { col: 6, row: 6 },
  { col: 11, row: 7 },
  { col: 3, row: 8 },
  { col: 8, row: 9 },
  { col: 2, row: 10 },
  { col: 10, row: 11 },
  { col: 5, row: 12 },
  { col: 7, row: 4 },
  { col: 4, row: 6 },
  { col: 9, row: 12 },
];

// Three amber points positioned roughly on the rule of thirds,
// forming a shallow asymmetric triangle.
const pulseDots: readonly Pulse[] = [
  { col: 4, row: 3, delay: 0 },
  { col: 9, row: 5, delay: 900 },
  { col: 5, row: 10, delay: 1800 },
];

const toX = (col: number) => col * GRID;
const toY = (row: number) => row * GRID;

export function HomeHeroFigure() {
  return (
    <figure className="relative w-full">
      <div className="mb-4 flex items-baseline gap-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3">
          Figure · 01
        </span>
        <span className="h-px flex-1 bg-line-soft" aria-hidden />
      </div>

      <div className="relative border border-line bg-page">
        <svg
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          className="block h-auto w-full"
          role="img"
          aria-label="Composition of small dots on a hairline grid; three dots in warm amber pulse quietly."
        >
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

          {/* Static dots */}
          {staticDots.map((d, i) => (
            <circle
              key={`s-${i}`}
              cx={toX(d.col)}
              cy={toY(d.row)}
              r={1.75}
              fill="rgb(var(--color-ink-3-rgb))"
            />
          ))}

          {/* Amber pulsing dots, plus a very faint halo ring behind each */}
          {pulseDots.map((d, i) => {
            const cx = toX(d.col);
            const cy = toY(d.row);
            return (
              <g key={`p-${i}`}>
                <circle
                  cx={cx}
                  cy={cy}
                  r={10}
                  fill="none"
                  stroke="rgb(var(--color-accent-rgb))"
                  strokeWidth={0.5}
                  className="ni-signal-halo"
                  style={{ animationDelay: `${d.delay}ms` } as React.CSSProperties}
                />
                <circle
                  cx={cx}
                  cy={cy}
                  r={3.5}
                  fill="rgb(var(--color-accent-rgb))"
                  className="ni-signal-dot"
                  style={{ animationDelay: `${d.delay}ms` } as React.CSSProperties}
                />
              </g>
            );
          })}
        </svg>
      </div>
    </figure>
  );
}
