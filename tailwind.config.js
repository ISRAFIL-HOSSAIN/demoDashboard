/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
        kaushan: "Kaushan Script",
        Montserrat: "Montserrat",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
}
