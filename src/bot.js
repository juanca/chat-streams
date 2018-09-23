import botReducer from './bot-reducer.js';
import { createStore } from 'redux';
import tmi from 'tmi.js';

module.exports = class Bot {
  constructor(options) {
    let client = new tmi.Client(options);

    this.store = createStore(botReducer);
    this._stateState = this.store.getState();

    this.onConnectedHandler = this.onConnectedHandler.bind(this);
    this.onDisconnectedHandler = this.onDisconnectedHandler.bind(this);
    this.onMessageHandler = this.onMessageHandler.bind(this);
    this.onStoreChange = this.onStoreChange.bind(this);

    client.on('connected', this.onConnectedHandler);
    client.on('disconnected', this.onDisconnectedHandler);
    client.on('message', this.onMessageHandler);

    this.unsubscribe = this.store.subscribe(this.onStoreChange);
    client.connect();
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

    this.unsubscribe();
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

  onStoreChange() {
    const state = this.store.getState();

    if (this._stateState === state) return;

    console.log('Store state change.', state);
  }
};
