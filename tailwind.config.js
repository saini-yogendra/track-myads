export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#3A75FF', // Bright Blue
                    dark: '#2563eb',
                },
                secondary: {
                    DEFAULT: '#1C3352', // Dark Navy
                    light: '#2a4a75',
                },
                dark: '#000000',
                light: '#F8F9FB',
            },
            fontFamily: {
                sans: ['"Mona Sans"', 'Inter', 'sans-serif'],
            },
            boxShadow: {
                'card': '0 4px 20px rgba(0, 0, 0, 0.05)',
            },
        },
    },
    plugins: [],
}
