import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  ActivityIndicator,
} from 'react-native';

import useLoginViewModel from '../viewmodels/LoginViewModel';

const LoginScreen = () => {
  const { login, loading, error } =
    useLoginViewModel();

  const [email, setEmail] = useState('');
  const [password, setPassword] =
    useState('');

  const onLogin = async () => {
    const response = await login(
      email,
      password,
    );

    if (response) {
      console.log(
        'Login Success',
        response,
      );

      // Navigate Home
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {error ? (
        <Text>{error}</Text>
      ) : null}

      {loading ? (
        <ActivityIndicator />
      ) : (
        <Button
          title="Login"
          onPress={onLogin}
        />
      )}
    </View>
  );
};

export default LoginScreen;