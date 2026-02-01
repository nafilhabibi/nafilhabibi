/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: '#164E63', // Deep Teal-Blue (Cyan-900)
                secondary: '#0891B2', // Professional Teal (Cyan-600)
                accent: '#22D3EE', // Bright Teal (Cyan-400)
                success: '#059669', // Professional Green
                dark: '#0F172A',
                light: '#F8FAFC',
                'blue-primary': '#164E63',
                'blue-secondary': '#0891B2',
                'blue-light': '#ECFEFF',
                'green-primary': '#059669',
                'green-secondary': '#10B981',
                'gray-text': '#475569',
                'gray-light': '#F1F5F9',
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease forwards',
                'float': 'float 3s ease-in-out infinite',
                'gradient-shift': 'gradientShift 5s ease infinite',
                'pulse-slow': 'pulse 3s ease-in-out infinite',
                'spin-slow': 'spin 20s linear infinite',
            },
            backdropBlur: {
                'glass': '10px',
            },
            backgroundImage: {
                'gradient-primary': 'linear-gradient(135deg, #2563EB, #1E40AF)',
                'gradient-blue': 'linear-gradient(135deg, #EFF6FF, #F8FAFC)',
                'gradient-light': 'linear-gradient(180deg, #FFFFFF, #F8FAFC)',
            },
        },
    },
    plugins: [],
}