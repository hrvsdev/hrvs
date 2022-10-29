/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#EDF5FF",
          100: "#E1EFFF",
          200: "#CEE4FE",
          300: "#B7D5F8",
          400: "#96C1F2",
          500: "#5EA2EF",
          600: "#0072F5",
          700: "#005FCC",
          800: "#004799",
          900: "#00254D",
        },
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
