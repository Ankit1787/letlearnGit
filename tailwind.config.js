/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#F1F9FD",
        secondary:"#010098"
        ,ternary:"#F1F9FD",
        quater:"#2575AA",
        semiTransparent:"rgba(0,0,0,0.5)"
      }
    },
  },
  plugins: [],
}