import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.SearchBarStyle}>
            <Feather name="search" style={styles.IconStyle}/>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Search"
                style={styles.SearchInputStyle}
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    SearchBarStyle: {
        height: 50,
        flexDirection: "row",
        borderRadius: 5,
        marginTop: 10,
        marginHorizontal: 15,
        backgroundColor: "#ededed"
    },
    IconStyle: {
        marginHorizontal: 10,
        fontSize: 30,
        alignSelf: "center"
    },
    SearchInputStyle: {
        flex: 1,
        fontSize: 18
    }
})

export default SearchBar