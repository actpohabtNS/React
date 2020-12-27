import React, { useReducer } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler';

const reducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "increase":
            return {count: state.count + payload}
        case "decrease":
            return {count: state.count - payload}
    
        default:
            return state;
    }
}

const Counter = () => {
    const [ state, dispatch ] = useReducer(reducer, {count: 0});
    const { count } = state;

    return (
        <View>

            <View style={styles.ButtonContainer}>
                <TouchableOpacity
                    style={styles.Button}
                    onPress={() => dispatch({ type: "increase", payload: 1 })}
                >

                    <Text style={styles.ButtonText}>
                        + Increase +
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.Button}
                    onPress={() => dispatch({ type: "decrease", payload: 1 })}
                >

                    <Text style={styles.ButtonText}>
                        - Decrease -
                    </Text>

                </TouchableOpacity>
            </View>

        <View>
            <Text style={styles.Header}>
                Current Count:
            </Text>

            <Text style={styles.Count}>
                { count }
            </Text>

        </View>
        
        </View>
    )
}

const styles = StyleSheet.create({
    ButtonContainer: {
        display: "flex",
        alignItems: "center",
        marginTop: 50
    },
    Button: {
        width: "70%",
        height: 70,
        marginBottom: 40,
    
        backgroundColor: "#9c9c9c",
        borderWidth: 2,
        borderColor: "#636363",
        borderRadius: 5
    },
    ButtonText: {
        textAlign: "center",
        fontSize: 20,
        color: "white",
        lineHeight: 60
    },
    Header: {
        fontSize: 30,
        textAlign: "center",
        marginTop: 20
    },
    Count: {
        fontSize: 50,
        textAlign: "center",
        fontWeight: "700"
    }
})

export default Counter