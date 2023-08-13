/** @type {import('tailwindcss').Config} */
export const content = ["./dist/*.{html,js}"];
export const theme = {
  extend: {
    colors: {
      "primary-colors-primary-500": "#2F6B5C",
      "Secondary-colors/Secondary-600": "#329530",
      "Greys/Grey-600": "#52525B",
    },
    fontFamily: {
      Nunito: ["Nunito", "sans-serif"],
      Comfortaa: ["Comfortaa", "cursive"],
      Raleway: ["Raleway", "sans - serif"],
    },
    lineHeight: {
      "extra-loose": "2.5",
      standard: "1.2",
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
};
export const plugins = [];
