import { useState } from 'react';
import firebase from 'firebase';

export default (setEmail, setPassword) => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const logIn = (email, password) => {
    setError('');
    setLoading(true);

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(onLoginSuccess)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(onLoginSuccess)
          .catch(onLoginFail)
      })
  } 

  const onLoginFail = () => {
    setError('Authentication Failed.');
    setLoading(false);
  }

  const onLoginSuccess = () => {
    setEmail('');
    setPassword('');
    setError('');
    setLoading(false);
  }

  const logOut = () => {
    firebase.auth().signOut();
  }

  return {error, loading, logIn, logOut};
}