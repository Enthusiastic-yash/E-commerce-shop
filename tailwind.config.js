/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlack: '#212121',
        lightGray: '#4a4a4a',
        lightGray2: '#9e9e9e',
        lightPink: '#da1c5c',
        darkBlack: '#333333'

      },
      fontFamily: {
        'mont': ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}