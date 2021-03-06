module.exports = {
  purge: ['./src/components/**/*.tsx', './src/pages/**/*.tsx'],
  theme: {
    container: {
      center: true,
      padding: '0.75rem',
    },
    extend: {
      colors: {
        primary: {
          100: '#E6EBF1',
          200: '#C0CCDC',
          300: '#9AADC7',
          400: '#4E709D',
          500: '#023373',
          600: '#022E68',
          700: '#011F45',
          800: '#011734',
          900: '#010F23',
        },
        secondary: {
          100: '#FEF8E6',
          200: '#FCEDC1',
          300: '#FAE29B',
          400: '#F6CD50',
          500: '#F2B705',
          600: '#DAA505',
          700: '#916E03',
          800: '#6D5202',
          900: '#493702',
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
