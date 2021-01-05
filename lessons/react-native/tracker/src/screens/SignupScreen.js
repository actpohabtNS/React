import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const SignupScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={{ fontSize: 48 }}>
                Signup Screen
            </Text>

            <Button
                title={'Go to Signin'}
                onPress={() => navigation.navigate('Signin')}
            />

            <Button
                title={'Go to main flow'}
                onPress={() => navigation.navigate('mainFlow')}
            />
        </View>
    )
}

export default SignupScreen;