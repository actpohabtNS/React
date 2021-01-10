import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './src/reducers'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import ListScreen from './src/screens/ListScreen'

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={createStore(reducers)}>
        <ListScreen />
      </Provider>
    </SafeAreaProvider>
  )
}

export default App;