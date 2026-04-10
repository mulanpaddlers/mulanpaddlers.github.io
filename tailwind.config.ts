import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1E2A44',
          dark: '#151f33',
        },
        'pink-hot': '#FF4F9A',
        'pink-soft': '#FFD1E6',
      },
    },
  },
  plugins: [],
};

export default config;
