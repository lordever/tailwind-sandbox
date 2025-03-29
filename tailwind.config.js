/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  safelist: [
    // layout
    'flex', 'flex-row', 'flex-col', 'items-center', 'justify-between', 'justify-center', 'gap-2', 'gap-3', 'gap-4', 'gap-5',

    // spacing
    'pb-4', 'pt-4', 'px-4', 'py-2', 'p-0.5', 'mt-8', 'mr-4',

    // text
    'text-xs', 'text-lg', 'text-sm', 'text-orange', 'text-roseBeige', 'text-darkBrown', 'font-semibold', 'font-medium', 'font-bold', 'opacity-60',

    // borders & bg
    'border-b', 'border-b-gray-200', 'border', 'border-roseBeige', 'rounded-full', 'rounded-md', 'rounded-xl',

    // visibility
    'hidden', 'block',

    // images
    'w-[16px]', 'w-[40px]', 'h-[16px]', 'h-[40px]',

    // states
    'hover:invert', 'hover:bg-black', 'hover:bg-brightOrange',

    // dialog/modal
    'fixed', 'bottom-0', 'inset-x-0', 'w-full', 'max-h-[90vh]', 'overflow-y-auto', 'z-50', 'bg-white', 'shadow-xl', 'rounded-t-2xl'
  ],
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
        midnightWine: '#110d0d',
        roseBeige: '#caafa7'
      }
    },
  },
  plugins: [],
}

