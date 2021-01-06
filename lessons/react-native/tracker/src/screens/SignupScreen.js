import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}> 
            <Spacer>
                <Text h3>
                    Sign Up for Tracker
                </Text>
            </Spacer>
            <Spacer />

            <Input
                autoCapitalize="none"
                autoCorrect={false}
                label="Email"
                onChangeText={setEmail}
                value={email}
            />

            <Spacer />

            <Input
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
                label="Password"
                onChangeText={setPassword}
                value={password}
            />

            <Spacer>
                <Button
                    title="Sign Up"
                />
            </Spacer>
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