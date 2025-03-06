/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#1E40AF',
        secondary: '#9333EA',
        accent: '#F59E0B',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
      boxShadow: {
        soft: '0 4px 10px rgba(0, 0, 0, 0.05)',
        heavy: '0 8px 20px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
};
