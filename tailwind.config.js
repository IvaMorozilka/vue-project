/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}'
  ],
  theme: {
    extend: {
      colors: {
        'header-1': '#1e2549',
        accent: '#f3ba19',
        'main-1': '#4A4A4C',
        'main-2': '#084778'
      }
    }
  },
  plugins: [require('tailwindcss-animated')]
}
