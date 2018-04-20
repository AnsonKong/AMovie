'use strict';
const merge = require('webpack-merge');
const WebpackConst = require('./lib/WebpackConst');
const nodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base.config.js');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');

module.exports = merge(baseConfig, {
  entry: './app/web/page/entry-server.js',
  target: 'node',
  output: {
    path: WebpackConst.serverOutputPath,
    libraryTarget: 'commonjs2',
  },
  externals: nodeExternals({
    whitelist: [ /\.css$/, /\.vue$/ ],
  }),
  plugins: [
    new VueSSRServerPlugin(),
  ],
});
