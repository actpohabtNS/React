import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import MyInfoScreen from './src/screens/MyInfoScreen'
import ListScreen from './src/screens/List'
import ImagesScreen from './src/screens/ImagesScreen'
import ColorsScreen from './src/screens/ColorsScreen'
import ColorCreator from './src/screens/ColorCreator'
import Counter from './src/screens/Counter'
import Password from './src/screens/Password'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    MyInfo: MyInfoScreen,
    List: ListScreen,
    Images: ImagesScreen,
    Colors: ColorsScreen,
    ColorCreator: ColorCreator,
    Counter: Counter,
    Password: Password
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);