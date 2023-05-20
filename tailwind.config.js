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
        dark: "#283545",
        light: "#ffffff",
      },
      fontSize: {
        displayDesktop: ["3.5vw", "1"],
        displayMobile: ["7vw", "1"],
        "displayDesktop-sm": ["2vw", "1"],
        "displayMobile-sm": ["4vw", "1"],
        "3xl": ["2.5rem", "2.5rem"],
        "2xl": ["1.8rem", "1.8rem"],
        xl: ["1.25rem", "1.875rem"],
        lg: ["1.125rem", "1.6875rem"],
        base: ["1rem", "1.5rem"],
        sm: ["0.75rem", "1.125rem"],
        xs: ["0.5rem", "1.125rem"],
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
