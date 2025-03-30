/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*html"],
    theme: {
        extend: {
            colors: {
                yellow: '#F4D04E'
            },
            fontFamily: {
                sans: ['Figtree', 'sans-serif']
            },
            fontSize: {
                sm: ['14px', {lineHeight: '150%', letterSpacing: '0px'}],
                '2xl': ['24px', {lineHeight: '150%', letterSpacing: '0px'}],
                'base': ['16px', {lineHeight: '150%', letterSpacing: '0px'}]
            }
        },
    },
    plugins: [],
}

