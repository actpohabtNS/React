import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const EditScreen = ({ navigation }) => {
    const id = navigation.getParam("id");
    const { state, editBlogPost } = useContext(Context);

    const blog = state.find((blog) => blog.id === id)

    return (
        <BlogPostForm
            onSubmit={(title, content) => {
                editBlogPost(id, title, content, () => navigation.pop())
            }}
            initialValues={{ title: blog.title, content: blog.content }}
            labels={{ title: "Edit Title:", content: "Edit Content:" }}
        />
    )
}

const styles = StyleSheet.create({});

export default EditScreen