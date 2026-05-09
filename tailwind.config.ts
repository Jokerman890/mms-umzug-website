import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#071827",
        "navy-soft": "#123047",
        "mms-green": "#1f9d55",
        "mms-green-dark": "#0f6f3b",
        smoke: "#eef4f5",
        "smoke-blue": "#dfeaf0",
        orange: "#f28c28",
      },
      boxShadow: {
        glass: "0 18px 45px rgba(15, 23, 42, 0.10)",
        "glass-dark": "0 24px 70px rgba(0, 0, 0, 0.25)",
        glow: "0 0 28px rgba(34, 197, 94, 0.35)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
