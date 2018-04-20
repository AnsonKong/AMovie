'use strict';
module.exports = agent => {
  console.log('agent enter');
  agent.messenger.on('egg-ready', () => {
    console.log('egg-ready from agent');
    if (agent.config.env === 'local') {
      const MemoryFileAgent = require('./lib/MemoryFileAgent');
      agent.memoryFileAgent = new MemoryFileAgent(agent);
    }
  });
};
