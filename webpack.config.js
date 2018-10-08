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
