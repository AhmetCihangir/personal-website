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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
