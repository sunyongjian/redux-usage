

export default function info(state = { info: [], loading: false }, action) {
  switch (action.type) {
    case 'GET_INFO':
      return { ...state, loading: false, ...action };
    case 'GET_LOADING':
      return { ...state, loading: true };
    default:
      return state;
  }
}
