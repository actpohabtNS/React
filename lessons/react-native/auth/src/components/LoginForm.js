import { database } from 'firebase';
import React, { useState } from 'react';
import { Card, CardSection, Field, Button } from './common';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <Card>
      <CardSection>
        <Field label="email" placeholder="user@gmail.com" />
      </CardSection>

      <CardSection>
        <Field label="password" placeholder="password" secureTextEntry />
      </CardSection>

      <CardSection>
        <Button>
          Log in
        </Button>
      </CardSection>
    </Card>
  )
}

export default LoginForm;