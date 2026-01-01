/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./tailwind/*.html"
  ],
  theme: {
    extend: {
      fontFamily : {
        "montserrat":['Monserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}
