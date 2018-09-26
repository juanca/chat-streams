import Bot from './bot.js';
import tmi from 'tmi.js';

export default function TMIMiddleware(store) {
  const state = store.getState();
  console.log(state);

  let client;

  if (state.username && state.channels) {
    const options = {
      identity: {
        username: state.username,
        password: state.oAuthToken,
      },
      channels: state.channels,
      connection: {
        secure: true,
      },
    };

    client = new tmi.Client(options);

    const bot = new Bot({
      client: client,
      store: store,
    });
  }

  return function TMIMiddlewareNext(next) {
    return function TMIMiddlewareAction(action) {
      switch (action.type) {
        case 'TMIConnect': client.connect(); break
        case 'TMIDisconnect': client.disconnect(); break;
      }

      const state = next(action);
      return state;
    };
  };
};
