/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rabar21: ["rabar21", "mono"],
        quran: ["quran", "mono"],
        surahname: ["surahname", "mono"],
      },
      colors: {
        sixty: "#ffffff",
        fify: "#B7B7A4",
        forty: "#DDBEA9",
        thirty: "#cb997e",
      },
    },
  },
  plugins: [],
};
