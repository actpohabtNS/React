import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'

import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const SignupScreen = () => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillFocus={clearErrorMessage}
            />
             
            <AuthForm
                headerText="Sign Up for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={signup}
            />

            <Spacer />

            <NavLink
                text="Already have an account? Sign in instead!"
                routeName="Signin"
            />
        </View>
    )
}

SignupScreen.navigationOptions = () => {
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

export default SignupScreen;