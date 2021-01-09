import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from '../components/common';
import LoginForm from '../components/LoginForm'

const SigninScreen = () => {
return (
    <SafeAreaView>
      <Header text="Authentication" />
      <LoginForm />
    </SafeAreaView>
  );
}

export default SigninScreen;