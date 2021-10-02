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
        "5/12" : "41.66%"
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
      }),
      gradientColorStops: theme => ({
        "instagram-blue" : "#4c68d7",
        "instagram-purple" : "#8a3ab9",
        "instagram-orange" : "#e95950"
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
