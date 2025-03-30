/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*html"],
    theme: {
        fontSize: {
            sm: ['15px', {lineHeight: '140%', letterSpacing: '0.2px'}],
            '2xl': ['22px', {lineHeight: '120%', letterSpacing: '0px'}]
        },
        extend: {
            fontFamily: {
                sans: ['Outfit', 'sans-serif']
            },
        },
    },
    plugins: [],
}

