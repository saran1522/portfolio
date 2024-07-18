/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        PP: ["Poppins", "sans-serif"],
        CF: ["Comfortaa", "sans-serif"],
      },
      colors: {
        primary: {
          400: "#2b2b2d",
          600: "#1c1c1d",
        },
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
