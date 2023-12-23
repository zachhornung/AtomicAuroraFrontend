/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#10DA15',
        galacticPurple: '#6A00FF',
        solarFlareOrange: '#FF6F00',
        astronomicalBlue: '#0033FF',
        stellarWhite: '#FFFFFF',
        darkBlue: '#172E6B',
        nebulaPink: '#FF00E6',
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require("rippleui")
  ],
}

