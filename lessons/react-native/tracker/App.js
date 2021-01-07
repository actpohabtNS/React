import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { SafeAreaProvider } from 'react-native-safe-area-context'; 

import ResolveAuthScreen from './src/screens/ResolveAuthScreen'
import SignupScreen from './src/screens/SignupScreen'
import SigninScreen from './src/screens/SigninScreen'
import TrackListScreen from './src/screens/TrackListScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import AccountScreen from './src/screens/AccountScreen'

import { Provider as LocationProvider } from './src/context/LocationContext'
import { Provider as AuthProvider } from './src/context/AuthContext'
import { Provider as TrackProvider } from './src/context/TrackContext'
import { setNavigator } from './src/navigationRef'

import { FontAwesome } from '@expo/vector-icons'

const trackListFlow = createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen
});

trackListFlow.navigationOptions = {
  title: 'Tracks',
  tabBarIcon: <FontAwesome name="th-list" size={25} />
}

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow,
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
  })
}, {
  initialRouteName: 'ResolveAuth'
})

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <LocationProvider>
      <TrackProvider>
        <AuthProvider>
          <SafeAreaProvider>
            <App ref={(navigator) => setNavigator(navigator)}/>
          </SafeAreaProvider>
        </AuthProvider>
      </TrackProvider>
    </LocationProvider>
  )
}