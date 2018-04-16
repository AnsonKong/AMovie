module.exports = app => {
	console.log('worker enter');
	app.messenger.on('egg-ready', () => {
		console.log('egg-ready from worker');
		if (app.config.env === 'local') {
			const MemoryFileWorker = require('./lib/MemoryFileWorker');
			app.memoryFileWorker = new MemoryFileWorker(app);
		}
	});
}