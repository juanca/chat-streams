const EnvironmentPlugin = require('webpack').EnvironmentPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const secrets = require('./secrets.js');

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
    new EnvironmentPlugin(secrets),
    new HtmlWebpackPlugin(),
  ],
};
