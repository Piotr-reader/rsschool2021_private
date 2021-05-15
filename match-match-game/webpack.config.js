const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlagin = require('copy-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: './index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    assetModuleFilename: 'assets/[hash][ext]',
  },
  resolve: {
    extensions: [ '.js', '.ts', '.png', '.jpg', '.svg']
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
          filename: '[name].[contenthash].css',
      }),
      // new CopyPlagin({
      //   patterns: [
      //     { from: './public'}
      //   ]
      // })
  ],
  module: {
      rules: [
          {
              test: /\.css$/i,
              use: [MiniCssExtractPlugin.loader, 'css-loader']
          },
          {
            test: /\.sass$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        },
          {
            test: /\.(jpg|svg|png)$/,
            // type: 'asset/resource',
            use: ['file-loader'],
          },
          {
            test: /\.(ttf|woff|woff2|eot)$/,
            // type: 'asset/resource',
            use: ['file-loader'],
          },
          {
            test: /\.ts$/,
            use: ['ts-loader'],
            exclude: /node_modules/,
          }
      ]
  }
};