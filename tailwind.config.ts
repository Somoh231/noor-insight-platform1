import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    /** Shared class strings (button/input recipes) live here — must be scanned or utilities purge. */
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "rgb(var(--color-navy-rgb) / <alpha-value>)",
        gold: "rgb(var(--color-gold-rgb) / <alpha-value>)",
        dgray: "rgb(var(--color-dgray-rgb) / <alpha-value>)",
        lgray: "rgb(var(--color-lgray-rgb) / <alpha-value>)",
        panel: "rgb(var(--color-panel-rgb) / <alpha-value>)",
        forest: "rgb(var(--color-forest-rgb) / <alpha-value>)",
        "risk-safe": "rgb(var(--color-risk-safe-rgb) / <alpha-value>)",
        "risk-watch": "rgb(var(--color-risk-watch-rgb) / <alpha-value>)",
        "risk-critical": "rgb(var(--color-risk-critical-rgb) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-sm": [
          "2.25rem",
          { lineHeight: "1.08", letterSpacing: "-0.025em" },
        ],
        display: ["2.75rem", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-lg": [
          "3.35rem",
          { lineHeight: "1.02", letterSpacing: "-0.035em" },
        ],
      },
      boxShadow: {
        card: "var(--shadow-card)",
        "card-hover": "var(--shadow-card-hover)",
        soft: "var(--shadow-soft)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        250: "250ms",
        400: "400ms",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 320ms ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
