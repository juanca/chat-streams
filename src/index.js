const Bot = require('./bot.js');

let options = {
  identity: {
    username: process.env.TWITCH_USERNAME,
    password: process.env.TWITCH_OAUTH_TOKEN,
  },
  channels: [
    process.env.TWITCH_CHANNELS,
  ],
};

new Bot(options);
