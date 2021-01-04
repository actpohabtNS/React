import React, { useContext } from 'react'
import { View, Text, Button, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'

const IndexScreen = () => {
    const { state, addBlogPost, deleteBlogPost } = useContext(Context);

    return (
        <View>
            <Text>Index Screen</Text>

            <Button
                title="Add Post"
                onPress={addBlogPost}
            />

            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            style={styles.row}
                        >
                            <Text style={styles.text}>
                                {item.title}
                            </Text>

                            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                <Feather
                                    name="trash"
                                    style={styles.icon}
                                />
                            </TouchableOpacity>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderColor: 'gray',
        paddingVertical: 15,
        paddingHorizontal: 10   
    },
    text: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
})

export default IndexScreen