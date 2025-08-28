/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'base-100': '#f1f1f1',
        'text-primary': '#4a4a4a',
        'text-secondary': '#7a7a7a',
        'accent': '#4fd1c5',
        'accent-dark': '#38b2ac',
      },
      boxShadow: {
        'skeuo': '8px 8px 16px #c8c8c8, -8px -8px 16px #ffffff',
        'skeuo-sm': '4px 4px 8px #c8c8c8, -4px -4px 8px #ffffff',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      }
    }
  },
  plugins: [],
};

