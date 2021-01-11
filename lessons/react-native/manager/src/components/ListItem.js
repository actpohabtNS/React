import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { CardSection } from './common'
import { Actions } from 'react-native-router-flux'

const ListItem = ({ employee }) => {
  return (
    <TouchableOpacity onPress={() => Actions.employeeEdit({ employee })}>
      <CardSection>
        <View style={styles.container}>
          <Text style={styles.text}>
            {employee.name}
          </Text>
        </View>
      </CardSection>
    </TouchableOpacity>
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