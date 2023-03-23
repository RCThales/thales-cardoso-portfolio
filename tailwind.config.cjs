/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        "hero-img": "url('./src/images/bg-header.jpg')",
        "project-img": "url('./src/images/bg-header.jpg')",
      },
      fontFamily: {
        cabin: ['"Cabin"', ...defaultTheme.fontFamily.sans],
        notosansjp: ['"Noto Sans JP"', ...defaultTheme.fontFamily.sans],

      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-6deg)" },
          "50%": { transform: "rotate(6deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 5s ease-in-out infinite",
      },
      gridTemplateColumns: {
        "respgrid": "repeat(auto-fit, minmax(520px, 1fr))",
      },
    },
  },
  plugins: [],
};
