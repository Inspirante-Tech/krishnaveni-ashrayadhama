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
          "50": "#f1f7fe",
          "100": "#e3eefb",
          "200": "#c0ddf7",
          "300": "#88c2f1",
          "400": "#49a2e7",
          "500": "#2287d5",
          "600": "#1261a6",
          "700": "#115593",
          "800": "#12497a",
          "900": "#153e65",
          "950": "#0e2743",
        },
        secondary: {
          "50": "#eefcfd",
          "100": "#d5f6f8",
          "200": "#afedf2",
          "300": "#78dee8",
          "400": "#48cad9",
          "500": "#1eaabc",
          "600": "#1c899e",
          "700": "#1d6e81",
          "800": "#205a6a",
          "900": "#1f4c5a",
          "950": "#0f313d",
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
