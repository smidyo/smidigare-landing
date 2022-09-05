/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/index.html"],
  theme: {
    fontFamily: {
      sans: ["Catamaran", "sans-serif"],
    },
    extend: {
      colors: {
        brand: "#24FF9A",
        "stone-50-transp": "rgba(250, 250, 249, 0.8)",
      },
      margin: {
        "5vw": "5vw",
      },
      fontSize: {
        "5vw": "5vw",
        "4vw": "4vw",
      },
      dropShadow: {
        brand: "0.2vw 0.2vw 0 #24FF9A",
        "brand-offset": "0.6vw 0.6vw 0 #24FF9A",
        "stone-400-offset": "0.6vw 0.6vw 0 #d6d3d1",
      },
      minHeight: {
        "50vw": "50vw",
        '150vw': '150vw'
      },
      padding: {
        "5vw": "5vw",
      },
      height: {
      },
      listStyleType: {
        arrow: "'▸'",
      },
    },
  },
  plugins: [{}],
};
