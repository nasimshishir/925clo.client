/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/assets/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        helvetica: ['helvetica', 'sans-serif']
      },
      colors: {
        'primary_orange': '#FF5722',
        'secondary_orange': '#F25200',
      },
      fontSize: {
        'xs': '0.72rem',
      },

    },
  },
  plugins: [],
}
