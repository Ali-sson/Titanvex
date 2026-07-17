/ @type {import('tailwindcss').Config} /
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        primary: "#081C3A",
        secondary: "#0B2545",

        card: "#102A43",

        heading: "#FFFFFF",
        paragraph: "#CBD5E1",

        gold: "#FBBF24",
        "gold-dark": "#D97706",

        border: "#334155",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    
  },
  plugins: [],
};