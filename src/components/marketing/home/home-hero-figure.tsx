/**
 * Hero RHS: just the constellation of dots. The hairline grid that sits
 * behind them is a section-level background on <HomeHero>, not part of
 * this figure — so the grid reads as ambient background (RHG-style)
 * rather than a framed artifact.
 *
 * Three amber dots pulse quietly on a 3200 ms cycle with a soft halo
 * ring expanding on the same cycle. Fourteen ink-3 dots sit at
 * considered positions to give the composition asymmetric balance.
 */

const VB_W = 480;
const VB_H = 540;
const GRID = 40;

type Dot = { col: number; row: number };
type Pulse = Dot & { delay: number };

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

const pulseDots: readonly Pulse[] = [
  { col: 4, row: 3, delay: 0 },
  { col: 9, row: 5, delay: 900 },
  { col: 5, row: 10, delay: 1800 },
];

const toX = (col: number) => col * GRID;
const toY = (row: number) => row * GRID;

export function HomeHeroFigure() {
  return (
    <svg
      viewBox={`0 0 ${VB_W} ${VB_H}`}
      className="block h-auto w-full"
      role="img"
      aria-label="Composition of small dots across the hero background; three amber points pulse quietly."
    >
      {staticDots.map((d, i) => (
        <circle
          key={`s-${i}`}
          cx={toX(d.col)}
          cy={toY(d.row)}
          r={1.75}
          fill="rgb(var(--color-ink-3-rgb))"
        />
      ))}

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
  );
}
