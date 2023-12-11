/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        coffee: {
          ...require("daisyui/src/theming/themes")["coffee"],
          secondary: "#5B9195",
          accent: ""
        },
      },
    ],
  },
}

