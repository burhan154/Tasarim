import React from 'react';
import {
  TextStyle,
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';


const screenWidth = Dimensions.get('window').width;
const bannerHeight = (screenWidth / 75) * 46; // Image ratio is 75x46

export default function AppointmentScreen({ navigation }) {
  return (
    
      

      <SafeAreaView style={styles.container}>
       
        <Text>AppointmentScreenasdasd adasd</Text>
      </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
