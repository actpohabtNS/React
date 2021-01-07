import '../_mockLocation'

import React, { useState, useEffect, useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location'
import { Context as LocationContext } from '../context/LocationContext'
import Map from '../components/Map'

const TrackCreateScreen = () => {
    const { addLocation } = useContext(LocationContext);
    const [err, setErr] = useState(null);

    const startWatching = async () => {
        try {
            const { granted } = await requestPermissionsAsync();
            if (!granted) {
                throw new Error('Location permission not granted');
            }
            
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            }, (location) => {
                addLocation(location);
            })
        } catch (err) {
            setErr(err);
        }
    }

    useEffect(() => {
        startWatching();
    }, [])

    return (
        <SafeAreaView forceInset={{ top: "always" }}>
            <Text h3>
                Create a Track
            </Text>

            <Map />

            { err
              ? <Text>Please enable location services</Text>
              : null}
        </SafeAreaView>
    )
}

export default TrackCreateScreen;