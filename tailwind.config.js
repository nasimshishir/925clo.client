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
      screens: {
        'xs': '376px',
        'sm': '481px',
        'md': '769px',
        'lg': '1025px',
        'xl': '1281px',
        '2xl': '1537px',
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        helvetica: ['helvetica', 'sans-serif']
      },
      colors: {
        'primary_orange': '#F25200',
        'secondary_orange': '#FF5722',
        'gray_bg': '#F6F6F6',
        'off_white': '#FFC7A8',
        'header_black': '#0F0E0D'
      },
      backgroundImage: {
        'logo_white': "url/('/img/')",
        'auth_bg': "url('/img/auth_landing.webp')",
        'auth_bg_m': "url('/img/auth_landing_mobile.webp')",
        'signup_bg': "url(/img/signup_bg.webp)",
        'login_bg': "url(/img/login_bg.webp)",
        'confirm_email_bg': "url(/img/confirm_email_bg.webp)",
        'confirm_email_bg_m': "url(/img/confirm_email_bg_m.webp)",
        'enter_code': "url(/img/enter_code.webp)",
        'enter_code_m': "url(/img/enter_code_m.webp)",
        'landing_bg': "url(/img/landing_bg.webp)",
        'location_bg': "url(/img/location_bg.webp)"
      }
    },
  },
  plugins: [],
}
