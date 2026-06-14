import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Neutral couture palette — black, off-white (écru), stone grays.
        ink: "#0B0B0B",
        carbon: "#161513",
        graphite: "#2A2724",
        paper: "#F4F1EA",
        cream: "#FBFAF6",
        ash: "#C8C2B8",
        stone: "#8C857B",
        taupe: "#A89F92",
        sand: "#D9CFC1",
      },
      fontFamily: {
        display: ["var(--font-bodoni)", "Georgia", "serif"],
        sans: ["var(--font-jost)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxe: "0.28em",
        wide2: "0.18em",
      },
      maxWidth: {
        container: "84rem",
      },
      transitionTimingFunction: {
        silk: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
        marquee: "marquee 38s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
