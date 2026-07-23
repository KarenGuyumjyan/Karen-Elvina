import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm, earthy "Minimalism Brown" palette
        milk: "#fffdf9",
        cream: "#f6f1ea",
        sand: "#ece3d6",
        taupe: "#c9b8a3",
        mocha: "#a8917a",
        cocoa: "#7c6350",
        espresso: "#4a3b30",
        ink: "#2f2620",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        script: ["var(--font-great-vibes)", "cursive"],
        sans: ["var(--font-jost)", "system-ui", "sans-serif"],
        roman: ["var(--font-romanuni)", "system-ui", "sans-serif"],
        arm: ["var(--font-SHK_Dzeragir)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.35em",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s ease-out both",
        "fade-in": "fade-in 1.2s ease-out both",
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
