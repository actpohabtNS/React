import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { Card, CardSection, Field, Button } from '../components/common'
import { Picker } from '@react-native-picker/picker'
import { connect } from 'react-redux'
import { employeeUpdate } from '../actions'

const EmployeeCreateScreen = ({ name, phone, shift, employeeUpdate }) => {
  return (
    <Card>
      <CardSection>
        <Field
          label="Name"
          placeholder="John"
          value={name}
          onChangeText={(value) => employeeUpdate({ prop: 'name', value })}
        />
      </CardSection>

      
      <CardSection>
        <Field
          label="Phone"
          placeholder="555-555-5555"
          value={phone}
          onChangeText={(value) => employeeUpdate({ prop: 'phone', value })}
        />
      </CardSection>

      
      <CardSection passedStyle={{ justifyContent: 'center' }}>
        <Text style={styles.pickerLabel}>Shift</Text>
        <Picker
          style={{ flex: 2, marginLeft: -20 }}
          selectedValue={shift}
          onValueChange={value => employeeUpdate({ prop: 'shift', value })}
        >
          <Picker.Item label="Monday" value="Monday"/>
          <Picker.Item label="Tuesday" value="Tuesday"/>
          <Picker.Item label="Wednesday" value="Wednesday"/>
          <Picker.Item label="Thursday" value="Thursday"/>
          <Picker.Item label="Friday" value="Friday"/>
          <Picker.Item label="Saturday" value="Saturday"/>
          <Picker.Item label="Sunday" value="Sunday"/>
        </Picker>
      </CardSection>

      
      <CardSection>
        <Button>
          Save
        </Button>
      </CardSection>
    </Card>
  )
}

const styles = StyleSheet.create({
  pickerLabel: {
    fontSize: 18,
    paddingLeft: 5,
    flex: 1,
    lineHeight: 40,
  },
})

const mapStateToProps = state => {
  return {
    ...state.employeeForm
  }
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreateScreen);