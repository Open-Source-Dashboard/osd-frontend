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
        'blue': '#202f4a',
        'gray': '#454545',
        'gray-md': '#5a5a5a',
        'gray-light': '#dadada',
        'mint': '#1DC98A',
        'purple': '#872b97',
        'pink': '#ff3c68',
        'pink-md': '#ffc4d1',
        'pink-light': '#ffebef',
        'yellow': '#ff8100',

      },
      backgroundImage: theme => ({
        'custom-gradient': 'linear-gradient(to right, #292929, #292929, #292929)',
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