import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mist: "#F8FAFC",
        ink: "#0F172A",
        slate2: "#475569",
        mint: { DEFAULT: "#16A34A", dark: "#15803D", tint: "#DCFCE7" },
        coral: { DEFAULT: "#DC2626", tint: "#FEE2E2" },
      },
      fontFamily: {
        sans: ["var(--font-bn)", "var(--font-en)", "sans-serif"],
        en: ["var(--font-en)", "var(--font-bn)", "sans-serif"],
      },
      boxShadow: { card: "0 1px 2px rgba(15,23,42,.05), 0 8px 24px -12px rgba(15,23,42,.12)" },
    },
  },
  plugins: [],
};
export default config;
