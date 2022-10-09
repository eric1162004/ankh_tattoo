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
          DEFAULT: "#D36135",
          dark: "#E6AA68",
        },
        green: "#7FB069",
        black: "#02020B",
      },
      fontFamily: {
        Poppins: "Poppins, sans-serif",
      },
    },
  },
  plugins: [require("daisyui")],

  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          "primary": "#db8636",
          "secondary": "#fce91e",
          "accent": "#e0642f",
          "neutral": "#e0642f",
          "base-100": "#e0642f",
          "info": "#84D0F0",
          "success": "#0C5F48",
          "warning": "#EFBE2A",
          "error": "#F7715F",
          "neutral-content": "#eeeeee",
          "--border-btn": "0px",
          "--tab-border": "0px",
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    // darkTheme: "dark",
  },
};
