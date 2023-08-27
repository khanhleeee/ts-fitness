/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'primary-main': '#BDA79C',
        'primary-light': '#FCF2F0',
        'primary-dark': '#845754',
        'secondary': '#423935',
      },
      backgroundImage: {
        'mobile-home': 'url("./assets/HomePageGraphic.png")'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        dmsans: ['DM Sans', 'sans-serif']
      },
      content: {
        abnormalText: 'url("./assets/AbnormalText.png")',
      },
      screens: {
        xs: '480px',
        sm: '768px',
        md: '1060px',
      }
    },
  },
  plugins: [],
}