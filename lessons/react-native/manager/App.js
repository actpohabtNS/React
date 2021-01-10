import React, { useEffect } from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './src/reducers'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Router from './src/Router'
import useInitAuth from './src/hooks/useInitAuth'

export default function App() {
  useEffect(() => {
    useInitAuth();
  }, [])

  return (
    <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
      <SafeAreaProvider>
        <Router />
      </SafeAreaProvider>
    </Provider>
  );
}