import React from 'react'
import {
  View,
  Text,
  TouchableWithoutFeedback,
  LayoutAnimation,
  StyleSheet,
  UIManager
} from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { CardSection } from './common'

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const ListItem = ({ library, selectLibrary, expanded }) => {
  const { id, title, description } = library;
  const { titleStyle, selectedTitle, selectedCard, descriptionStyle, descriptionCard } = styles;

  return (
    <TouchableWithoutFeedback onPress={() => {
      LayoutAnimation.easeInEaseOut();
      selectLibrary(id);
    }}>
      <View>
        <CardSection passedStyle={expanded ? selectedCard : null}>
          <Text
            style={[titleStyle, expanded ? selectedTitle : null]}
          >
            {title}
          </Text>
        </CardSection>

        { expanded
         ? <CardSection passedStyle={descriptionCard}>
            <Text
              style={descriptionStyle}
            >
              {description}
            </Text>
          </CardSection>
         : null }
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    paddingLeft: 15,
  },
  selectedTitle: {
    fontWeight: '700',
  }, 
  selectedCard: {
    backgroundColor: '#bfd6ff',
  },
  descriptionStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
  descriptionCard: {
    backgroundColor: '#e0ebff',
  }
})

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded };
}

export default connect(mapStateToProps, actions)(ListItem);