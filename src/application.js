import React from 'react';
import { connect } from 'react-redux';

function Application(props) {
  return (
    <React.Fragment>
      <h1>Chat streams!</h1>
      <div>Status:
        <span onClick={props.status === 'Connected' ? props.disconnect : props.connect}>
          {props.status}
        </span>
      </div>
      <ol>
        {props.messages.map(message => (console.log('message', message) ||
          <li>{message.message}</li>
        ))}
      </ol>
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return {
    status: state.address && state.port && !state.reason ? 'Connected' : 'Disconnected',
    messages: state.messages,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    connect: function TMIConnect() {
      dispatch({ type: 'TMIConnect' });
    },
    disconnect: function TMIDisconnect() {
      dispatch({ type: 'TMIDisconnect' });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Application);
