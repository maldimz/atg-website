// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#F08300",
        secondary: "#EDB458",
        third: "#F1CD93",
        atgBlack: "#1C1B17",
        atgCream: "#E6D6B9",
        atgBrown: "#9B5500"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "576px",
      sm: "640px",
      md: "768px",
      atgmd: "800px",
      atgmds: "925px",
      lg: "1024px",
      xl: "1280px",
      atglg: "1150px"
    },
  },
  plugins: [],
};