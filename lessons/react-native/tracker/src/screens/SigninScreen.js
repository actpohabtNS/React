import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Context as AuthContext } from '../context/AuthContext'
import { NavigationEvents } from 'react-navigation'

import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import Spacer from '../components/Spacer'


const SigninScreen = () => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillFocus={clearErrorMessage}
            />

            <AuthForm
                headerText="Sign In to Your Account"
                errorMessage={state.errorMessage}
                submitButtonText="Sign In"
                onSubmit={signin}
            />

            <Spacer />

            <NavLink
                text="Don't have an account yet? Sign up!"
                routeName="Signup"
            />
        </View>
    )
}

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 30
    }
})

export default SigninScreen;