import { NativeAppEventEmitter } from 'react-native';
import { NavigationActions } from 'react-navigation'

let navigator;

export const setNavigator = (nav) => {
    navigator = nav;
};

export const navigate = (routeName, params) => {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    )
}