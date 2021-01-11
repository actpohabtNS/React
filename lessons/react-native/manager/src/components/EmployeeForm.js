import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { employeeUpdate, employeeCreate } from '../actions'
import { CardSection, Field } from '../components/common'
import { Picker } from '@react-native-picker/picker'

const EmployeeForm = ({ name, phone, shift, employeeUpdate}) => {
  return (
    <View>
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
    </View>
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

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);