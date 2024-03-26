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
      }
    },
  },
  plugins: [],
}

