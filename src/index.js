import Bot from './bot.js';
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

// new Bot(options);

const element = window.document.createElement('div');
element.id = 'root';
window.document.body.appendChild(element);

ReactDOM.render(
  <h1>Chat streams!</h1>,
  element
);
