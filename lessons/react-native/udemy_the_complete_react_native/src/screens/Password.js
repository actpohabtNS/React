import React, { useState } from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native'

const Password = () => {
    const [password, setPassword] = useState('');

    return (
        <View>
            <Text>
                Input password:
            </Text>

            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeTextnp={(newVal => setPassword(newVal))}
            />

            {password.length <= 5
            ? <Text>Password must be longer than 5 characters!</Text>
            : null}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 10,
        padding: 5,
        height: 30,
        borderColor: "black",
        borderWidth: 2
    }
})

export default Password