import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import SearchScreen from './src/screens/SearchScreen'
import ResultInfoScreen from './src/screens/ResultInfoScreen'

const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultInfo: ResultInfoScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
})

export default createAppContainer(navigator)