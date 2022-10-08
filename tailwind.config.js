/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#ECE4B7",
          DEFAULT : "#D36135",
          dark: "#E6AA68"
        },
        green: "#7FB069",
        black: "#02020B"
      },
      fontFamily: {
        Poppins: "Poppins, sans-serif"
      },
    },
  },
  plugins: [],
}