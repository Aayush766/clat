import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef2f7",
          100: "#d6e0ec",
          200: "#adc1d9",
          300: "#7d9cc0",
          400: "#4d76a3",
          500: "#2f5580",
          600: "#1c3c63",
          700: "#152d4d",
          800: "#0f2444",
          900: "#0a1830",
          950: "#060f1e",
        },
        gold: {
          50: "#fdf8ec",
          100: "#faedc9",
          200: "#f4d98d",
          300: "#eec158",
          400: "#e6ab3a",
          500: "#d4a144",
          600: "#b8842c",
          700: "#946623",
          800: "#795123",
          900: "#664521",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(15, 36, 68, 0.15)",
        glass: "0 8px 32px 0 rgba(15, 36, 68, 0.12)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(212,161,68,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(212,161,68,0.06) 1px, transparent 1px)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
