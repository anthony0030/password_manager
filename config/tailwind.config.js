const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: "class",
  important: true,

  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    container: {
      center: true, // To center containers by default
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      content: {
        empty: "\"\"", //* ""
        space: "\" \"", //* " "
        asterisk: "\"*\"", //* "*"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
    require('bootwind'),
    // require("bootwind/buttons"),
    // require("bootwind/form"),
  ]
}
