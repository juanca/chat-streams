const tmi = require('tmi.js');

module.exports = class Bot {
  constructor(options) {
    let client = new tmi.Client(options);

    client.on('connected', this.onConnectedHandler);
    client.on('disconnected', this.onDisconnectedHandler);
    client.on('message', this.onMessageHandler);

    client.connect();
  }

  onConnectedHandler (addr, port) {
    console.log(`* Connected to ${addr}:${port}`);
  }

  onDisconnectedHandler (reason) {
    console.log(`Disconnected: ${reason}`);
  }

  onMessageHandler (target, context, msg, self) {
    if (self) return;

    console.log(`[${target} (${context['message-type']})] ${context.username}: ${msg}`);
  }
};
