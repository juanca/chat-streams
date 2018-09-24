export default class Bot {
  constructor(options) {
    this.client = options.client;
    this.store = options.store;

    this.onConnectedHandler = this.onConnectedHandler.bind(this);
    this.onDisconnectedHandler = this.onDisconnectedHandler.bind(this);
    this.onMessageHandler = this.onMessageHandler.bind(this);

    this.client.on('connected', this.onConnectedHandler);
    this.client.on('disconnected', this.onDisconnectedHandler);
    this.client.on('message', this.onMessageHandler);
  }

  onConnectedHandler (addr, port) {
    this.store.dispatch({
      type: 'CONNECTED',
      payload: {
        address: addr,
        port: port,
      },
    });
  }

  onDisconnectedHandler (reason) {
    this.store.dispatch({
      type: 'DISCONNECTED',
      payload: reason,
    });
  }

  onMessageHandler (target, context, msg, self) {
    if (self) return;

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
