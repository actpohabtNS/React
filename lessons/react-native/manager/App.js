import React, { useEffect } from 'react';
import firebase from 'firebase'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './src/reducers'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Router from './src/Router'

export default function App() {
  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyA5SCH5RMIliYP84IHAZXUj2clm8_TRDE0",
      authDomain: "manager-5f59a.firebaseapp.com",
      projectId: "manager-5f59a",
      storageBucket: "manager-5f59a.appspot.com",
      messagingSenderId: "545823719149",
      appId: "1:545823719149:web:b83c14d96348989396d6e4"
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app();
    }
  }, [])

  return (
    <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
      <SafeAreaProvider>
        <Router />
      </SafeAreaProvider>
    </Provider>
  );
}