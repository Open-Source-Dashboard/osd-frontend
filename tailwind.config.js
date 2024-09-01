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
        'gray': '#454545',
        'gray-md': '#5a5a5a',
        'gray-light': '#dadada',
        'green': '#6CA13D',
        'purple': '#872b97',
        'purple-light': '#913f99',
        'purple-gray': '#443454',
        'blue': '#3F3CBB',
        'pink': '#ff4f77',
        'pink-md': '#ffc4d1',
        'pink-light': '#ffebef',
        'orange': '#F58025',
        'orange-light': '#fde3cf'
      },
      backgroundImage: theme => ({
        'custom-gradient': 'linear-gradient(to right, #313131, #313131, #313131)',
      }),
      boxShadow: {
        'custom-light': '0 2px 5px rgba(255, 255, 255, 0.15)',
        'custom-dark': '5px 5px 15px rgba(0, 0, 0, 0.3)',
      },
      gridTemplateRows: {
        'layout-12': 'repeat(12, minmax(10px, 1fr))',
      },
      gridTemplateColumns: {
        'layout-18': 'repeat(18, 1fr)',
      },

      screens: {
        'xs': '480px',    // Extra small devices, phones
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