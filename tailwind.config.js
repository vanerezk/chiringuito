/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#fbf8f2',
          100: '#f5efe4',
          200: '#eadfc8',
          300: '#d7c6a1',
          400: '#c3a97d',
        },
        sea: {
          50: '#eaf5fb',
          100: '#d2ebf7',
          200: '#a4d5ef',
          300: '#67b5dd',
          400: '#2d89ba',
          500: '#1d628d',
          600: '#154b6c',
          700: '#0f3554',
          800: '#0b2640',
        },
      },
      boxShadow: {
        premium: '0 24px 70px rgba(15, 53, 84, 0.18)',
        soft: '0 16px 45px rgba(15, 53, 84, 0.12)',
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      keyframes: {
        reveal: {
          '0%': {opacity: '0', transform: 'translateY(18px)'},
          '100%': {opacity: '1', transform: 'translateY(0)'},
        },
      },
      animation: {
        reveal: 'reveal 700ms ease forwards',
      },
    },
  },
  plugins: [],
};
