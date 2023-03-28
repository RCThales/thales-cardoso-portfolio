/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
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
        flamenco: ['"Flamenco"', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-6deg)" },
          "50%": { transform: "rotate(6deg)" },
        },
        appearNavbar: {
          "0%": { transform: "translateY(-100%)" },
          "100%":{ transform: "translateY(0%)" },
        },
        disappearNavbar: {
          "0%": { transform: "translateY(0%)" },
          "100%":{ transform: "translateY(-100%)" },
        },
      },
      animation: {
        wiggle: "wiggle 5s ease-in-out infinite",
        appearNavbar: "appearNavbar 0.5s ease-in-out",
        disappearNavbar: "disappearNavbar 0.5s ease-in-out",
      },
      gridTemplateColumns: {
        "respgrid": "repeat(auto-fit, minmax(520px, 1fr))",
      },
    },
  },
  plugins: [],
};
