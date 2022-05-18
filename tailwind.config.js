// module.exports = {
//   future: {
//     removeDeprecatedGapUtilities: true
//   },
// }

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
    },
    colors:{
      white:"#ffffff",
      red:{
        medium:'#ef4444',
        light:'#f87171',
        extraLight:"#fee2e2",
      },
      teal:{
        light:'#5eead4',
      },
      gray:{
        light:'#444444',
      },
      black:"#000000",
    }
  },
  plugins: [],
}