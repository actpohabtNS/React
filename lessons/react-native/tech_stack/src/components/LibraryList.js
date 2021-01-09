import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

const LibraryList = () => {
  return (
    <View>
      <Text>I'm a list</Text>
    </View>
  )
}

export default connect()(LibraryList);