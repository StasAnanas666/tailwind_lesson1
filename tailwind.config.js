/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        primary: "#1DA1F2",
        secondary: "#14171A",
        accent: "#FFAD1F",
        background: "#F5F8FA",
        darkBackground: "#15202B",
      },
      fontFamily: {
        body: ["Montserrat", "sans-serif"],
        heading: ["Roboto", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": {opacity: 0},
          "100%": {opacity: 1},
        },
        slideInUp: {
          "0%": {transform: "translateY(20px)", opacity: 0},
          "100%": {transform: "translateY(0)", opacity: 1},
        },
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in-out",
        slideInUp: "slideInUp 1s ease-in-out"
      }
    },
  },
  plugins: [],
}

