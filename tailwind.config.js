/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
    theme: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
 
      extend: {
        colors: {
          blue: "#193455",
          purple: "#DE1DBF",
          aqua: "#1DD3DE",
          primary: "#008066",
          secondary: "#D8801E",
          white: "#ffffff",
          body: "#505050",
          black: "#232323",
          deactive: "#B0B0B0",
          stroke: "#E6E8EC",
          border: "#CED4DA",
          shadow: "#18274B",
          background:'#F9F9F9'
        },
      
        spacing: {
          1: "1rem",
          2: "2rem",
          3: "3rem",
          4: "4rem",
          5: "5rem",
          6: "6rem",
        },
        borderRadius: {
          "4xl": "2rem",
        },
        padding:{
          "4.5":"1.375rem",
          "9.5":'9.5rem'
        },
        width:{
          l:'3.75rem'
        },
        height:{
          icon:'1.675rem'
        },
        fontSize:{
          'xxl':'1.375rem'
        }
      },
  },
  plugins: [],

});
