import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context'; 

import LoadingScreen from './src/screens/LoadingScreen'
import SigninScreen from './src/screens/SigninScreen'
import SignoutScreen from './src/screens/SignoutScreen'

import { setNavigator } from './src/navigationRef'

const navigator = createSwitchNavigator({
  Loading: LoadingScreen,
  Signin: SigninScreen,
  Signout: SignoutScreen
}, {
  initialRouteName: 'Loading',
})

const App = createAppContainer(navigator);

export default () => {
  return (
    <SafeAreaProvider>
      <App ref={(navigator) => setNavigator(navigator)} />
    </SafeAreaProvider>
  )
}