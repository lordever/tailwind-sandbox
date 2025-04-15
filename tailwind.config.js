/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*html"],
    theme: {
        extend: {
            screens: {
                lg: '1400px'
            },
            fontFamily: {
                'sans': ['Red Hat Display', 'sans-serif']
            },
            colors: {
                'cyan-600': '#4D96A9',
                'cyan-400': '#71C0D4',
                'cyan-300': '#8FE3F9',
                'purple-600': '#855FB1',
                'purple-400': '#B18BDD',
                'purple-300': '#D9B8FF',
                'slate-900': '#28283D',
                'slate-600': '#87879D',
                'slate-300': '#D1D1DF',
                'white': '#FAFAFA',
            },
            fontSize: {
                'preset-1': ['64px', {lineHeight: '110%', letterSpacing: 0}],
                'tablet-preset-1': ['48px', {lineHeight: '110%', letterSpacing: 0}],
                'preset-2': ['40px', {lineHeight: '110%', letterSpacing: 0}],
                'tablet-preset-2': ['36px', {lineHeight: '110%', letterSpacing: 0}],
                'mobile-preset-2': ['32px', {lineHeight: '110%', letterSpacing: 0}],
                'preset-3': ['16px', {lineHeight: '110%', letterSpacing: '4px'}],
                'tablet-preset-3': ['14px', {lineHeight: '110%', letterSpacing: '4px'}],
                'mobile-preset-3': ['12px', {lineHeight: '110%', letterSpacing: '4px'}],
                'preset-4': ['18px', {lineHeight: '150%', letterSpacing: 0}],
                'tablet-preset-4': ['16px', {lineHeight: '150%', letterSpacing: 0}],
                'preset-5': ['16px', {lineHeight: '150%', letterSpacing: 0}],
            }
        },
    },
    plugins: [],
}

