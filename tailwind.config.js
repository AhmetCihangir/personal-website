module.exports = {
  mode: "jit" ,
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex : {
        "-1" : "-1",
      },
      inset : {
        "160" : "40rem",
        "120" : "30rem",
        "5/12" : "41.66%",
        "btn" : "50% - 0.625rem",
        "btnSm" : "50% - 1.25rem",
      },
      fontSize : {
        xxs : "0.650rem"
      },
      borderWidth : {
        "1" : "1px"
      },
      backgroundColor: theme => ({
        "gmail" : "#DB4437",
        "kakaotalk" : "#ffe812",
        "linkedin" : "#0077b5",
        gunMetal : "#30343F", 
        ghostWhite : "#FAFAFF",
        lavendarBlue : "#E4D9FF",
        spaceCadet1 : "#273469",
        spaceCadet2 : "#1E2749"
      }),
      gradientColorStops: theme => ({
        "instagram-blue" : "#4c68d7",
        "instagram-purple" : "#8a3ab9",
        "instagram-orange" : "#e95950"
      }),
      padding : {
        "1/2" : "0.125rem"
      },
      textColor : theme => ({
        gunMetal : "#30343F", 
        ghostWhite : "#FAFAFF",
        lavendarBlue : "#E4D9FF",
        spaceCadet1 : "#273469",
        spaceCadet2 : "#1E2749"
      }),
      fontFamily : {
        roboto : ["Roboto"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar-hide")
  ],
}
