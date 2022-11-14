/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#919191',
        primary_light: '#D9D9D9',
        primary_dark: '#646464',
        secondary: '#24A5A4'
      }
    }
  },
  plugins: [],
}
