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
        'purple': '#872B97',
        'blue': '#3F3CBB',
        'orange': '#ff7130',
        'pink': '#ff3c68',
        'md-pink': '#ffc4d1',
        'light-pink': '#ffebef',
      },
      backgroundImage: theme => ({
        'custom-gradient': 'linear-gradient(to right, #313131, #313131, #313131)',
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