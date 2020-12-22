import React from 'react'
import { Text, FlatList, StyleSheet } from 'react-native'

const friends = [
    { name: "friend #1", age: "35" },
    { name: "friend #2", age: "28" },
    { name: "friend #3", age: "22" },
    { name: "friend #4", age: "42" },
    { name: "friend #5", age: "19" },
    { name: "friend #6", age: "48" },
    { name: "friend #7", age: "26" }
]

const styles = StyleSheet.create({
    listItem: {
        marginVertical: 50
    }
})

function List() {
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.name}
            data={friends}
            renderItem={({ item }) => {
                return <Text style={styles.listItem}>{item.name} - age {item.age}</Text>
            }}
        />
    )
}

export default List