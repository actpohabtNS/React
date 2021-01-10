import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './src/reducers'
import LibraryList from './src/components/LibraryList'
import { Header } from './src/components/common'

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View>
        <Header text="Technologies" />
        <LibraryList />
      </View>
    </Provider>
  )
}

export default App;