/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      maxWidth: {
        1480: "1480px",
      },
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "Arial", "sans-serif"],
      },
      colors: {
        primary: "#fa2828",
        seconday: "#385472",
        gray: "#ebebe9",
      },
      theme: {
        screens: {
          // sm: "640px",
          // md: "768px",
          // lg: "1024px",
          // xl: "1280px",
          // "2xl": "1536px",
        },
      },
    },
  },
  plugins: [],
};
