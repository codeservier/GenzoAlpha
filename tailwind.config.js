/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#3490dc', 
        'secondary': '#ffed4a', 
        'accent': '#e3342f',   
        'custom-gray': '#f8f9fa', 
        'cblack':'#000',
      
      },
      backgroundImage:{
        'headerImg:':"url('../../src/assets/bgImages/headerBg.jpg')"
      }
    },
  },
  plugins: [],
};
