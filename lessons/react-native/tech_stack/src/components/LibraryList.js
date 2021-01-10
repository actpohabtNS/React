import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import ListItem from './ListItem'

const LibraryList = ({ libraries }) => {

  return (
    <FlatList
      data={libraries}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => <ListItem library={item} />}
    />
  )
}

const mapStateToProps = state => {
  return { libraries: state.libraries }
}

export default connect(mapStateToProps)(LibraryList);