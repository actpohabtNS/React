import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'
import { EvilIcons } from '@expo/vector-icons'

const ShowScreen = ({ navigation }) => {
    const id = navigation.getParam("id");
    const { state } = useContext(Context);

    const blog = state.find((blog) => blog.id === id)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {blog.title}
            </Text>
            
            <Text style={styles.content}>
                {blog.content}
            </Text>
        </View>
    )
}

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity
                onPress={() => navigation.navigate("Edit", {id: navigation.getParam("id")})}
            >
                <EvilIcons
                    name="pencil"
                    style={styles.editButton}
                />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    editButton: {
        fontSize: 35,
        marginRight: 15
    },
    container: {
        marginHorizontal: 20,
        marginTop: 10
    },
    title: {
        fontSize: 24,
        fontWeight: "800",
        marginBottom: 10
    },
    content: {
        fontSize: 18
    }
});

export default ShowScreen