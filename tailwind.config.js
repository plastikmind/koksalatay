/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Great-Vibes': ['Great Vibes', ...defaultTheme.fontFamily.sans],
        'Montserrat': ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        mobile: "400px",
      },
    },
  },
  plugins: [],
};
