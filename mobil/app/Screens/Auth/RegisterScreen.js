import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, FlatList, Image } from 'react-native';
import { Button, TextInput, Appbar } from 'react-native-paper';

export const RegisterScreen = ({ navigation }) => {
  const dispatch = useDispatch();
 
  return (
    <View style={{ flex: 1}}>
      <Appbar.Header style={{backgroundColor: '#fff'}}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      </Appbar.Header>
      <View
        style={{ flex: 1, justifyContent: 'center', backgroundColor: '#fff' }}>
        <View style={{ margin: 30, justifyContent: 'center' }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 30,
            }}>
            <Text
              style={{ fontSize: 38, fontWeight: 'bold', marginBottom: 10 }}>
              Kayıt Ol
            </Text>
            <Text style={{ fontSize: 18 }}>Yeni hesap oluştur.</Text>
          </View>
          <TextInput
            label="Ad"
            mode="outlined"
            left={<TextInput.Icon name="account" />}
          />
          <TextInput
            label="Soyad"
            mode="outlined"
            left={<TextInput.Icon name="account" />}
          />
          <TextInput
            label="Email"
            mode="outlined"
            left={<TextInput.Icon name="email" />}
          />
          <TextInput
            label="Şifre"
            mode="outlined"
            secureTextEntry
            left={<TextInput.Icon name="lock" />}
            right={<TextInput.Icon name="eye" />}
          />
          <TextInput
            label="Tekrar Şifre"
            mode="outlined"
            secureTextEntry
            left={<TextInput.Icon name="lock" />}
            right={<TextInput.Icon name="eye" />}
          />
          <Button
            style={{ marginTop: 15, backgroundColor: '#01ba76', padding: 10 }}
            icon="account-plus"
            mode="contained"
            onPress={() => navigation.navigate('Register')}>
            Kayıt Ol
          </Button>
          <Button
            style={{ marginTop: 15, backgroundColor: '#111', padding: 10 }}
            icon="send"
            mode="contained"
            onPress={() => navigation.goBack()}>
            Giriş Yap
          </Button>
        </View>
      </View>
    </View>
  );
};
