module.exports = {
  mode: "jit",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      pink: "#FF719C", // rgb(255, 113, 156)
      blue: "#99D3F4", // rgb(153, 211, 244)
      green: "#4BBF40", // rgb(75, 191, 64)
      yellow: "#F9C664", // rgb(249, 198, 100)
      "blue-dark": "#4C94FF", // rgb(76, 148, 255)
      black: "#000000", // rgb(0, 0, 0)
      "gray-dark": "#3A3A3A", // rgb(58, 58, 58)
      gray: "#E7E7E7", // rgb(231, 231, 231)
      "gray-light": "#F5F5F5", // rgb(245, 245, 245)
      "white-gray": "#F2F2F2", // rgb(242, 242, 242)
      white: "#FFFFFF", // rgb(255, 255, 255)
    },
    fontFamily: {
      daruma: ["Darumadrop One", "cursive"],
      outfit: ["Outfit", "sans-serif"],
      karla: ["Karla", "sans-serif"],
    },
    // fontSize: {
    //   sm: "0.8rem",
    //   base: "1rem",
    //   xl: "1.25rem",
    //   "2xl": "1.563rem",
    //   "3xl": "1.953rem",
    //   "4xl": "2.441rem",
    //   "5xl": "3.052rem",
    // },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      gridTemplateColumns: {
        2030: "2fr 3fr",
        4060: "4fr 6fr",
      },
    },
  },
  plugins: [],
};
