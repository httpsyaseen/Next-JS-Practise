/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff812e	",
        light: "#fee3d2",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0.1" },
          "50%": { opacity: "0.5" },
          "100%": { opacity: "1" },
        },
        zoomIn: {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        zoomOut: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(0.5)", opacity: "0" },
        },
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in-out",
        zoomIn: "zoomIn 1s ease-in-out",
        zoomOut: "zoomOut 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
