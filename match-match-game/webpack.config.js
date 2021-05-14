const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: [ '.js', '.ts', '.png', 'jpg', '.svg']
  },
  optimization: {
      splitChunks: {
          chunks: 'all'
      }
  },
  devServer: {
      port: 4200
  },
  plugins: [
      new HTMLWebpackPlugin({
          template: './index.html'
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
          filename: 'bundle.css',
      })
  ],
  module: {
      rules: [
          {
              test: /\.sass$/,
              use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
          },
          {
            test: /\.(jpg|svg|png)$/,
            use: ['file-loader']
          },
          {
            test: /\.(ttf|woff|woff2|eot)$/,
            use: ['file-loader']
          },
          {
            test: /\.ts$/,
            use: ['ts-loader'],
            exclude: /node_modules/
          }
      ]
  }
};