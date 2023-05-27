/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgClr: "rgb(30, 30, 30)",
        logoClr: "rgb(74, 152, 156)",
      },
    },
  },
  plugins: [],
};
