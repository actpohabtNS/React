import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import { requestPermissionsAsync } from 'expo-location'
import Map from '../components/Map'

const TrackCreateScreen = () => {
    const [err, setErr] = useState(null);

    const startWatching = async () => {
        try {
            const { granted } = await requestPermissionsAsync();
            if (!granted) {
                throw new Error('Location permission not granted');
            }
        } catch (err) {
            setErr(e);
        }
    }

    return (
        <SafeAreaView forceInset={{ top: "always" }}>
            <View>
                <Text h3>
                    Create a Track
                </Text>

                <Map />
            </View>
        </SafeAreaView>
    )
}

export default TrackCreateScreen;