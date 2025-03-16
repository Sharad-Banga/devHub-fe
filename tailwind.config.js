/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        cmono: ['Cutive Mono', 'monospace'],
        yatra: ['Yatra One','sans-serif'],
        'dela-gothic': ['Dela Gothic One', 'sans-serif'],
      },

    },
  },
  plugins: [],
}

