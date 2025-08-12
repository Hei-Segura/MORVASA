/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4B3F72",
        secondary: "#FFD100",
        dark: "#000000",
      },
    },
  },
  plugins: [],
};
