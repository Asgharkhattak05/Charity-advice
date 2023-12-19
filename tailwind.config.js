/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'backImage': "url('./src/images/phot.jpg')",
      },
      resize: ['hover', 'focus'],
    },
  },
  plugins: [],
}

