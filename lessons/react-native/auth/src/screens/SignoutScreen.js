import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Card, CardSection, Header, Button } from '../components/common'
import useAuth from '../hooks/useAuth'

const SignoutScreen = () => {
  const {logOut} = useAuth();

  return (
    <SafeAreaView>
      <Header text="Authentication" />
      <Card>
        <CardSection>
          <Button onPress={logOut} >
            Log out
          </Button>
        </CardSection>
      </Card>
    </SafeAreaView>
  )
}

export default SignoutScreen;