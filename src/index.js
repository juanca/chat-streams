const Bot = require('./bot.js');
const React = require('react');
const ReactDOM = require('react-dom');

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
  React.createElement('h1', undefined, 'Chat streams!'),
  element
);
