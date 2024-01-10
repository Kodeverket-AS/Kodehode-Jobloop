/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* Farger fra Jobloop | Kodehode Figma Design Fil */
      colors: {
        jobloop: {
          /* Hovedfarge fra Figma */
          primay: {
            green: "#77C4B4",
            orange: "#F4A366",
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
    },
  },

  plugins: [],
};
