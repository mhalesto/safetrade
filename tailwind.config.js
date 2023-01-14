/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: "#122046",
        primary: "#122046",
        secondary: "#2D4A9A",
        action: '#EB620D',
        accent: '#7AC9D2',
        muted: '#F5FDFF',
        ink: '#0F1627',
        slate: '#393E4E',
        storm: '#87949F',
        silver: '#BEC5CC',
        cloud: '#F0F4F7',
        error: '#E94547',
        alert: '#F07D1A',
        success: '#37DC86',
        focus: '#0148E9',
        link: '#3090F1'
      },
      fontFamily: {
        mont: ['Montserrat', 'sans-serif']
      }
    },
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}
