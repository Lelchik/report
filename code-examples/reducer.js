function reducer(state, action) {
  if (action.type === 'Change') {
    state = {
      ...state,
      cheked: action.checked,
    };
  }
  return state;
}
