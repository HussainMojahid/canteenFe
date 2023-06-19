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
        greyss:"#E4E4E4",Greyess: "#8D8D8D",
        mediumGreys:"#888888",
        darkgreyss:"#666666",blackes:"#333333",
        // new Colors
        newGreenes:"#85CC71",
        offWhite:"#CCCCCC",
        newdarkgreyss:"#49565A",
        darkesgreys:"#3D484B",
        fontColors:"#D4D4D4",
        newredss:"#FD7272",
      },
      backgroundImage: {
        'loginBackground': "url('C:\Users\nv\Desktop\canteenFe-dev\canteen\canteenFe\src\assets\img\login_background.svg')",
        'SignUpBackground': "url('../../../assets/img/signUp_background.svg')",
      },
      fontFamily: {
        'roboto-light': ['Roboto Light'],
        'roboto-black': ['Roboto Black'],
        'roboto-regular': ['Roboto'],
        'roboto-medium': ['Roboto Medium'],
        'roboto-thin': ['Roboto Thin'],
        // 'roboto-bold': ['Roboto Light']
    },
    screens:{
      'xsm': '150px',
      'sm': '350px',
      'md': '700px',
      'lg': '1030px',
      'xl': '1280px',
      '2xl': '1536px',
    }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}


