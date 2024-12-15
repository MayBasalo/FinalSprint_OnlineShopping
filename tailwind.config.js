/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
            fontFamily: {
        inter: ['Inter', 'sans-serif'],

      },
      backgroundImage: {
        'cloth': "url('')",
        'image2': "url('')",
        'image3': "url('')",
      }
    },
  },
  plugins: [],
}

