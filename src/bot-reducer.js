const initialState = {
  address: '',
  port: '',
  messages: []
};

export default function botReducer(state = initialState, action) {
  switch(action.type) {
    case 'CONNECTED': return Object.assign({}, state, {
      address: action.payload.address,
      port: action.payload.port,
    });
    case 'DISCONNECTED': return Object.assign({}, state, {
      address: state.address,
      port: state.port,
      reason: action.payload.address,
    });
    case 'MESSAGE': return Object.assign({}, state, {
      messages: state.messages.concat(action.payload),
    });
    default: return state;
  }
}
