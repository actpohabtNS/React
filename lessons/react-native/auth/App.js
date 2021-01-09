import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm'

export default function App() {
  useEffect(() => {
    firebase.initializeApp({
      apiKey: "AIzaSyC9KeWREosmd889TJotvSCtChiPUH8Svjo",
      authDomain: "auth-4d7d6.firebaseapp.com",
      projectId: "auth-4d7d6",
      storageBucket: "auth-4d7d6.appspot.com",
      messagingSenderId: "676087308411",
      appId: "1:676087308411:web:85cf06229e5aee408382de",
      measurementId: "G-9C5K2XSNM5"
    });
  }, []);

  return (
    <View>
      <Header text="Authentication" />
      <LoginForm />
    </View>
  );
}

const styles = StyleSheet.create({
});
