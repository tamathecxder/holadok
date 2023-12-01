/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dmSans: ["DM Sans", "sans-serif"],
        sourceSans: ["Source Sans 3", "sans-serif"],
      },
      colors: {
        primary: "#101C45",
        secondary: "rgba(255, 255, 255, 0.80)",
        info: "#9BEAE0",
      },
    },
  },
  plugins: [],
};
