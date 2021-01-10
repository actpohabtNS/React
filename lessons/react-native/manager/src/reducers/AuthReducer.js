const INIT_STATE = {
  email: '',
  password: '',
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'email_changed':
      return { ...state, email: action.payload };
      
    case 'password_changed':
      return { ...state, password: action.payload };
    
    default:
      return state;
  }
}