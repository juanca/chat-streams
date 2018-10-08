import Application from '../application.js';
import { applyMiddleware } from 'redux';
import botReducer from '../bot-reducer.js';
import Bot from '../bot.js';
import { createStore } from 'redux';
import initialState from '../initial-state.js';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import TMIMiddleware from '../tmi-middleware.js';

const element = window.document.createElement('div');
element.id = 'root';
window.document.body.appendChild(element);

if (!window.localStorage.getItem('oAuthToken')) {
  const clientId = 'n82sycb4v3y0ict6a5zgihzmuy3f4i';
  const redirectURI = 'https://localhost:8080/&response_type=token&scope=chat_login';
  const authenicationURL = `https://id.twitch.tv/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectURI}`;
  window.location = authenicationURL;
}

const searchParams = window.location.hash.slice(1);
if (searchParams.length > 0) {
  const baseURL = 'https://localhost:8080/';
  const url = new URL(`${baseURL}?${searchParams}`);
  window.localStorage.setItem('oAuthToken', url.searchParams.get('access_token'));
  window.location = baseURL;
}

const restoredState = Object.assign(initialState, {
  username: window.localStorage.getItem('username') || '',
  channels: (window.localStorage.getItem('channels') || '').split(','),
  oAuthToken: window.localStorage.getItem('oAuthToken') || '',
});

const store = createStore(botReducer, restoredState, applyMiddleware(TMIMiddleware));

ReactDOM.render((
  <Provider store={store}>
    <Application />
  </Provider>
), element);
