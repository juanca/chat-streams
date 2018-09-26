import Bot from './bot.js';
import tmi from 'tmi.js';

export default function TMIMiddleware(store) {
  const options = {
    identity: {
      username: process.env.TWITCH_USERNAME,
      password: process.env.TWITCH_OAUTH_TOKEN,
    },
    channels: [
      process.env.TWITCH_CHANNELS,
    ],
    connection: {
      secure: true,
    },
  };

  const client = new tmi.Client(options);
  const bot = new Bot({
    client: client,
    store: store,
  });

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
