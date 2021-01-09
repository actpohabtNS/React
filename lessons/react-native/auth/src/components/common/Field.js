import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Field = ({ label, value, placeholder, onChangeText, secureTextEntry }) => {
  const { container, input, labelStyle } = styles;

  return (
    <View style={container}>
      <Text style={labelStyle}>{label}</Text>
      
      <TextInput
        secureTextEntry={secureTextEntry}
        autoCapitalize='none'
        autoCorrect={false}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={input}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  input: {
    color: '#000',
    paddingHorizontal: 5,
    fontSize: 18,
    flex: 2,
    borderBottomWidth: 2,
    borderBottomColor: '#555'
  },
  labelStyle: {
    fontSize: 18,
    flex: 1,
  },
})

export { Field };