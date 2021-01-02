import React, { useState, useEffect } from 'react'
import { View, Text, Image, FlatList, StyleSheet } from 'react-native'
import yelp from "../api/yelp"

const ResultInfoScreen = ({ navigation }) => {
    const [ result, setResult ] = useState(null)
    const item = navigation.getParam("item")

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    }

    useEffect(() => {
        getResult(item.id)
    }, [])

    if (!result) {
        return null;
    }

    return (
        <View>
            <Text style={styles.title}>{item.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return (
                        <Image
                            style={styles.image}
                            source={{ uri: item }}
                        />
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 15,
        marginLeft: 20
    },
    image: {
        width: 300,
        height: 200,
        marginBottom: 20,
        marginLeft: 20
    }
})

export default ResultInfoScreen