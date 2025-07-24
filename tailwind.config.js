/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
  content: [
  "./src/**/*.{js,jsx,ts,tsx}",
  "./public/index.html"
],
  theme: {
    extend: {
      screens: {
        xs: '400px', 
        // now you can use xs:grid-cols-3
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        // add more if needed
      },

      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
         floatUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        slideUp: 'slideUp 0.6s ease-out forwards',
        floatUp: 'floatUp 0.5s ease forwards',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
