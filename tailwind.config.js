/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,js,jsx,ts,tsx,mdx}',
    './components/**/*.{astro,js,jsx,ts,tsx,mdx}',
    './pages/**/*.{astro,js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        chocolate: '#7B3F00',
        cacao: '#3E2723',
        leaf: '#4CAF50',
        gold: '#D4AF37',
        cream: '#FFF8E1',
      },
      fontFamily: {
        display: ['"Montserrat"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};