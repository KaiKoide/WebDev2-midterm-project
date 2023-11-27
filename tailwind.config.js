/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('/images/header.webp')"
      }
    },
  },
  plugins: [require("daisyui")],
}

