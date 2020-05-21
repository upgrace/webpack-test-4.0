const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devServer: {
    disableHostCheck: true
  },
  configureWebpack: config => {
    config.plugins = [...config.plugins, new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })]
  }
}
