import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import ResultInfo from './ResultInfo'

const ResultsList = ({ title, results }) => {
    if (!results.length)
        return null;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <ResultInfo result={item}/>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 15,
        marginBottom: 5
    }
})

export default ResultsList