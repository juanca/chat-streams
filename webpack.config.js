const EnvironmentPlugin = require('webpack').EnvironmentPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const secrets = require('./secrets.js');

module.exports = {
  plugins: [
    new EnvironmentPlugin(secrets),
    new HtmlWebpackPlugin(),
  ],
};
