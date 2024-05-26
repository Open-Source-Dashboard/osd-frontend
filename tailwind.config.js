/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], 
      },
      colors: {
        'dark-purple': '#3f3cbb',
        'deep-blue': '#252d47',
        'vibrant-orange': '#ff9f00',
        'light-blue': '#08d9ff',
      },
      backgroundImage: theme => ({
        // 'custom-gradient': 'linear-gradient(to right, #4F2F8E, #02c1cb, #4F2F8E)',
        'custom-gradient': 'linear-gradient(to right, #4F2F8E, #4F2F8E, #4F2F8E)',
      }),
      boxShadow: {
        'custom-light': '0 2px 5px rgba(255, 255, 255, 0.15)',
        'custom-dark': '5px 5px 15px rgba(0, 0, 0, 0.3)',
      },
      gridTemplateRows: {
        'layout': 'repeat(6, minmax(100px, 1fr))',
      },
      gridTemplateColumns: {
        'layout': 'repeat(6, 1fr)',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}