/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rabar21: ["rabar21", "mono"],
      },
      colors: {
        sixty: "#ffffff",
        fify: "#e5e5e5",
        forty: "#606c38",
        thirty: "#e9edc9",
      },
    },
  },
  plugins: [],
};
