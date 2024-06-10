import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          50: "#EEFAFC",
          100: "#D9F4F7",
          200: "#B3E8EF",
          300: "#91DEE9",
          400: "#6BD3E1",
          500: "#44C7D9",
          600: "#27ADBF",
          700: "#1D8390",
          800: "#13555D",
          900: "#092A2F",
          950: "#051719",
        },
        secondary: {
          50: "#EAEDF6",
          100: "#D8DEEE",
          200: "#B1BDDD",
          300: "#899BCC",
          400: "#627ABB",
          500: "#455EA0",
          600: "#374B80",
          700: "#2A3860",
          800: "#1C2540",
          900: "#0E1320",
          950: "#06080E",
        },
        action: {
          50: "#E5FFF8",
          100: "#B8FFEC",
          200: "#00FFBB",
          300: "#00EBAC",
          400: "#00D199",
          500: "#00B383",
          600: "#008A65",
          700: "#004D39",
          800: "#003829",
          900: "#001F16",
          950: "#000000",
        },
      },
      fontFamily: {
        sans: ["var(--font-noto-sans)", "sans-serif"],
        popins: ["Poetsen One", "sans-serif"],
      },
      keyframes: {
        slideDown: {
          from: { height: "0px" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        slideUp: {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0px" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-250px * 4))" },
        },
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        scroll: "scroll 40s linear infinite",
        "loop-scroll": "loop-scroll 5s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
