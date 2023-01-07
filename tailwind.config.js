/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          100: "hsl(0, 0%, 98%)",
          200: "hsl(0, 0%, 52%)",
          300: "hsl(200, 15%, 8%)",
        },
        dark: {
          100: "hsl(207, 26%, 17%)",
          200: "hsl(209, 23%, 22%)",
        },
      },
      fontFamily: {
        sans: ["Nunito Sans", "sans-serif"],
      },
      boxShadow: {
        btn: "0 0 5px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
