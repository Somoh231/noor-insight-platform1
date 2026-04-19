/**
 * Abstract “control room” visualization: geometric, print-safe, token-aligned.
 * Intentionally non-interactive (decorative).
 */
export function HeroDataIllustration() {
  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-navy/10 bg-panel/90 shadow-soft ring-1 ring-navy/[0.04] transition duration-300 ease-out group-hover/illustration:-translate-y-px group-hover/illustration:shadow-card-hover group-hover/illustration:ring-navy/[0.08]"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgb(26_60_94/0.04)_0%,transparent_42%,rgb(196_154_42/0.06)_100%)]" />
      <svg
        viewBox="0 0 440 300"
        className="relative h-auto w-full text-navy"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="ni-bar" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="rgb(26 60 94)" stopOpacity="0.92" />
            <stop offset="1" stopColor="rgb(26 60 94)" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="ni-gold" x1="0" y1="0" x2="1" y2="0">
            <stop stopColor="rgb(196 154 42)" stopOpacity="0.95" />
            <stop offset="1" stopColor="rgb(196 154 42)" stopOpacity="0.35" />
          </linearGradient>
          <filter
            id="ni-soft"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur stdDeviation="0.8" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect
          x="28"
          y="28"
          width="384"
          height="244"
          rx="14"
          className="fill-lgray/70 stroke-navy/[0.08]"
          strokeWidth="1"
        />

        {/* Grid */}
        {Array.from({ length: 7 }).map((_, i) => (
          <line
            key={`g-${i}`}
            x1="52"
            y1={64 + i * 28}
            x2="388"
            y2={64 + i * 28}
            className="stroke-navy/[0.06]"
            strokeWidth="1"
          />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <line
            key={`v-${i}`}
            x1={72 + i * 36}
            y1="56"
            x2={72 + i * 36}
            y2="244"
            className="stroke-navy/[0.05]"
            strokeWidth="1"
          />
        ))}

        {/* KPI tiles */}
        <rect
          x="56"
          y="44"
          width="118"
          height="34"
          rx="8"
          className="fill-panel stroke-navy/[0.08]"
        />
        <rect
          x="184"
          y="44"
          width="118"
          height="34"
          rx="8"
          className="fill-panel stroke-navy/[0.08]"
        />
        <rect
          x="312"
          y="44"
          width="88"
          height="34"
          rx="8"
          className="fill-navy/[0.06] stroke-navy/[0.08]"
        />
        <rect
          x="62"
          y="54"
          width="40"
          height="4"
          rx="2"
          className="fill-navy/25"
        />
        <rect
          x="190"
          y="54"
          width="52"
          height="4"
          rx="2"
          className="fill-navy/25"
        />
        <rect
          x="318"
          y="54"
          width="28"
          height="4"
          rx="2"
          className="fill-gold/70"
        />

        {/* Bars */}
        <rect
          x="72"
          y="176"
          width="26"
          height="56"
          rx="5"
          fill="url(#ni-bar)"
        />
        <rect
          x="112"
          y="152"
          width="26"
          height="80"
          rx="5"
          fill="url(#ni-bar)"
        />
        <rect
          x="152"
          y="164"
          width="26"
          height="68"
          rx="5"
          fill="url(#ni-bar)"
        />
        <rect
          x="192"
          y="132"
          width="26"
          height="100"
          rx="5"
          fill="url(#ni-bar)"
        />
        <rect
          x="232"
          y="148"
          width="26"
          height="84"
          rx="5"
          fill="url(#ni-bar)"
        />
        <rect
          x="272"
          y="120"
          width="26"
          height="112"
          rx="5"
          fill="url(#ni-bar)"
        />
        <rect
          x="312"
          y="140"
          width="26"
          height="92"
          rx="5"
          fill="url(#ni-bar)"
        />
        <rect
          x="352"
          y="168"
          width="26"
          height="64"
          rx="5"
          fill="url(#ni-bar)"
        />

        {/* Trend line */}
        <path
          d="M 72 214 C 120 198 150 150 210 138 S 300 120 360 104"
          stroke="url(#ni-gold)"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#ni-soft)"
          opacity="0.95"
        />

        {/* Points */}
        {[
          [72, 214],
          [150, 168],
          [210, 138],
          [270, 124],
          [330, 112],
          [360, 104],
        ].map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r="4.5"
            className="fill-lgray stroke-gold"
            strokeWidth="2"
          />
        ))}

        {/* Legend strip */}
        <rect
          x="56"
          y="252"
          width="328"
          height="10"
          rx="5"
          className="fill-navy/[0.06]"
        />
        <rect
          x="56"
          y="252"
          width="132"
          height="10"
          rx="5"
          className="fill-gold/55"
        />
      </svg>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-navy/10 to-transparent" />
    </div>
  );
}
