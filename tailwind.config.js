/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4172DC",
        secondary: "#434343",
        tertiary: "#262626",
        deep: '#000',
        light: '#fff'
      }
    },
  },
  plugins: [require("daisyui")],
}

