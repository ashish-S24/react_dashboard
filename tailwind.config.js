/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#F8FAFF",
        vector_bg_1 : "#7FCD93",
        vector_bg_2 : "#DEBF85",
        vector_bg_3 : "#ECA4A4",
        vector_bg_4 : "#A9B0E5",
        vector_bg_5 : "#F6DC7D",
        chartbar_primary : "#EE8484",
        supporative : "#4AD15F",
        primary_blue : "#3E84F8",
        label_bg : "#E9F9EB"
      },
      fontFamily : {
         lato : ["Lato", "sans-serif"],
         mont : ['Montserrat', 'sans-serif'],
         popp : ['Poppins', 'sans-serif'],
         opensans: ['Open Sans', 'sans-serif'],
         figtree : ['Figtree', 'sans-serif']
      }
    },
  },
  plugins: [],
}