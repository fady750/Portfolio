import scrollbar from "tailwind-scrollbar"
/** @type {import('tailwindcss').Config} */

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    extend: {
        fontFamily:{
            'sans':['Inter', 'sans-serif']
        },
        blur: {
            "0": '0',
        },
    },
    plugins: [scrollbar],
}
