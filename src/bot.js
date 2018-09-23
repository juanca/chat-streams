const botReducer = require('./bot-reducer.js');
const createStore = require('redux').createStore;
const tmi = require('tmi.js');

module.exports = class Bot {
  constructor(options) {
    let client = new tmi.Client(options);

    this.onConnectedHandler = this.onConnectedHandler.bind(this);
    this.onDisconnectedHandler = this.onDisconnectedHandler.bind(this);
    this.onMessageHandler = this.onMessageHandler.bind(this);
    this.store = createStore(botReducer);

    client.on('connected', this.onConnectedHandler);
    client.on('disconnected', this.onDisconnectedHandler);
    client.on('message', this.onMessageHandler);

    client.connect();
  }

  onConnectedHandler (addr, port) {
    console.log(`* Connected to ${addr}:${port}`);
    this.store.dispatch({
      type: 'CONNECTED',
      payload: {
        address: addr,
        port: port,
      },
    });
  }

  onDisconnectedHandler (reason) {
    console.log(`Disconnected: ${reason}`);
    this.store.dispatch({
      type: 'DISCONNECTED',
      payload: reason,
    });
  }

  onMessageHandler (target, context, msg, self) {
    if (self) return;

    console.log(`[${target} (${context['message-type']})] ${context.username}: ${msg}`);
    this.store.dispatch({
      type: 'MESSAGE',
      payload: {
        context: context,
        message: msg,
        target: target,
      },
    });
  }
};
