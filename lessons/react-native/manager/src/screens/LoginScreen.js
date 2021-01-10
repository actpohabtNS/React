import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import LoginForm from '../components/LoginForm'

const LoginScreen = () => {
  return (
    <SafeAreaView>
      <LoginForm />
    </SafeAreaView>
  )
}

export default LoginScreen;