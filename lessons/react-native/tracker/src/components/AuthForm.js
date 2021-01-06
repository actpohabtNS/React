import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'

const AuthForm = ({ headerText, errorMessage, submitButtonText, onSubmit }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Spacer>
                <Text h3>
                    {headerText}
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
            { errorMessage
                ? <Text style={styles.errorMessage}>{errorMessage}</Text>
                : null }
            <Spacer>
                <Button
                    title={submitButtonText}
                    onPress={() => onSubmit({ email, password })}
                />
            </Spacer>
        </>
    )
}

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        alignSelf: 'center'
    }
})

export default AuthForm;