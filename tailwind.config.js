/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f6f7f6',
          100: '#e3e5e3',
          200: '#c7cbc7',
          300: '#a5aca5',
          400: '#848c84',
          500: '#6b746b',
          600: '#555d55',
          700: '#444944',
          800: '#373b37',
          900: '#2f322f',
        }
      },
      fontFamily: {
        sans: ['Inter var', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};