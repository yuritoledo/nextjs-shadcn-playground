import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          "50": "hsl(208, 100%, 97%)",
          "100": "hsl(210, 100%, 93%)",
          "200": "hsl(209, 100%, 87%)",
          "300": "hsl(208, 100%, 77%)",
          "400": "hsl(210, 100%, 67%)",
          "500": "hsl(214, 100%, 59%)",
          "600": "hsl(219, 95%, 56%)",
          "700": "hsl(222, 87%, 48%)",
          "800": "hsl(223, 80%, 40%)",
          "900": "hsl(222, 73%, 33%)",
          "950": "hsl(223, 64%, 21%)",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
