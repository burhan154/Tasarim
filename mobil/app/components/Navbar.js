import * as React from 'react';
import { Appbar, Searchbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export default function Navbar  ({ navigation, route })  {
  return (
    <Appbar.Header>
      <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
      
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
  },
});
