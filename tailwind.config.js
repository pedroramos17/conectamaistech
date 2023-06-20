/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#F8F8F8",
        dark: "#2B2B2B",
        logo: "#616161",
        menu: "#242424",
        hoverBg: "#565656",
      },
    },
  },
  plugins: [],
};
