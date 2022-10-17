/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      comfort: ["Comfortaa"],
      geomanist: ["Geomanist"],
    },

    extend: {
      colors: {
        blue: {
          150: "#b7cfed",
        },
        pink: {
          150: "#efabab",
        },
        green: {
          150: "#8cede4",
        },
      },
    },
  },
  plugins: [],
};
