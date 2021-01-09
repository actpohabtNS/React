import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm'

export default function App() {
  useEffect(() => {
    
  }, []);

  return (
    <View>
      <Header text="Authentication" />
      <LoginForm />
    </View>
  );
}

const styles = StyleSheet.create({
});
