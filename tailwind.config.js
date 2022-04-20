const colors = require('tailwindcss/colors')

module.exports = {
  mode: "jit",
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'sws': {
          main1: '#36b495',
          main2: '#e98787',
          accent1: '#e1e16c',
          accent2: '#80b5da',
          accent3: '#a295c6',
          gray1: '#f4f8fc',
          gray2: '#b5bdcb',
          gray3: '#5f5f5f',
          gray4: '#414141',
          success: '#36b495',
          error: '#ea493d',
          alert: '#eac736',
          normal: '#f4f8fc',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};