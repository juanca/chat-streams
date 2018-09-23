import React from 'react';
import { connect } from 'react-redux';

function Application(props) {
  return (
    <React.Fragment>
      <h1>Chat streams!</h1>
      <div>Status: {props.status}.</div>
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return {
    status: state.address && state.port && !state.reason ? 'Connected' : 'Disconnected',
  }
}

export default connect(mapStateToProps)(Application);
