import React from 'react';
import styles from './login.css';

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
      <fieldset className={styles.field}>
        <label className={styles.label} for="username">Username:</label>
        <input className={styles.input} name="username" id="username" type="text" />
      </fieldset>
      <fieldset className={styles.field}>
        <label className={styles.label} for="username">Channel:</label>
        <input className={styles.input} name="channel" id="username" type="text" />
      </fieldset>
      <input className={styles.button} type="submit" value="Login via Twitch" />
    </form>
  );
}
