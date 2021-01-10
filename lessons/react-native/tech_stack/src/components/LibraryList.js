import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

const LibraryList = (props) => {
  console.log(props);

  return (
    <View>
      <Text>I'm a list</Text>
    </View>
  )
}

const mapStateToProps = state => {
  return { libraries: state.libraries }
}

export default connect(mapStateToProps)(LibraryList);