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
      fontSize: {
        "6xl": 3.5,
        "5xl": 3,
        "4xl": 2.5,
        "3xl": 2,
        "2xl": 1.75,
        xl: 1.5,
        lg: 1.25,
        base: 1,
        sm: 0.875,
        xs: 0.75,
      },
      container: {
        center: true,
        padding: {
          xs: "1.5rem",
          DEFAULT: "1rem",
        },
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
