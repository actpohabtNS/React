import React from 'react';
import { Header } from './src/components/common'

export default function App() {
  return (
    <View style={styles.container}>
      <Header text="Authentication" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
