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
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          '50': '#faf7f6',
          '100': '#f4eeec',
          '200': '#e8d8d4',
          '300': '#dec8c3',
          '400': '#caa89f',
          '500': '#b48a7f',
          '600': '#9e7064',
          '700': '#835c52',
          '800': '#6e4e46',
          '900': '#5d453f',
          '950': '#31221e',
        },
        secondary: {
          '50': '#f8f6ee',
          '100': '#efe9d2',
          '200': '#e0d4a8',
          '300': '#cdb777',
          '400': '#c5a964',
          '500': '#af8c43',
          '600': '#967038',
          '700': '#79552f',
          '800': '#66462d',
          '900': '#583c2b',
          '950': '#322016',
        },
        action: {
          '50': '#f7f7ef',
          '100': '#ecebd5',
          '200': '#dbd8ad',
          '300': '#c6be7e',
          '400': '#b5a65a',
          '500': '#a6934c',
          '600': '#8f783f',
          '700': '#735c35',
          '800': '#614d32',
          '900': '#55422e',
          '950': '#221911',
        },
      },
      fontFamily: {
        popins: ['Poetsen One', 'sans-serif'],
      },
      keyframes: {
        slideDown: {
          from: { height: '0px' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0px' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-250px * 4))' },
        },
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        scroll: 'scroll 40s linear infinite',
        "loop-scroll": "loop-scroll 5s linear infinite", 
    },
  },
  },
  plugins: [],
};

export default config;
