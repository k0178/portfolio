/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'pink-lav': '#E0ACD5',
        'un-blue': '#3993DD',
        'isabelline': '#F4EBE8',
        'turq': '#29E7CD',
        'bole': '#6A3E37',
        'gunmetal': '#00272B',
        'chart': '#E0FF4F',
        'bittersweet': '#FF6663'
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
        ],
        'bittersweet': '2px 3px 0 rgb(255, 102, 99)',
      },
    },
    fontFamily:{
      'jetbrains': ['JetBrains Mono', 'monospace'],
      'epilogue': ['Epilogue' , 'sans-serif'],
      'sora': ['Sora', 'sans-serif'],
      'montserrat': ['Montserrat' , 'sans-serif']
    }
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}