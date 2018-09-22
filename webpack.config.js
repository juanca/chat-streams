const HtmlWebpackPlugin = require('html-webpack-plugin');
const secrets = require('./secrets.js');
const webpack = require('webpack');

const EnvironmentPlugin = webpack.EnvironmentPlugin;

module.exports = {
  plugins: [
    new EnvironmentPlugin(secrets),
    new HtmlWebpackPlugin(),
  ],
};
