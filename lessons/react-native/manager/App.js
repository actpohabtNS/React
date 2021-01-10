import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './src/reducers'

export default function App() {
  return (
    <Provider store={createStore(reducers)}>
      <View>
        <Text>Ta da</Text>
      </View>
    </Provider>
  );
}