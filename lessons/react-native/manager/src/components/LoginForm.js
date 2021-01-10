import React from 'react'
import { connect } from 'react-redux'
import { Card, CardSection, Field, Button } from './common'
import { emailChanged, passwordChanged } from '../actions'

const LoginForm = ({ email, emailChanged, password, passwordChanged }) => { 
  return (
    <Card>
      <CardSection>
        <Field
          label="email"
          placeholder="user@gmail.com"
          onChangeText={emailChanged}
          value={email}
        />      
      </CardSection>
      
      <CardSection>
        <Field
          secureTextEntry
          label="password"
          placeholder="password"
          onChangeText={passwordChanged}
          value={password}
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

const mapStateToProps = state => {
  return {
    ...state.auth
  }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);