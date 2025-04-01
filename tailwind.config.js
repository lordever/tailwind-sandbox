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
                'preset-1': ['32px', {lineHeight: '100%', letterSpacing: '0px'}],
                'preset-2': ['14px', {lineHeight: '110%', letterSpacing: '0px'}],
                'preset-3': ['14px', {lineHeight: '160%', letterSpacing: '0px'}],
                'preset-4': ['12px', {lineHeight: '120%', letterSpacing: '5px'}],
                'preset-5': ['13px', {lineHeight: '120%', letterSpacing: '0px'}],
            },
            colors: {
                cream: '#F2EAE2',
                gray: '#6C7289',
                black: '#1C232B',
                'green-500': '#3D8168',
                'green-700': '#1A4032'
            }
        },
        screens: {
            md: '576px'
        }
    },
    plugins: [],
}

