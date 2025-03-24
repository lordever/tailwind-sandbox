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
        brown: '#7b4735',
        black: '#3d3a39',
        gray: '#b4b1ae'
      }
    },
  },
  plugins: [],
}

