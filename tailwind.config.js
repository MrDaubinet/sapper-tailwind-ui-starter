const defaultTheme = require("tailwindcss/defaultTheme");

// Any custom additions can be made here
module.exports = {
  theme: {
    extend: {
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem',
        '10xl': '8rem',
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        '2xl': '1400px',
        '3xl': '1600px'
      }
    },
  },
  purge: {
    content: ["./src/**/*.svelte", "./src/template.html"],
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
