import Application from './application.js';
import Bot from './bot.js';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

let options = {
  identity: {
    username: process.env.TWITCH_USERNAME,
    password: process.env.TWITCH_OAUTH_TOKEN,
  },
  channels: [
    process.env.TWITCH_CHANNELS,
  ],
};

const bot = new Bot(options);

const element = window.document.createElement('div');
element.id = 'root';
window.document.body.appendChild(element);

ReactDOM.render((
  <Provider store={bot.store}>
    <Application />
  </Provider>
), element);
