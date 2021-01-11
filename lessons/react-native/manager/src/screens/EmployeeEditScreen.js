import _ from 'lodash'
import React, { useState, useEffect } from 'react'
import { Card, CardSection, Button, ConfirmModal } from '../components/common'
import { connect } from 'react-redux'
import Communications from 'react-native-communications'

import EmployeeForm from '../components/EmployeeForm'
import { employeeUpdate, employeeSave, employeeDelete } from '../actions'

const EmployeeEdit = ({ employee, name, phone, shift, employeeUpdate, employeeSave, employeeDelete }) => {
  useEffect(() => {
    _.each(employee, (value, prop) => {
      employeeUpdate({ prop, value })
    })
  }, [])

  const [showModal, setShowModal] = useState(false);

  return (
    <Card>
      
      <EmployeeForm />
      
      <CardSection>
        <Button onPress={() => employeeSave({ name, phone, shift, uid: employee.uid })}>
          Save Changes
        </Button>
      </CardSection>

      <CardSection>
        <Button onPress={() => Communications.text(phone, `Your upcoming shift is on ${shift}`)}>
          Text Schedule
        </Button>
      </CardSection>

      <CardSection>
        <Button onPress={() => setShowModal(!showModal)}>
          Fire
        </Button>
      </CardSection>

      <ConfirmModal
        visible={showModal}
        onAccept={() => employeeDelete({ uid: employee.uid })}
        onDecline={() => setShowModal(false)}
      >
        Are you sure you want to FIRE them?
      </ConfirmModal>
    </Card>
  )
}

const mapStateToProps = state => {
  return {
    ...state.employeeForm
  }
}

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);