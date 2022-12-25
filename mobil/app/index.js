import React, { useCallback, useEffect, useState } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux';
import { restoreToken } from './redux/modules/auth/actions';
import { getAllMedicine } from './redux/modules/medicine/actions';


import * as SecureStore from 'expo-secure-store';
import { NavigationContainer } from '@react-navigation/native';

import {SplashScreen,LoginRoute,DrawerRoute} from './Routes';


const MainContainer = ({ navigation }) => {
  const Stack = createStackNavigator();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.auth);

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      try { 
        userToken = await SecureStore.getItemAsync('userToken');
        //console.log(userToken);
      } catch (e) {
        userToken = null;
       // console.log('store token error');
      }
      userToken != null && userToken != "" ?(
        dispatch(restoreToken(userToken))
        //dispatch(getAllMedicine())
      ):null
    };
    bootstrapAsync();  
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {state.isLoading ? (
          <Stack.Screen name="Splash" component={SplashScreen} />
        ) : state.userToken === null || state.userToken === "" ? (
          <Stack.Screen name="SignIn" component={LoginRoute} />
        ) : (
          <Stack.Screen name="Home" component={DrawerRoute} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainContainer;