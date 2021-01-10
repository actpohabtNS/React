import React from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { CardSection } from './common'

const ListItem = ({ library, selectLibrary }) => {
  const { id, title } = library;

  return (
    <TouchableWithoutFeedback onPress={() => selectLibrary(id)}>
      <View>
        <CardSection>
          <Text style={styles.title}>{title}</Text>
        </CardSection>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    paddingLeft: 15,
  },
})

export default connect(null, actions)(ListItem);