/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    listStyleType: {

    },
    extend: {
      fontFamily: {
        sans: ["Gilroy", "sans-serif"],
      },
      colors: {
        gray: {
          900: "#121418",
          800: "#1B1F24",
          700: "#242830",
          600: "#8D8F92",
          500: "#CDCED3",
        },
        teal: {
          500: "#00C39A",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px var(--tw-shadow-color),0 0 12px 0 var(--tw-shadow-color)",
      },
      animation: {
        hover: "hover 5s ease-in-out infinite",
      },
      keyframes: {
        hover: {
          "0%,100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(10px)",
          },
        },
      },
      screens: {
        '3xl' : {'max': '2000px'},
        md : {'max': '800px'},
        sm : {'max': '360px'},
      },
      fontSize: {
        '3xl' : '1.6rem',
        md : '1.2rem',
        sm : '0.8rem', 
      },
    },
  },
  plugins: [],
};
