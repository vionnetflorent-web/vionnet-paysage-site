import type { Config } from "tailwindcss";

// Design tokens for Vionnet Paysage.
// Keep this file as the single source of truth for colors/fonts so the
// design stays consistent as new pages/components are added.
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Reads from a CSS variable so the accent stays easy to retheme
        // (see app/globals.css :root).
        accent: "var(--accent-color)",
        ink: "#1b1b1a",
        stone: "#efedea",
        forest: "#12352a",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-jost)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
