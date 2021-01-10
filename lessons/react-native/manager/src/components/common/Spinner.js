import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Spinner = ({ size, color }) => {
  return (
    <View style={styles.spinnerContainer}>
      <ActivityIndicator size={size || 'large'} color={color || '#0000ff'} />
    </View>
  )
};

const styles = StyleSheet.create({
  spinnerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export {Spinner};