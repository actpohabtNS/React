import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

function ColorChanger(props) {
    const { color, onIncrease, onDecrease } = props

    return (
        <View style={styles.ColCh}>
            <Text style={styles.ColName}>
                Change {color}
            </Text>

            <TouchableOpacity
                style={styles.ColButton}
                onPress={() => onIncrease()}
            >
                <Text style={styles.ButtonText}>
                    + Increase +
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.ColButton}
                onPress={() => onDecrease()}
            >
                <Text style={styles.ButtonText}>
                    - Decrease -
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    ColCh: {
        marginBottom: 20
    },
    ColName: {
        textAlign: "center",
        fontSize: 20,
        marginBottom: 5
    },
    ColButton: {
        height: 70,
        marginBottom: 10,
        backgroundColor: "#2196F3"
    },
    ButtonText: {
        textAlign: "center",
        color: "white",
        fontSize: 17,
        lineHeight: 60
    }
})

export default ColorChanger