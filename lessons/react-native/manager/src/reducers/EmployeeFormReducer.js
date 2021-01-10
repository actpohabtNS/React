const INIT_STATE = {
  name: '',
  phone: '',
  shift: '',
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'employee_update':
      return { ...state, [action.payload.prop]: action.payload.value }
    
    default:
      return state;
  }
}