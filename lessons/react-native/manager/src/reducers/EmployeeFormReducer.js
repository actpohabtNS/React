const INIT_STATE = {
  name: '',
  phone: '',
  shift: 'Monday',
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'employee_update':
      return { ...state, [action.payload.prop]: action.payload.value }
    
    case 'employee_create':
      return INIT_STATE;

    default:
      return state;
  }
}