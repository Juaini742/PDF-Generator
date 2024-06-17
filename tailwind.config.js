/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': "Roboto",
        'jamjuree': "Bai Jamjuree"
      },
      colors: {
        'reded': "#790915",
        'purple': "#7300FF"
      }
    },
    boxShadow: {
      'round': '0 0 8px 1px rgba(0, 0, 0, 0.1)',
      'round-md': '0 0 10px 2px rgba(0, 0, 0, 0.1)'
    }
  },
  
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: false,
  },
}

