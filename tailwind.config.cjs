/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        white: '#FFFFFF',
        black: '#000000',

        gray: {
          100: "#E1E1E6",
          200: "#C4C4CC",
          400: "#7C7C8A",
          800: "#202024",
          900: "#121214",
        },
  
        cyan: {
          500: "#81D8F7",
          300: "#9BE1FB",
        },
      },
      fontSizes: {
        xs: 14,
        sm: 16,
        md: 18,
        lg: 20,
        xl: 24,
        '2xl': 32,
      },
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
