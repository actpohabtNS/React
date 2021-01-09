import React from 'react'
import { View } from 'react-native'
import { Header, Button } from '../components/common'

const SignoutScreen = () => {
  return (
    <View>
      <Header text="Authentication" />
      <Button>
        Log out
      </Button>
    </View>
  )
}

export default SignoutScreen;