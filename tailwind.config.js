/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      'noto-regular': ['NotoSansJP_400Regular', 'sans-serif'],
      'noto-bold': ['NotoSansJP_700Bold', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
