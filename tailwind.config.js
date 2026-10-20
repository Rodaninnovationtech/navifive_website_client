/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    screens: { sm: "640px", md: "768px", lg: "1024px", xl: "1280px" },
    extend: {
      colors: {
        paper: "#ffffff",
        panel: "#f3f6fb",
        ink: "#0b1221",
        mist: "#5b6b82",
        line: "#e2e8f0",
        signal: "#ff4500",
        radar: "#0891b2",
        navy: "#0b2a5b",
      },
      fontFamily: {
        body: ["Manrope", "system-ui", "sans-serif"],
        display: ["Manrope", "system-ui", "sans-serif"],
        mono: ["'Space Mono'", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
