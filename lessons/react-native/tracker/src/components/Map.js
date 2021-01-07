import React, { useContext } from 'react'
import { Text, ActivityIndicator, StyleSheet } from 'react-native'
import { Context as LocationContext } from '../context/LocationContext'
import MapView, { Polyline } from 'react-native-maps'

const Map = () => {
    const { state: { currentLocation } } = useContext(LocationContext);

    if (!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} color="#0000ff" />;
    }

    return (
        <MapView
            style={styles.map}
            initialRegion={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
            region={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
        >
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
})

export default Map;