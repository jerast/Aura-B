/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'main': 'calc(100vh - 4rem)'
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}

