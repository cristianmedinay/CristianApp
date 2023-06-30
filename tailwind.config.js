/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
          colors:{
            primary: "#706FE5",
            secondary: "#EAEAFC"
          },screens: {
            'xs': {'min': '100px', 'max': '640px'},
            'sm': {'min': '640px', 'max': '769px'},
           
          },
      },
    },
    plugins: [],
  }