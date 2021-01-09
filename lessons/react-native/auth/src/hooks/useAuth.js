import { useState } from 'react';
import firebase from 'firebase';

export default (setEmail, setPassword) => {
  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: "AIzaSyC9KeWREosmd889TJotvSCtChiPUH8Svjo",
      authDomain: "auth-4d7d6.firebaseapp.com",
      projectId: "auth-4d7d6",
      storageBucket: "auth-4d7d6.appspot.com",
      messagingSenderId: "676087308411",
      appId: "1:676087308411:web:85cf06229e5aee408382de",
      measurementId: "G-9C5K2XSNM5"
    });
  } else {
    firebase.app();
  }

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

  return [error, loading, logIn];
}