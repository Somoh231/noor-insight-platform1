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
        page: rgb("--color-page-rgb"),
        surface: rgb("--color-surface-rgb"),
        "surface-sunk": rgb("--color-surface-sunk-rgb"),
        ink: rgb("--color-ink-rgb"),
        "ink-2": rgb("--color-ink-2-rgb"),
        "ink-3": rgb("--color-ink-3-rgb"),
        "ink-4": rgb("--color-ink-4-rgb"),
        line: rgb("--color-line-rgb"),
        "line-soft": rgb("--color-line-soft-rgb"),
        "line-strong": rgb("--color-line-strong-rgb"),
        accent: rgb("--color-accent-rgb"),
        "accent-hover": rgb("--color-accent-hover-rgb"),
        "accent-deep": rgb("--color-accent-deep-rgb"),
        "accent-tint": rgb("--color-accent-tint-rgb"),
        teal: rgb("--color-teal-rgb"),
        "teal-2": rgb("--color-teal-2-rgb"),
        "teal-3": rgb("--color-teal-3-rgb"),
        danger: rgb("--color-danger-rgb"),
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "Times New Roman", "serif"],
        sans: [
          "var(--font-sans)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SF Mono",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      fontSize: {
        eyebrow: ["var(--fs-eyebrow)", { lineHeight: "var(--lh-tight)", letterSpacing: "var(--tracking-eyebrow)" }],
        small: ["var(--fs-small)", { lineHeight: "1.55" }],
        body: ["var(--fs-body)", { lineHeight: "var(--lh-body)" }],
        "body-l": ["var(--fs-body-l)", { lineHeight: "var(--lh-body)" }],
        h3: ["var(--fs-h3)", { lineHeight: "var(--lh-heading)", letterSpacing: "-0.005em" }],
        h2: ["var(--fs-h2)", { lineHeight: "var(--lh-heading)" }],
        h1: ["var(--fs-h1)", { lineHeight: "var(--lh-heading)", letterSpacing: "-0.01em" }],
        "display-m": ["var(--fs-display-m)", { lineHeight: "var(--lh-display)", letterSpacing: "-0.01em" }],
        "display-l": ["var(--fs-display-l)", { lineHeight: "var(--lh-display)", letterSpacing: "-0.015em" }],
        "display-xl": ["var(--fs-display-xl)", { lineHeight: "var(--lh-display)", letterSpacing: "-0.02em" }],
      },
      letterSpacing: {
        eyebrow: "var(--tracking-eyebrow)",
      },
      maxWidth: {
        content: "var(--content-max)",
        measure: "var(--measure)",
      },
      spacing: {
        section: "var(--s-10)",
        "section-lg": "var(--s-11)",
        gutter: "var(--gutter)",
        outer: "var(--outer-margin)",
      },
      borderRadius: {
        none: "var(--radius-0)",
        control: "var(--radius-1)",
      },
      transitionTimingFunction: {
        standard: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transitionDuration: {
        quick: "120ms",
        settle: "180ms",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 180ms cubic-bezier(0.4, 0, 0.2, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
