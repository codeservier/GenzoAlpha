/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#3490dc',  // Custom primary color
        'secondary': '#ffed4a', // Custom secondary color
        'accent': '#e3342f',    // Custom accent color
        'custom-gray': '#f8f9fa', 
        'cblack':'#000',
      
      },
    },
  },
  plugins: [],
};
