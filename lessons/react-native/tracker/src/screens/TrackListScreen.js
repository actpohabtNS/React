import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const TrackListScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={{ fontSize: 48 }}>
                TrackList Screen
            </Text>

            <Button
                title={'Go to Track Detail'}
                onPress={() => navigation.navigate('TrackDetail')}
            />
        </View>
    )
}

export default TrackListScreen;