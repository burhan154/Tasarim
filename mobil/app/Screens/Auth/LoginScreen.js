import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, FlatList, Image } from 'react-native';
import { Button, TextInput, Divider, HelperText } from 'react-native-paper';
import { signIn } from '../../redux/modules/auth/actions';

export function LoginScreen({navigation}) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [hasErrors, setHasErrors] = React.useState(false);
  const dispatch = useDispatch();

  const Sign = (username, password) => {
    if (username === '') {
      setError('The username field is required');
      setHasErrors(true);
    } else if (password === '') {
      setError('The password field is required');
      setHasErrors(true);
    } else {
      setHasErrors(false);
      dispatch(signIn( username, password ));
    }
  };
  
  return (
    <View
      style={{ flex: 1, justifyContent: 'center', backgroundColor: '#fff' }}>
      <View style={{ margin: 30, justifyContent: 'center' }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
       
          <Text style={{ fontSize: 38, fontWeight: 'bold', marginBottom: 10 }}>
            Hoş Geldiniz
          </Text>
          <Text style={{ fontSize: 18 }}>Devam etmek için giriş yapınız</Text>
        </View>

        <TextInput
          label="E-mail"
          mode="outlined"
          value={username}
          onChangeText={setUsername}
          left={<TextInput.Icon name="email" />}
        />
        <TextInput
          label="Şifre"
          mode="outlined"
          value={password}
          secureTextEntry
          onChangeText={setPassword}
          left={<TextInput.Icon name="lock" />}
          right={<TextInput.Icon name="eye" />}
        />
        <HelperText type="error" visible={hasErrors}>
          {error}
        </HelperText>
        <Button
          style={{ marginTop: 15, backgroundColor: '#01ba76', padding: 10 }}
          icon="send"
          mode="contained"
          onPress={() => Sign(username, password)}>
          Giriş Yap
        </Button>
        <Button
          style={{ marginTop: 15, backgroundColor: '#111', padding: 10 }}
          icon="account-plus"
          mode="contained"
          onPress={() => navigation.navigate('RegisterScreen')}>
          Kayıt Ol
        </Button>
      </View>
    </View>
  );
}
