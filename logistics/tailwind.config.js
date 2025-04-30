/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#a74a88",
        secondary: "#292929",
        background: "#f4f7fa",
        textPrimary: "#292929",
        textSecondary: "#555",
      },
      fontFamily: {
        sans: ["Inter", "Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 6px rgba(0, 0, 0, 0.1)",
        hover: "0 8px 15px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
