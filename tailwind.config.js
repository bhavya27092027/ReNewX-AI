/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0a1020',
          900: '#0d1426',
          850: '#111a30',
          800: '#16203b',
          700: '#1d2a4a',
          600: '#28365c',
        },
      },
    },
  },
  plugins: [],
};
