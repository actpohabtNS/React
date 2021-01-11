import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { CardSection } from './common'

const ListItem = ({ employee }) => {
  return (
    <CardSection>
      <View style={styles.container}>
        <Text style={styles.text}>
          {employee.name}
        </Text>
      </View>
    </CardSection>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
  },
  text: {
    fontSize: 20,
    alignSelf: 'center',
  },
})

export default ListItem;