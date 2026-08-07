import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "var(--color-cream)",
        forest: "var(--color-forest)",
        charcoal: "var(--color-charcoal)",
        gold: "var(--color-gold)",
        burgundy: "var(--color-burgundy)",
        ivory: "var(--color-ivory-line)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "Georgia", "serif"],
      },
      letterSpacing: {
        brand: "0.18em",
        label: "0.22em",
      },
      maxWidth: {
        editorial: "1200px",
      },
      boxShadow: {
        soft: "0 24px 60px rgba(26, 26, 26, 0.08)",
        gold: "0 12px 40px rgba(176, 141, 87, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
