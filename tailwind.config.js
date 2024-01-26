/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
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
        aux: "#505987",
      },
      screens: {
        xs: "450px",
        onetime: "300px",
      },
      fontFamily: {
        nexa: ["Nexa", "Inter", "sans-serif"],
      },
      keyframes: {
        "loop-scrollmd": {
          from: {
            transform: "translateX(0)",
            "-webkit-transform": "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-50% - 4rem))",
            "-webkit-transform": "translateX(calc(-50% - 4rem))",
          },
        },
        "loop-scroll": {
          from: {
            transform: "translateX(0)",
            "-webkit-transform": "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-50% - 0.5rem))",
            "-webkit-transform": "translateX(calc(-50% - 0.5rem))",
          },
        },
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
        "loop-scrollmd": "loop-scrollmd 20s linear infinite",
        "loop-scroll": "loop-scroll 10s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
