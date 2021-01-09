import firebase from 'firebase';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, CardSection, Field, Button, Spinner } from './common';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const logIn = (email, password) => {
    setError('');
    setLoading(true);

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(onLoginSuccess)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(onLoginSuccess)
          .catch(onLoginFail)
      })
  } 

  const onLoginFail = () => {
    setError('Authentication Failed.');
    setLoading(false);
  }

  const onLoginSuccess = () => {
    setEmail('');
    setPassword('');
    setError('');
    setLoading(false);
  }

  return (
    <Card>
      <CardSection>
        <Field
          onChangeText={setEmail}
          value={email} label="email"
          placeholder="user@gmail.com"
        />
      </CardSection>

      <CardSection>
        <Field
          onChangeText={setPassword}
          value={password}
          label="password"
          placeholder="password"
          secureTextEntry
        />
      </CardSection>

      <CardSection>
        {
          loading
          ? <Spinner />
          : <Button onPress={() => logIn(email, password)} >
              Log in
            </Button>
        }
      </CardSection>

      {
        error
        ? <CardSection>
            <View style={styles.errorContainer}>
              <Text style={styles.error}>{error}</Text>
            </View>
          </CardSection>
        : null
      }
      
    </Card>
  )
}

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
  },
  error: {
    fontSize: 18,
    color: 'red',
    alignSelf: 'center',
  },
})

export default LoginForm;