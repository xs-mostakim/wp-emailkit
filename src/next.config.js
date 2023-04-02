const ReactRefreshWebpackPlugin = require('react-refresh-webpack-plugin');

module.exports = {
  assetPrefix: "./",
  webpack5: {
    Plugin: [
      new ReactRefreshWebpackPlugin(),
    ] 
  },
  output: {
    publicPath: ''
  }
};
