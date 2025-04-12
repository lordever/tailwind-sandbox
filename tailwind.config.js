/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*html"],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Red Hat Display', 'sans-serif']
            },
            colors: {
                'cyan-600': '#4D96A9',
                'cyan-300': '#8FE3F9',
                'purple-600': '#855FB1',
                'purple-300': '#D9B8FF',
                'slate-900': '#28283D',
                'slate-600': '#87879D',
                'slate-300': '#D1D1DF',
                'white': '#FAFAFA',
            },
            fontSize: {
                'preset-1': ['64px', {lineHeight: '110%', letterSpacing: 0}],
                'preset-2': ['40px', {lineHeight: '110%', letterSpacing: 0}],
                'preset-3': ['16px', {lineHeight: '110%', letterSpacing: '4px'}],
                'preset-4': ['18px', {lineHeight: '110%', letterSpacing: '4px'}],
                'preset-5': ['16px', {lineHeight: '150%', letterSpacing: 0}],
            }
        },
    },
    plugins: [],
}

