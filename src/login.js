import React from 'react';

function onSubmit(event) {
  event.preventDefault();

  const inputs = event.target.elements;
  const username = inputs[0].value;
  const channel = inputs[1].value;

  if (username && channel) {
    window.localStorage.setItem('username', username);
    window.localStorage.setItem('channels', channel);
  }
}


export default function Login() {
  return (
    <form onSubmit={onSubmit}>
      <label>
        Username:
        <input name="username" type="text" />
      </label>
      <label>
        Channel:
        <input name="channel" type="text" />
      </label>
      <input type="submit" value="Login via Twitch" />
    </form>
  );
}
