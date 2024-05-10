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
      gradientColorStops: theme => ({
        ...theme('colors'),
        'primary': '#4F2F8E',
        'secondary': '#252d47',
      }),
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}