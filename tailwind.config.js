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
      transitionProperty: {
        'width' : 'width',
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
        ],
        'bittersweet': '2px 3px 0 rgb(255, 102, 99)',
        'bittersweet-2': '7px 8px 0 rgb(255, 102, 99)',
        'chart': '2px 3px 0 rgb(224, 255, 79)',
        'chart-2': '7px 8px 0 rgb(224, 255, 79)',
        'turq': '7px 8px 0 rgb(41, 231, 205)',
        'pink-lav': '7px 8px 0 rgb(224, 172, 213)',
        'pink-lav-2': '2px 3px 0 rgb(224, 172, 213)',
        'un-blue': '7px 8px 0 rgb(57, 147, 221)',
        'img': '8px 8px rgb(57, 147, 221)',
      },
      boxShadow: {
        'bittersweet-2' :`rgba(255, 102, 99, 0.8) 10px 10px, 
                          rgba(255, 102, 99, 0.3) 20px 20px,
                          rgba(255, 102, 99, 0.2) 30px 30px, 
                          rgba(255, 102, 99, 0.1) 40px 40px, 
                          rgba(255, 102, 99, 0.05) 50px 50px`, 
        'pink-lav-3' :`rgba(224, 172, 213, 0.8) 10px 10px, 
                      rgba(224, 172, 213, 0.3) 20px 20px,
                      rgba(224, 172, 213, 0.2) 30px 30px, 
                      rgba(224, 172, 213, 0.1) 40px 40px, 
                      rgba(224, 172, 213, 0.05) 50px 50px`, 
      }
    },
    fontFamily:{
      'jetbrains': ['JetBrains Mono', 'monospace'],
      'epilogue': ['Epilogue' , 'sans-serif'],
      'sora': ['Sora', 'sans-serif'],
      'montserrat': ['Montserrat' , 'sans-serif'],
      'playwrite' : ['Playwrite RO', 'cursive'],
    }
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}