import React from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import ResultInfo from './ResultInfo'
import { withNavigation } from 'react-navigation'

const ResultsList = ({ title, results, navigation }) => {
    if (!results.length) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("ResultInfo", { item: item })}>
                            <ResultInfo result={item}/>
                        </TouchableOpacity>
                    )
                } }
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

export default withNavigation(ResultsList)