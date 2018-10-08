const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    https: true,
  },
  entry: {
    'login': './src/entry/login.js',
  },
  module: {
    rules: [{
      test: /\.css$/,
      exclude: /node_modules/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '[path][name]__[local]--[hash:base64:5]',
        },
      }],
    },{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['login'],
    }),
  ],
};
