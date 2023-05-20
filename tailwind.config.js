/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./payload/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontWeight: {
      default: 400,
      bold: 700,
    },
    fontFamily: {
      sans: "Ubuntu, sans-serif",
    },
    extend: {
      colors: {
        primary: {
          light: "#00A0AA",
          DEFAULT: "#01A6A5",
          dark: "#00AAA0",
        },
        secondary: "#F39367",
        gray: {
          light: "#e8f2f0",
          mid: "#edeff1",
          DEFAULT: "#aecbce",
          dark: "#9fa8b2",
        },
        light: "#ffffff",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
