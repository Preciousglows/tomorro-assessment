/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html'],
  theme: {
    extend: {
      fontFamily:{
        inter: 'Inter'
      },

      colors:{
        primary:'#273F2B',
        secondary:'#78EB54',
        tomGrey:'#F2F5EB',
        tomLemon:'#DFFFCB'
      },

      keyframes:{
        marquee:{
          '0%' :  { transform: 'translateX(100%)' },
          '100%' : { transform: 'translateX(-100%)' }
        }
      },

      animation:{
        marquee: 'marquee 20s linear infinite'
      }
    },
  },
  plugins: [],
}

