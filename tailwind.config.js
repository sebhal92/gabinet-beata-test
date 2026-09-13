module.exports = {
  content: [
    "./_layouts/**/*.html",
    "./_includes/**/*.html",
    "./*.html",
    "./assets/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          hand: "#225abc",
          spine: "#36b2b2"
        }
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries")
  ],
};
