/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  purge: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  darkMode: false,
  theme: {
    extend: {},
  },
  plugins: [],
}
