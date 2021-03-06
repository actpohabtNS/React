import React, { useState } from 'react'
import { View, Button, FlatList, StyleSheet } from 'react-native'

function ColorsScreen(props) {
    const [colors, setColors] = useState([])

    return (
        <View>
            <Button
                title="Add color"
                onPress={() => {
                    setColors([...colors, randomRGB()])
                }}
            />

            <FlatList
                keyExtractor={item => item}
                data={colors}
                renderItem={({ item }) => {
                    return (
                        <View
                            style={{...styles.colorBox, backgroundColor: item}}
                        />
                    )
                }}
            />
        </View>
    )
}

function randomRGB() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({
    colorBox: {
        padding: 20,
        height: 100,
        width: "100%"
    }
})

export default ColorsScreen