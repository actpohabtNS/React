import React from 'react'
import { Card, CardSection, Field, Button } from './common'

const LoginForm = () => { 
  return (
    <Card>
      <CardSection>
        <Field
          label="email"
          placeholder="user@gmail.com"
        />      
      </CardSection>
      
      <CardSection>
        <Field
          secureTextEntry
          label="password"
          placeholder="password"
        />        
      </CardSection>

      <CardSection>
        <Button>
          Log in
        </Button>
      </CardSection>
      
    </Card>
  )
}