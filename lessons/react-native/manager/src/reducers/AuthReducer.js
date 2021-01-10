const INIT_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false,
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'email_changed':
      return { ...state, email: action.payload };
      
    case 'password_changed':
      return { ...state, password: action.payload };
    
    case 'login_user_success':
      return { ...state, user: action.payload, ...INIT_STATE }

    case 'login_user_fail':
      return { ...state, error: action.payload, loading: false, password: ''}

    case 'attempt_login_user':
      return { ...state, loading: true, error: '' }

    default:
      return state;
  }
}