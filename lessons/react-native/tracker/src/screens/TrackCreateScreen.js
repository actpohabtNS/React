import '../_mockLocation'

import React, { useContext, useCallback } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import { withNavigationFocus } from 'react-navigation'

import { Context as LocationContext } from '../context/LocationContext'
import Map from '../components/Map'
import TrackForm from '../components/TrackForm'
import useLocation from '../hooks/useLocation'

const TrackCreateScreen = ({ isFocused }) => {
    const { state, addLocation } = useContext(LocationContext);

    const callback = useCallback((location) => {
        addLocation(location, state.recording)
    }, [state.recording])

    const [err] = useLocation(isFocused, callback); 

    return (
        <SafeAreaView forceInset={{ top: "always" }}>
            <Text h3>
                Create a Track
            </Text>

            <Map />

            { err
              ? <Text>Please enable location services</Text>
              : null }

            <TrackForm />
        </SafeAreaView>
    )
}

export default withNavigationFocus(TrackCreateScreen);