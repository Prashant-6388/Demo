const path = require('path');
const webpack = require('webpack');
//const JspWebpackPlugin = require('jsp-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    welcome: '/src/main/resources/static/js/welcome.js'
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, './target/classes/static/js'),
    clean: true
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        bundle: {
          test: /[\\/]node_modules[\\/]/,
          name: 'bundle',
        },
      },
    },
  },
  module: {
    rules: [
      /*{
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },*/
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
//    new HtmlWebPackPlugin({
//        title: welcome.jsp,
//        filename : "welcome.jsp",
//    })
  ]
}
