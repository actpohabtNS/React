import _ from 'lodash'
import React, { useEffect } from 'react'
import { Card, CardSection, Button } from '../components/common'
import { connect } from 'react-redux'

import EmployeeForm from '../components/EmployeeForm'
import { employeeUpdate } from '../actions'

const EmployeeEdit = ({ employee, name, phone, shift, employeeUpdate }) => {
  useEffect(() => {
    _.each(employee, (value, prop) => {
      employeeUpdate({ prop, value })
    })
  }, [])

  return (
    <Card>
      
      <EmployeeForm />
      
      <CardSection>
        <Button onPress={() => console.log(name, phone, shift)}>
          Save Changes
        </Button>
      </CardSection>
      <CardSection>
        <Button>
          Fire
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

export default connect(mapStateToProps, { employeeUpdate })(EmployeeEdit);