import React from 'react'
import { View, StyleSheet } from 'react-native'
import LibraryList from '../components/LibraryList'
import { Header } from '../components/common'
import { SafeAreaView } from 'react-native-safe-area-context'

const ListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header text="Technologies" />
      <LibraryList />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default ListScreen