/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        "50vh": "50vh",
      },
      colors: {
        wheat: "#F5DEB3",
      },
      fontFamily: {
        roboto: ["Roboto", "sans"],
      },
    },
  },
  plugins: [],
};
