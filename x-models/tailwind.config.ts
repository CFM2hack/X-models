import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: { 'base-100': '#f1f1f1', /* ...etc */ },
      boxShadow: { 'skeuo': '...', /* ...etc */ },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
