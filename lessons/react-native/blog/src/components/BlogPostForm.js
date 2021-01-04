import React, { useState, useContext } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'

const BlogPostForm = ({ onSubmit, initialValues, labels }) => {
    const [title, setTitle] = useState(initialValues.title)
    const [content, setContent] = useState(initialValues.content)

    return (
        <View>
            <Text style={styles.text}>
                {labels.title}
            </Text>
            <TextInput
                style={styles.input}
                autoCapitalize="sentences"
                autoCorrect={false}
                value={title}
                onChangeText={text => setTitle(text)}
            />
            
            <Text style={styles.text}>
                {labels.content}
            </Text>
            <TextInput
                style={styles.input}
                autoCapitalize="sentences"
                autoCorrect={false}
                value={content}
                onChangeText={text => setContent(text)}
            />

            <Button
                title="Save"
                onPress={() => onSubmit(title, content)}
            />
        </View>
    )
}

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    },
    labels: {
        title: "Enter Title:",
        content: "Enter Content:"
    }
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

export default BlogPostForm