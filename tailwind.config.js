/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*html"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Montserrat', 'sans-serif'],
                fraunces: ['Fraunces']
            },
            fontSize: {
                'text-preset-1': ['32px', {lineHeight: '100%', letterSpacing: '0px'}],
                'text-preset-2': ['14px', {lineHeight: '110%', letterSpacing: '0px'}],
                'text-preset-3': ['14px', {lineHeight: '160%', letterSpacing: '0px'}],
                'text-preset-4': ['12px', {lineHeight: '120%', letterSpacing: '5px'}],
                'text-preset-5': ['13px', {lineHeight: '120%', letterSpacing: '0px'}],
            }
        },
    },
    plugins: [],
}

