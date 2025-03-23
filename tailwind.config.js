/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        dark: '#141414',
        darkGray: '#1F1F1F',
        saladGreen: '#c4f82a',
        btnGray: '#333333'
      }
    },
  },
  plugins: [],
}

