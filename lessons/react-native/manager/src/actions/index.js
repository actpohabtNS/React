import firebase from 'firebase'

export const emailChanged = (text) => {
  return {
    type: 'email_changed',
    payload: text
  }
}

export const passwordChanged = (text) => {
  return {
    type: 'password_changed',
    payload: text
  }
}

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch, "Authentication Failed."))
      })
  }
}

const loginUserFail = (dispatch, error) => {
  dispatch({ type: 'login_user_fail', payload: error })
}

const loginUserSuccess = (dispatch, user) => {
  dispatch({ type: 'login_user_success', payload: user })
}