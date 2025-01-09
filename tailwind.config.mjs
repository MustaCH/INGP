/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#0f1322",
          DEFAULT: "#0f1322",
          dark: "#0f1322",
        },
        secondary: {
          light: "#92d5e1",
          DEFAULT: "#92d5e1",
          dark: "#92d5e1",
        },
        tertiary: {
          light: "#dabda9",
          DEFAULT: "#dabda9",
          dark: "#dabda9",
        },
        fourth: {
          light: "#b8bfff",
          DEFAULT: "#b8bfff",
          dark: "#b8bfff",
        },
        neutral: {
          light: "#f0f0f0",
          DEFAULT: "#d9d9d9",
          dark: "#a6a6a6",
        },
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        shine: {
          "0%": { "background-position": "100%" },
          "100%": { "background-position": "-100%" },
        },
      },
      animation: {
        gradient: "gradient 8s linear infinite",
        shine: "shine 5s linear infinite",
        "spin-slow": "spin 15s linear infinite",
      },
    },
  },
  plugins: [],
};
