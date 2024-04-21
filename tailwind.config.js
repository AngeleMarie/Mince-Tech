export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-background': "url('./Assets/backgroundImage.png')",
        'gradient-radial': 'radial-gradient(294.57% 265.53% at 215.89% 0%, #0A1027 0%, #232262 100%)',
        'custom-white': '#fbfbff',

      },

            width:{
'600':'600px'
      },
      colors: {
        'heading-color': 'rgb(0, 33, 89)',
        'custom-white': '#fbfbff',
        'custom-grey': '#6B6B6B',
      },
      fontSize: {
        'clamp-hs': ['clamp(1rem, 4vw, 2rem)', '1.5'],
        'clamp-ts': ['clamp(1rem, 2vw, 1rem)', '1.5'],

      },
      boxShadow: {
        'custom': '0px 2px 6px 0px rgba(0, 0, 0, 0.12)',
      },
      dropShadow: {
        
        '4xl': [
            '45px 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }

    },
  },
  plugins: [],
}
