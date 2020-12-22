import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

function ImagesDetail(props) {
    return (
        <View>
            <Image source={props.img} />
            <Text>{props.title}</Text>
            <Text>Rate: {props.rate}</Text>
        </View>
    )
}

export default ImagesDetail