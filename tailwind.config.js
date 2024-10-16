/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "Arial", "sans-serif"],
      },
      colors: {
        primary: "#fa2828",
        seconday: "#385472",
        gray: "#ebebe9",
        lightGray: "#8a8a8a",
      },
      spacing: {
        // 100: "100px",
      },
      fontSize: {
        15: "15px",
      },
      maxWidth: {
        1480: "1480px",
      },
      size: {
        13: "13px",
      },
      width: {
        // 13: "13px",
      },
      height: {
        // 13: "13px",
      },
      screens: {
        // sm: "640px",
        // md: "768px",
        // lg: "1024px",
        // xl: "1280px",
        // "2xl": "1536px",
      },

      keyframes: {
        zoomIn: {
          "0%": {
            transform: "scale(1.2)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },

        slideInLeft: {
          "0%": {
            opacity: "0",
            transform: "translateX(-150px)",
          },

          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },

      animation: {
        zoomIn: "zoomIn .8s ease-out",
        slideInLeft: "slideInLeft .5s ease-out backwards",
      },
    },
  },
  plugins: [],
};
