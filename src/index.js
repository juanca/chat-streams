import Application from './application.js';
import { applyMiddleware } from 'redux';
import botReducer from './bot-reducer.js';
import Bot from './bot.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import TMIMiddleware from './tmi-middleware.js';

const element = window.document.createElement('div');
element.id = 'root';
window.document.body.appendChild(element);

const store = createStore(botReducer, applyMiddleware(TMIMiddleware));

ReactDOM.render((
  <Provider store={store}>
    <Application />
  </Provider>
), element);
