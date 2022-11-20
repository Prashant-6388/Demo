const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode : 'development',
    entry : {
        welcome : path.resolve(__dirname, './src/main/resources/static/js/welcome.js'),
        start : path.resolve(__dirname, './src/main/resources/static/js/start.js'),
        page1 : path.resolve(__dirname, './src/main/resources/static/js/page1.js'),
        page2 : path.resolve(__dirname, './src/main/resources/static/js/page2.js'),
    },
    output : {
        filename: "[name].js",
        path: path.join(__dirname, './target/classes/static/js'),
        clean: true
    },
    module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        type: 'asset/resource'
      }
    ]
  },
}