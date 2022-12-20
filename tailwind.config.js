/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        avatarshadow: {
          '0%, 100%': { 'box-shadow': '10px 40px 80px rgba(var(--primary-color-rgb), 0.2)' },
          '50%': { 'box-shadow': '-10px -40px 80px rgba(var(--primary-color-rgb), 0.15)' }
        }
      },
      animation: {
        avatarshadow: 'avatarshadow 5s linear infinite'
      }
    },
  },
  plugins: [],
}
