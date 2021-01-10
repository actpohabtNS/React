import React from 'react';
import {View, StyleSheet} from 'react-native';

const CardSection = ({children, passedStyle}) => {
  return <View style={[styles.container, passedStyle]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
});

export { CardSection };
