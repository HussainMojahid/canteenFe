/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",'./node_modules/tw-elements/dist/js/**/*.js'

  ],
  theme: {
    extend: {
      colors:{
        orangess:"#FC8019",
        redss:"#E21919",
        lightRedes:"#F9DBDB",
        greeness:"#37B612",
        lightgreeness:"#D1FEC3",
        lightGreys:"#F5F5F5",
        greyss:"#E4E4E4",
        mediumGreys:"#888888",
        darkgreyss:"#666666"
      },
         fontFamily: {
      'roboto-light': ['Roboto Light'],
      'roboto-black': ['Roboto Black'],
      'roboto-regular': ['Roboto'],
      'roboto-medium': ['Roboto Medium'],
      'roboto-thin': ['Roboto Thin'],
      // 'roboto-bold': ['Roboto Light']
    }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
