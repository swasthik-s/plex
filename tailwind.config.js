/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: "var(--font-host-grotesk), sans-serif", // Add Gabarito
            },
        },
    },
    plugins: [],
};
