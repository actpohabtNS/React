import React, { useReducer } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ColorChanger from '../components/ColorChanger'

const COLOR_INCREMENT = 16;

const reducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "red":
        case "green":
        case "blue":
            break;
    
        default:
            return state;
    }

    const newTypeVal = state[type] + payload;

    if (newTypeVal < 0 || newTypeVal > 256)
        return state;

    return { ...state, [type]: newTypeVal }
}

const ColorCreator = () => {
    const [state, dispatch] = useReducer(reducer, {red: 128, green: 128, blue: 128});

    const dispatchColor = (color, multiplier) => dispatch({ type: color, payload: multiplier * COLOR_INCREMENT });

    const { red, green, blue } = state;
    const color = `rgb(${red}, ${green}, ${blue})`;

    return (
        <View>
            <Text style={styles.ColName}>
                Create your color!
            </Text>

            <ColorChanger
                color="Red"
                onIncrease={() => dispatchColor("red", 1)}
                onDecrease={() => dispatchColor("red", -1)}
            />

            <ColorChanger
                color="Green"
                onIncrease={() => dispatchColor("green", 1)}
                onDecrease={() => dispatchColor("green", -1)}
            />

            <ColorChanger
                color="Blue"
                onIncrease={() => dispatchColor("blue", 1)}
                onDecrease={() => dispatchColor("blue", -1)}
            />

            <View style={{ ...styles.ColRect, backgroundColor: color }}>
                <Text style={styles.ColRectText}>
                    {color}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ColName: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "600",
        marginBottom: 20
    },
    ColRect: {
        width: "100%",
        height: 50
    },
    ColRectText: {
        textAlign: "center",
        fontSize: 20,
        lineHeight: 40
    }
})

export default ColorCreator