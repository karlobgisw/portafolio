/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'beauty-black': '#181414',
        'beauty-black2': '#222222',
        'default-app' : '#0c0c1d',
      },
    },
  },
  plugins: [],
}

