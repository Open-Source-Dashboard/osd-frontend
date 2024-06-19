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
        'black': '#0d0d0d',
        'blue': '#2a4da1',
        'blue-light': '#008f00',
        'cream': '#faf7ea',
        'gray': '#454545',
        'gray-md': '#5a5a5a',
        'gray-light': '#dadada',
        'orange': '#ff781f',
        'purple': '#681b9c',
        'purple-light': '#c700c7',
        'purple-dark': '#70448a',
        'pink': '#ff3c68',
        'pink-md': '#ffc4d1',
        'pink-light': '#ffebef',
        'yellow': '#ffa500',
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