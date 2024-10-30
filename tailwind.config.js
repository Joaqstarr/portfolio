/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/***/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/home/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/project/[slug]/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation:{
        'bounce-slow': `bounce 3s linear once`
      }
    },
  },
  plugins: [],
}

