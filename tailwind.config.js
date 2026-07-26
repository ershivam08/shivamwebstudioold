/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bgVoid: "#0A0C10",
        bgSurface: "#12151C",
        bgSurface2: "#1A1E27",
        borderMain: "#252A35",
        textHi: "#F2F4F8",
        textMid: "#9CA3B5",
        textLow: "#5A6274",
        accent: "#6366F1",
        accentSoft: "rgba(99,102,241,0.12)",
        amber: "#FFB020",
        amberSoft: "rgba(255,176,32,0.12)",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      borderRadius: {
        xl2: "14px",
      },
      keyframes: {
        blink: { "50%": { opacity: 0 } },
        pulseArrow: {
          "0%, 100%": { opacity: 0.4, transform: "translateX(0)" },
          "50%": { opacity: 1, transform: "translateX(4px)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        pulseArrow: "pulseArrow 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
