import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DrawerPages } from '../data/pages';

import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../redux/modules/auth/actions';

const { height } = Dimensions.get('window');

export const CustomDrawer = (props, { navigation }) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const drawerList = DrawerPages.map((data, index) => {
    let routeIndex = props.state.routeNames.findIndex((obj) => obj == data.name);
    return (
      <>
        {routeIndex < 0 ? null : (
          <View
            key={index}
            style={{
              justifyContent: 'center',
              top: 0,
              height: (height - 200) / 10,
            }}>
            {props.state.index === index ? (
              <View
                style={{
                  width: 5,
                  backgroundColor: '#23A9F2',
                  height: '100%',
                  position: 'absolute',
                }}
              />
            ) : null}
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate(data.name);
              }}>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  paddingHorizontal: 10,
                }}>
                <Icon
                  name={data.icon}
                  color={'#0588DA'}
                  size={30}
                  style={{ paddingHorizontal: 10 }}
                />
                <Text
                  style={{ color: '#0588DA', fontSize: 20, fontWeight: '400' }}>
                  {' '}
                  {data.name}{' '}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </>
    );
  });

  return (
    <View style={{ flex: 1, backgroundColor: '#ddd' }}>
      <ImageBackground style={{ paddingVertical: 30, flexDirection: 'row' }}>
        <Image
          source={{
            uri: 'https://bootdey.com/img/Content/avatar/avatar1.png',
          }}
          style={{
            height: 80,
            width: 80,
            borderRadius: 40,
            margin: 10,
          }}
        />
        <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 10 }}>
          <Text style={{ color: '#bbb', fontSize: 14 }}>İyi Günler,</Text>
          <Text style={{ color: '#0588DA', fontSize: 24 }}>
            {auth.firstName + " " + auth.lastName}
          </Text>
        </View>

        <View style={{ flexDirection: 'row' }}></View>
      </ImageBackground>
      <DrawerItemList {...props} />
      <View
        style={{
          flexDirection: 'row',
          height: 80,
          width: '100%',
          bottom: 0,
          position: 'absolute',
          backgroundColor: '#bbb',
          justifyContent: 'center',
          alignItems: 'center',
        }}>

        
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => {
            dispatch(signOut());
          }}>
            <Text style={{ color: 'red', fontSize: 24 }}>Çıkış</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
