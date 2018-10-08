import Login from '../login.js';
import React from 'react';
import ReactDOM from 'react-dom';

const element = window.document.createElement('div');
element.id = 'root';
window.document.body.appendChild(element);

ReactDOM.render((
  <Login />
), element);
