import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'pizza-dark-red': '#AA0101',
        'pizza-light-red': '#BF3E3E',
        'pizza-dark-gold': '#A86100',
        'pizza-light-gold': '#DAC57B',
      },
      animation: {
        'spin-slow': 'spin 17s linear infinite',
      }
    },
  },
  plugins: [],
};
export default config;
