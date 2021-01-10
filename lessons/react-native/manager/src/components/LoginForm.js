import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { Card, CardSection, Field, Button, Spinner } from './common'
import { emailChanged, passwordChanged, loginUser } from '../actions'

const LoginForm = ({ email, emailChanged, password, passwordChanged, loginUser, error, loading }) => { 
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
        { loading
        ? <Spinner />
        : <Button onPress={() => loginUser({ email, password })}>
            Log in
          </Button> }
        
      </CardSection>
      
    { error
    ? <CardSection>
        <View style={{ flex: 1}}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      </CardSection>
      : null }

    </Card>
  )
}

const styles = StyleSheet.create({
  errorText: {
    fontSize: 18,
    color: 'red',
    alignSelf: 'center'
  },
})

const mapStateToProps = state => {
  return {
    ...state.auth
  }
}

export default connect(
  mapStateToProps,
  { emailChanged, passwordChanged, loginUser }
  )(LoginForm);