/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    maxWidth: {
      container: "1440px",
      contentContainer: "1140px",
      containerSmall: "1024px",
      containerxs: "768px",
    },
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["montserrat", "sans-serif"],
        titleFont: ["inter", "sans-serif"],
      },
      boxShadow: {
        navShadow: "0 10px 30px -10px rgba(2,12,27,0.7)",
      },
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      // },
      colors: {
        bodyColor: "#0a192f",
        bodyColor1: "#64ffda",
        bodyColor2: "#ccd6f6",
        bodyColor3: "#8892b0",
        bodyColor4: "rgba(100,255,218,0.1)",
      },
    },
  },
  plugins: [],
};
