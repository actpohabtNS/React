import React from 'react'
import { StyleSheet } from 'react-native'
import { Card, CardSection, Field, Button } from '../components/common'

const EmployeeCreateScreen = () => {
  return (
    <Card>
      <CardSection>
        <Field
          label="Name"
          placeholder="John"
        />
      </CardSection>

      
      <CardSection>
        <Field
          label="Phone"
          placeholder="555-555-5555"
        />
      </CardSection>

      
      <CardSection>
        
      </CardSection>

      
      <CardSection>
        <Button>
          Save
        </Button>
      </CardSection>
    </Card>
  )
}

export default EmployeeCreateScreen;