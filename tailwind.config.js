/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*html"],
    theme: {
        extend: {
            colors: {
                black: '#121212',
                darkBlue: '#19202D',
                'grey-100': '#E7EAEE',
                'grey-150': '#F6F5F6',
                'grey-200': '#CFCFCF',
                'grey-400': '#676D7E',
                'grey-500': '#48556A',
                'purple-50': '#EDE4FF',
                'purple-300': '#A775F1',
                'purple-500': '#733FC8',
            },
            fontFamily: {
                sans: ['Barlow', 'sans-serif']
            },
            fontSize: {
                'preset-1': ['20px', {letterSpacing: '0px', fontWeight: '600', lineHeight: '120%'}],
                'preset-2': ['13px', {letterSpacing: '0px', fontWeight: '500', lineHeight: '110%'}],
                'preset-3': ['13px', {letterSpacing: '0px', fontWeight: '500', lineHeight: '140%'}],
                'preset-4': ['11px', {letterSpacing: '0px', fontWeight: '500', lineHeight: '110%'}]
            }
        },
    },
    plugins: [],
}

