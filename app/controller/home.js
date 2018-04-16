'use strict';

const fs = require('fs');
const path = require('path');
const Controller = require('egg').Controller;
const WebpackConst = require('../../lib/WebpackConst');
const { createBundleRenderer } = require('vue-server-renderer');

let vueTemplate = fs.readFileSync(WebpackConst.templatePath, 'utf-8');
let serverBundleDisk;
let clientManifestDisk;

class HomeController extends Controller {
	// get /
  async index() {
  	const isLocal = this.app.config.env === 'local';

		let clientManifest;
  	let serverBundle;
		if (isLocal) {
			const clientBundleString = await this.app.memoryFileWorker.requestClientFile(WebpackConst.clientBundleName);
			clientManifest = JSON.parse(clientBundleString);

			const serverBundleString = await this.app.memoryFileWorker.requestServerFile(WebpackConst.serverBundleName);
			serverBundle = JSON.parse(serverBundleString);
		} else {
  		if (!clientManifestDisk) clientManifestDisk = require(path.join(WebpackConst.clientOutputPath, WebpackConst.clientBundleName));
  		if (!serverBundleDisk) serverBundleDisk = require(path.join(WebpackConst.serverOutputPath, WebpackConst.serverBundleName));

			clientManifest = clientManifestDisk;
			serverBundle = serverBundleDisk;
		}
		// bundle-renderer
		const renderer = createBundleRenderer(serverBundle, {
			runInNewContext: false,
		  template: vueTemplate,
		  clientManifest
		});

		// context for SSR
	  const ssrContext = { 
	  	url: this.ctx.request.url
	  };

	  this.ctx.body = await renderer.renderToString(ssrContext);
  }
}

module.exports = HomeController;
 