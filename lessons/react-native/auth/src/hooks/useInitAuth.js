import firebase from 'firebase'

import { navigate } from '../navigationRef'

export default () => {
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

  console.log("In init auth");

  firebase.auth().onAuthStateChanged((user) => {
    console.log("in auth change");

    if (user) {
      navigate('Signout')
    } else {
      navigate('Signin')
    }
  })
}