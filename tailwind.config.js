/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#22a348',
                secondary: '#0a1d37',
                light: '#f8f9fa',
            },
            fontFamily: {
                sans: ['Montserrat', 'sans-serif'],
                body: ['Open Sans', 'sans-serif'],
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            animation: {
                fadeIn: 'fadeIn 1s ease-out forwards',
            },
        },
    },
    plugins: [],
}
