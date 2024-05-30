/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xs": "375px",
        xs: "425px",
        "3xl": "2600px",
      },
      colors: {
        kv: {
          black: "#0B1215",
          white: "#FFFAFA",
        },
        /* Farger fra Jobloop | Kodehode Figma Design Fil */
        jobloop: {
          /* Hovedfarge fra Figma */
          primary: {
            green: "#77C4B4",
            orange: "#F4A366",
            grey: "#575756",
          },
          /* Nedtonet fra Figma */
          secondary: {
            orange: "#f5b58a",
            green: "#A5FBE9",
            greentone: "#C8FFF3",
          },
          /* Sekundær fra Figma */
          tertiary: {
            purple: "#412F39",
            green: "#1E555C",
          },
        },
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        //fadeIn: {
        //  "0%": { opacity: "0" },
        //  "100%": { opacity: "100%" },
        //},
      },
      animation: {
        //fadeIn: "fadeIn 1s forwards",
        scroll: "scroll 35s linear infinite",
      },
      boxShadow: {
        cards: "0 -5px 10px 2px rgb(0 0 0 / 0.1), 0 5px 10px 2px rgb(0 0 0 / 0.1)",
      },
    },
  },

  plugins: [],
};
