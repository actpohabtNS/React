import React from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { CardSection } from './common'

const ListItem = ({ library, selectLibrary, expanded }) => {
  const { id, title, description } = library;

  return (
    <TouchableWithoutFeedback onPress={() => selectLibrary(id)}>
      <View>
        <CardSection>
          <Text style={styles.title}>{title}</Text>
        </CardSection>

        { expanded
         ? <CardSection>
            <Text style={styles.title}>{description}</Text>
          </CardSection>
         : null }
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

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded };
}

export default connect(mapStateToProps, actions)(ListItem);