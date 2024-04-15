/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : "#0A0400",
        secondary : "#E16307 ",
        primaryTextColor : "#F5F5F5",
        dimWhite : "rgba(142, 142, 142, 1)",
        yellowGradient: "radial-gradient(124.83% 101.4% at 15.32% 21.04%, rgba(255, 92, 0, 0.2) 0%, rgba(245, 200, 132, 0.12) 58.21%, rgba(255, 234, 202, 0.2) 100%)",
      },
      fontFamily : {
        medievalSharp : ["MedievalSharp", "cursive"],
        Poppins : ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
});




