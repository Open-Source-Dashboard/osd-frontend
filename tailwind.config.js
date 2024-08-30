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
        'layout': 'repeat(6, minmax(100px, 1fr))',
      },
      gridTemplateColumns: {
        'layout': 'repeat(6, 1fr)',
      },

      screens: {
        xsss: "0px", //0 to 160px
        xss: "160px", //160 to 320
        xs: "320px", //320 to 640
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "smm": "200px",
        'height_login': { 'raw': '(max-height: 260px)' },
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