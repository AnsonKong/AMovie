'use strict';
const merge = require('webpack-merge');
const WebpackConst = require('./lib/WebpackConst');
const baseConfig = require('./webpack.base.config.js');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');

module.exports = merge(baseConfig, {
  entry: './app/web/page/entry-client.js',
  output: {
    filename: '[name].[chunkhash].js',
    path: WebpackConst.clientOutputPath,
  },
  plugins: [
    new VueSSRClientPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false,
      cacheGroups: {
        vue: {
          test: /[\\/]vue[\\/]/,
        },
        'element-ui': {
          test: /[\\/]element-ui[\\/]/,
        },
      },
    },
  },
});
