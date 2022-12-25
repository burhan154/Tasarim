import React, { useCallback } from 'react';
import { View, Text, Button } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

export function SplashScreen() {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <ActivityIndicator animating={true} size={50} color={'#0588DA'} />
    </View>
  );
}