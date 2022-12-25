import React, { useState } from 'react';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {LoginScreen,RegisterScreen} from '../Screens/Auth';
import DrawerRoute from './DrawerRoute';

const Stack = createStackNavigator();

export function LoginRoute({ navigation }) {
  return (
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      </Stack.Navigator>

  );
}
