import React, { useContext } from 'react'
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { Text, ListItem } from 'react-native-elements'
import { NavigationEvents } from 'react-navigation'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Context as TrackContext } from '../context/TrackContext'

const TrackListScreen = ({ navigation }) => {
    const { state, fetchTracks } = useContext(TrackContext);

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <NavigationEvents onWillFocus={fetchTracks} />

            <Text h3>
                TrackList Screen
            </Text>

            <FlatList
                data={state}
                keyExtractor={item => item._id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('TrackDetail', { _id: item._id })}>
                            <ListItem bottomDivider>
                                <ListItem.Content>
                                    <ListItem.Title>{item.name}</ListItem.Title>
                                </ListItem.Content>
                                <ListItem.Chevron />
                            </ListItem>
                        </TouchableOpacity>
                    )
                }}
            />
        </SafeAreaView>
    )
}

export default TrackListScreen;