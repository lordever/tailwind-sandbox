/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Red Hat Text', 'sans-serif']
      },
      colors: {
        vanillaCream: '#fcf8f5',
        darkBrown: '#291510',
        orange: '#c3522b',
        brightOrange: '#c83b0e',
        taupeGray: '#a59794',
        warmTaupe: '#948882',
        midnightWine: '#110d0d'
      }
    },
  },
  plugins: [],
}

