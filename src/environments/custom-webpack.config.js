const webpack = require('webpack')

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      DEFAULT_ICON_PACKAGES: [
        { class: `'fa-brands fa-instagram fa-xl'` },
        { class: `'fa-brands fa-square-twitter fa-xl'` },
        { class: `'fa-brands fa-square-facebook fa-xl'` }
      ]
    }),
  ]
}