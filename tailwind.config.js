/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{html,js,ejs}"],
  theme: {
    extend: {
      colors: {
        primary: '#61235b',    // Rich Plum for header/nav
        secondary: '#dfc450',  // Gold for text/accents
        tertiary: '#3b1a48',   // Deep plum for text contrast
        accent: '#a88ab4',     // Soft Lavender for hover states
        light: '#d4d0d5',      // Light grey for backgrounds
      }
    }
  },
  plugins: [],
}