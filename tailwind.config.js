/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'lux-primary': '#0A1F44',
        'royal-light': '#3B82F6',
        'gold': '#D4AF37'
      },
      backgroundImage: {
        'royal-gradient': 'linear-gradient(to bottom right, #0A1F44, #3B82F6)'
      }
    }
  },
  plugins: []
}
