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
          "50": "#f5f7ee",
          "100": "#e9edda",
          "200": "#d0d9b0",
          "300": "#bac78f",
          "400": "#9fb16a",
          "500": "#82954d",
          "600": "#65763a",
          "700": "#4e5b30",
          "800": "#404a2a",
          "900": "#374027",
          "950": "#1c2211",
        },
        secondary: {
          50: "#F6F5F4",
          100: "#E9E5E2",
          200: "#CFC2BA",
          300: "#B9A193",
          400: "#A27E67",
          500: "#825F4A",
          600: "#5C4130",
          700: "#443227",
          800: "#2C221B",
          900: "#16110E",
          950: "#090706",
        },
        action: {
          "50": "#f8f8f8",
          "100": "#f2f2f2",
          "200": "#dcdcdc",
          "300": "#bdbdbd",
          "400": "#989898",
          "500": "#7c7c7c",
          "600": "#656565",
          "700": "#525252",
          "800": "#464646",
          "900": "#3d3d3d",
          "950": "#292929",
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
