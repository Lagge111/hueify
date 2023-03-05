/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1B1F24",
        dark_gray: "#24292F",
      },
      fontFamily: {
        mona: ["Mona Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
