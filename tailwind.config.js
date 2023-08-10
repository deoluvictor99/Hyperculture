/** @type {import('tailwindcss').Config} */
export const content = ["./dist/*.{html,js}"];
export const theme = {
  extend: {
    colors: {
      "primary-colors-primary-500": "#2F6B5C",
      "Secondary-colors/Secondary-600": "#779D42",
      "Greys/Grey-600": "#52525B",
    },
    fontFamily: {
      Nunito: ["Nunito", "sans-serif"],
      Comfortaa: ["Comfortaa", "cursive"],
    },
    lineHeight: {
      "extra-loose": "2.5",
      standard: "1.2",
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
};
export const plugins = [];
