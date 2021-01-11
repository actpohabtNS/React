import React from 'react'
import { Card, CardSection, Button } from '../components/common'
import EmployeeForm from '../components/EmployeeForm'
import { connect } from 'react-redux'
import { employeeUpdate, employeeCreate } from '../actions'

const EmployeeCreateScreen = ({ name, phone, shift, employeeUpdate, employeeCreate }) => {
  return (
    <Card>
      
      <EmployeeForm />
      
      <CardSection>
        <Button onPress={() => employeeCreate({ name, phone, shift })}>
          Save
        </Button>
      </CardSection>
    </Card>
  )
}

const mapStateToProps = state => {
  return {
    ...state.employeeForm
  }
}

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreateScreen);