import React, { useState, useContext } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'

const CreateScreen = ({ navigation }) => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const { addBlogPost } = useContext(Context);

    return (
        <View>
            <Text style={styles.text}>
                Enter Title
            </Text>
            <TextInput
                style={styles.input}
                autoCapitalize="sentences"
                autoCorrect={false}
                value={title}
                onChangeText={text => setTitle(text)}
            />
            
            <Text style={styles.text}>
                Enter Content
            </Text>
            <TextInput
                style={styles.input}
                autoCapitalize="sentences"
                autoCorrect={false}
                value={content}
                onChangeText={text => setContent(text)}
            />

            <Button
                title="Add Blog Post"
                onPress={() => addBlogPost(title, content, () => {
                    navigation.navigate('Index')
                })}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        marginLeft: 15
    },
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: "black",
        padding: 5,
        marginHorizontal: 15,
        marginBottom: 20
    }
});

export default CreateScreen