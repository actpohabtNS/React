const INIT_STATE = {};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'employees_fetch_success':
      return action.payload;

    default:
      return state;
  }
}