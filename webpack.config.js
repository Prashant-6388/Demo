const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

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
        clean: true,
        assetModuleFilename : '../img/[hash][ext][query]'
    },
    module: {
        rules: [
            {
              test: /\.s[ac]ss$/i,
              use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
              ]
            },
            {
                test: /\.css$/i,
                use: [
                  MiniCssExtractPlugin.loader,
                  'css-loader'
                ]
            },
            {
                 test: /\.(jpg|jpeg|png|svg)$/,
                 type: 'asset/resource'
            }
        ]
    },
    optimization: {
       minimize: true,
       minimizer: [
         // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
//          `...`,
         new CssMinimizerPlugin({
               test: /\.css$/i,
         }),
       ],
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "../css/[name].css",
            chunkFilename: "../css/[id].css",
        }),
//        new BundleAnalyzerPlugin()
    ],
}