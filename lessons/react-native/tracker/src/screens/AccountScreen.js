import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Text } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'
import { FontAwesome } from '@expo/vector-icons'

const AccountScreen = () => {
    const { signout } = useContext(AuthContext);

    return (
        <View style={styles.container} >
            <Text h3>
                Account Screen
            </Text>

            <Spacer />

            <Button
                title="Sign out"
                onPress={signout}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 30
    }
})

AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon: <FontAwesome name="gear" size={25} />
}

export default AccountScreen;