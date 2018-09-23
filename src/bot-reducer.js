const initialState = {
  address: '',
  port: '',
  messages: []
};

module.exports = function botReducer(state = initialState, action) {
  switch(action.type) {
    case 'CONNECTED': return Object.assign({}, initialState, {
      address: action.payload.address,
      port: action.payload.port,
    });
    case 'DISCONNECTED': return Object.assign({}, initialState, {
      address: state.address,
      port: state.port,
      reason: action.payload.address,
    });
    case  'MESSAGE': return Object.assign({}, state, {
      message: state.messages.concat(action.payload),
    });
    default: return state;
  }
}
