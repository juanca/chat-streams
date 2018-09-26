const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    https: true,
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
    new HtmlWebpackPlugin(),
  ],
};
