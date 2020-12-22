import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

function MyInfoScreen() {
    const name = "Nikita"

    return (
        <View>
            <Text style={styles.heading}>Hello there from {name}</Text>
            <Text style={styles.subheading}>What's up?</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 40
    },
    subheading: {
        fontSize: 25,
        color: '#5e5e5e'
    }
})

export default MyInfoScreen