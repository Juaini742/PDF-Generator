/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': "Roboto",
        'anton': "Anton"
      }
    },
  },
  
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: false,
  },
}

