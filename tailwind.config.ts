import type { Config } from "tailwindcss";

const rgb = (v: string) => `rgb(var(${v}) / <alpha-value>)`;

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: rgb("--color-ink-rgb"),
        "ink-soft": rgb("--color-ink-soft-rgb"),
        muted: rgb("--color-muted-rgb"),
        "muted-2": rgb("--color-muted-2-rgb"),
        rule: rgb("--color-rule-rgb"),
        "rule-strong": rgb("--color-rule-strong-rgb"),
        paper: rgb("--color-paper-rgb"),
        "paper-soft": rgb("--color-paper-soft-rgb"),
        "paper-sunk": rgb("--color-paper-sunk-rgb"),
        ember: rgb("--color-ember-rgb"),
        "ember-deep": rgb("--color-ember-deep-rgb"),
        "ember-wash": rgb("--color-ember-wash-rgb"),
        reconciled: rgb("--color-reconciled-rgb"),
        "reconciled-wash": rgb("--color-reconciled-wash-rgb"),
        variance: rgb("--color-variance-rgb"),
        "variance-wash": rgb("--color-variance-wash-rgb"),
        caution: rgb("--color-caution-rgb"),
        "caution-wash": rgb("--color-caution-wash-rgb"),
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Noto Serif", "Georgia", "serif"],
        sans: [
          "var(--font-sans)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "var(--font-mono)",
          "SF Mono",
          "ui-monospace",
          "Menlo",
          "monospace",
        ],
      },
      fontSize: {
        xxs: ["var(--fs-xxs)", { lineHeight: "var(--lh-normal)" }],
        xs: ["var(--fs-xs)", { lineHeight: "var(--lh-normal)" }],
        sm: ["var(--fs-sm)", { lineHeight: "var(--lh-normal)" }],
        base: ["var(--fs-base)", { lineHeight: "var(--lh-normal)" }],
        md: ["var(--fs-md)", { lineHeight: "var(--lh-normal)" }],
        lg: ["var(--fs-lg)", { lineHeight: "var(--lh-normal)" }],
        xl: ["var(--fs-xl)", { lineHeight: "var(--lh-snug)" }],
        "2xl": ["var(--fs-2xl)", { lineHeight: "var(--lh-snug)" }],
        "3xl": ["var(--fs-3xl)", { lineHeight: "var(--lh-tight)", letterSpacing: "-0.01em" }],
        "4xl": ["var(--fs-4xl)", { lineHeight: "var(--lh-tight)", letterSpacing: "-0.015em" }],
        "5xl": ["var(--fs-5xl)", { lineHeight: "1.0", letterSpacing: "-0.02em" }],
      },
      letterSpacing: {
        kicker: "var(--tracking-kicker)",
      },
      maxWidth: {
        content: "var(--content-max)",
        "measure-body": "var(--measure-body)",
        "measure-table": "var(--measure-table)",
      },
      spacing: {
        outer: "var(--outer-margin)",
      },
      borderRadius: {
        none: "var(--rad-0)",
        xs: "var(--rad-1)",
        sm: "var(--rad-2)",
        md: "var(--rad-3)",
        pill: "var(--rad-pill)",
      },
      boxShadow: {
        menu: "var(--shadow-menu)",
        tip: "var(--shadow-tip)",
      },
      transitionTimingFunction: {
        standard: "cubic-bezier(0.2, 0, 0, 1)",
      },
      transitionDuration: {
        fast: "120ms",
        med: "200ms",
        slow: "400ms",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 200ms cubic-bezier(0.2, 0, 0, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
