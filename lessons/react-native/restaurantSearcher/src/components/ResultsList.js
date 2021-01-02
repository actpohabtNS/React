import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

const ResultsList = ({ title, results }) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                data={results}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <Text>{item.name}</Text>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: "800"
    }
})

export default ResultsList