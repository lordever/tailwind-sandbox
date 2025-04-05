/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*html"],
    theme: {
        fontSize: {
            'preset-1': ['36px', {
                letterSpacing: '0.25px',
                lineHeight: '140%',
                fontWeight: '600'
            }],
            'mobile-preset-1': ['24px', {
                letterSpacing: '0.25px',
                lineHeight: '140%',
                fontWeight: '600'
            }],
            'preset-2': ['36px', {
                letterSpacing: '0.25px',
                lineHeight: '140%',
                fontWeight: '200'
            }],
            'mobile-preset-2': ['24px', {
                letterSpacing: '0.25px',
                lineHeight: '140%',
                fontWeight: '200'
            }],
            'preset-3': ['20px', {
                letterSpacing: '0px',
                lineHeight: '135%',
                fontWeight: '600'
            }],
            'preset-4': ['15px', {
                letterSpacing: '0px',
                lineHeight: '140%'
            }],
            'mobile-preset-4': ['15px', {
                letterSpacing: '0.1px',
                lineHeight: '140%'
            }],
            'preset-5': ['13px', {
                letterSpacing: '0px',
                lineHeight: '160%'
            }]
        },
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
            colors: {
                'grey-500': '#4D4F62',
                'grey-400': '#6A7178',
                'grey-100': '#FAFAFA',
                red: '#EA5454',
                cyan: '#44D3D2',
                blue: '#549EF2',
                orange: '#FCAE4A',
            },
        },
    },
    plugins: [],
}

