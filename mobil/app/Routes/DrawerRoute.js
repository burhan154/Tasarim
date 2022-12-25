import React, { useState,useEffect } from 'react';
import { CustomDrawer } from '../components/CustomDrawer';
import { DrawerPages } from '../data/pages';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Navbar from '../components/Navbar';
import { useSelector, useDispatch } from 'react-redux';  
import { userIn } from '../redux/modules/auth/actions';
import { getAllMedicine } from '../redux/modules/medicine/actions';
const Drawer = createDrawerNavigator();

export function DrawerRoute({ navigation }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userIn()); 
    dispatch(getAllMedicine()); 
  }, []);



  return (
    <Drawer.Navigator
      initialRouteName="Anasayfa"
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        //headerShown: false ,
        drawerInactiveTintColor: '#0588DA',
        drawerActiveBackgroundColor: '#0588DA',
        drawerActiveTintColor: '#fff',
        drawerLabelStyle: {
          fontSize: 16,
          marginLeft: -15,
        },
        headerStyle: {
          backgroundColor: '#0588DA',
        },
        headerTintColor: '#fff',
      }}>

      {DrawerPages.map((data, index) => (
        <Drawer.Screen
          {...data}
          key={index}
          options={{
            title: data.title,

            drawerIcon: ({ color }) => (
              <Icon
                name={data.icon}
                color={color}
                size={26}
                style={{ paddingLeft: 10 }}
              />
            ),
          }}
        />
      ))}
    </Drawer.Navigator>
  );
}