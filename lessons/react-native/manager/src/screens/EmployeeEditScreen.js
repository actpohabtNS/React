import _ from 'lodash'
import React, { useEffect } from 'react'
import { Card, CardSection, Button } from '../components/common'
import { connect } from 'react-redux'

import EmployeeForm from '../components/EmployeeForm'
import { employeeUpdate, employeeSave } from '../actions'

const EmployeeEdit = ({ employee, name, phone, shift, employeeUpdate, employeeSave }) => {
  useEffect(() => {
    _.each(employee, (value, prop) => {
      employeeUpdate({ prop, value })
    })
  }, [])

  return (
    <Card>
      
      <EmployeeForm />
      
      <CardSection>
        <Button onPress={() => employeeSave({ name, phone, shift, uid: employee.uid })}>
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

export default connect(mapStateToProps, { employeeUpdate, employeeSave })(EmployeeEdit);