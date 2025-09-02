import type { Config } from 'tailwindcss';

const config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        border: 'var(--color-border)',
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
      },
    },
  },
} satisfies Config;

export default config;
