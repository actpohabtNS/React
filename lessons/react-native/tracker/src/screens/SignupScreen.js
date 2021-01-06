import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'

import AuthForm from '../components/AuthForm'

const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);

    return (
        <View style={styles.container}> 
            <AuthForm
                headerText="Sign Up for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={signup}
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