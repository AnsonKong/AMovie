'use strict';
const MemoryFileEvent = require('./MemoryFileEvent');
const GlobalReg = require('./GlobalReg');
const path = require('path');
const webpack = require('webpack');
const devMiddleware = require('webpack-dev-middleware');
const webpackServerConfig = require('../webpack.server.config.js');
const webpackClientConfig = require('../webpack.client.config.js');

class MemoryFileAgent {
  constructor(agent) {
    this.agent = agent;
    // server compile 'vue-ssr-server-bundle.json'
    const serverCompiler = webpack(webpackServerConfig);
    this.serverDev = devMiddleware(serverCompiler, {
      publicPath: webpackServerConfig.output.publicPath,
      writeToDisk: false,
    });

    // client compile 'vue-ssr-client-manifest.json'
    const clientCompiler = webpack(webpackClientConfig);
    this.clientDev = devMiddleware(clientCompiler, {
      publicPath: webpackClientConfig.output.publicPath,
      writeToDisk: false,
    });

    // request memory file from clientDev.fileSystem
    // check if file exists in webpack memory
    // filePath: relative path like '/index.html'
    // absPath: absolute path for 'memory-fs' usage
    this.agent.messenger.on(MemoryFileEvent.REQUEST_CLIENT_FILE, filePath => {
      this._check(filePath, true);
    });
    this.agent.messenger.on(MemoryFileEvent.REQUEST_SERVER_FILE, filePath => {
      this._check(filePath, false);
    });
  }

  _check(filePath, isClient) {
    this.agent.logger.info('request memory file: ' + filePath);
    const dev = isClient ? this.clientDev : this.serverDev;
    dev.waitUntilValid(() => {
      let fileData;
      const fs = dev.fileSystem;

      const fileName = path.basename(filePath);
      const absPath = path.join(dev.context.compiler.outputPath, fileName);

      if (fs.existsSync(absPath)) {
        const ext = path.extname(filePath).toLocaleLowerCase();
        let encoding;
        // Buffer(default) or String(txt extension)
        if (GlobalReg.txt.test(ext)) {
          encoding = 'utf-8';
        }
        fileData = fs.readFileSync(absPath, encoding);
      }
      this.agent.messenger.sendToApp(
        fileData ? MemoryFileEvent.FILE_FOUND : MemoryFileEvent.FILE_NOT_FOUND,
        { filePath, fileData }
      );
    });
  }
}

module.exports = MemoryFileAgent;
