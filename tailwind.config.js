/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Young Serif', 'sans-serif'],
        outfit: ['Outfit', 'serif']
      },
      colors: {
        lightPink: '#f3e5d8',
        pink: '#fff7fc',
        darkPink: '#7c475d',
        brown: '#7b4735',
        black: '#3d3a39',
        gray: '#a19e9a',
        lightGray: '#e9e9e9'
      }
    },
  },
  plugins: [],
}

