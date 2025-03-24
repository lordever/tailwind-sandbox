/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        youngSerif: ['Young Serif', 'serif']
      },
      colors: {
        lightPink: '#f3e5d8',
        pink: '#fff7fc',
        brown: '#7b4735'
      }
    },
  },
  plugins: [],
}

