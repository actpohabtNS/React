import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation'

const NavLink = ({ text, routeName, navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
            <Text style={styles.link}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    link: {
        color: "blue",
        fontSize: 16,
        alignSelf: "center"
    }
})

export default withNavigation(NavLink);