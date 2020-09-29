module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        banana: 'yellow',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
}
