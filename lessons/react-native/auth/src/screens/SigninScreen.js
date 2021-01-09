import React from 'react';
import { View } from 'react-native';
import { Header } from '../components/common';
import LoginForm from '../components/LoginForm'

const SigninScreen = () => {
return (
    <View>
      <Header text="Authentication" />
      <LoginForm />
    </View>
  );
}

export default SigninScreen;