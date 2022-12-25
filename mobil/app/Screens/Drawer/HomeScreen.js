import React, { useState, useEffect } from 'react';
import {
  TextStyle,
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
  FlatList
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Schedule } from '../../components/Schedule';
import { CircleButton } from '../../components/CircleButton';
//import { medicines , med } from '../../api/hastaIlac'
import moment from "moment";
import 'moment/src/locale/tr';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector, useDispatch } from 'react-redux';
import { userIn } from '../../redux/modules/auth/actions';

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();
  const med = useSelector((state) => state.medicine.ilac);

  //console.log("vvv"+JSON.stringify(med));

  let trLocale = require('moment/locale/tr');
  moment.updateLocale('tr', trLocale)

  const [day, setDay] = useState(moment());
  const [time, setTime] = useState(); 
  const [medicine, setMedicine] = useState([]);

  useEffect(() => {
    setTime(day.format('dddd, Do MMMM'))
  }, [day]);

  useEffect(() => {
    //dispatch(userIn());

    setTime(day.format('dddd, Do MMMM'))
    let result = [];
    let sira =0;
    med.forEach((x)=> x.ilac.ilacSaatleri.forEach((a) =>{
      result[sira] = {time:a.saat,piece:a.adet ,medId:a.ilacId , name:x.ilac.ilacAdi, info:x.ilac.ilacDetayi,startDate:x.baslangic,endDate:x.bitis};
      sira++;
    }));
    const getNumber = t => +t.replace(/:/g, '');
    result = result.sort(({time :a}, {time: b}) => getNumber(a) - getNumber(b));
    setMedicine(result);
    console.log(result);

    //med.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
   // moment(item.time, "HH:mm")

  }, [med]);



  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>
        <View style={styles.days}>
          <CircleButton icon={"chevron-left"} onPress={() => (setDay(day.clone().add(-1, 'days')))} />
          <CircleButton icon={"chevron-right"} onPress={() => (setDay(day.clone().add(1, 'days')))} />
        </View>
        <Text style={styles.textDay}>{time}</Text>
        <Schedule medicines={medicine} date={day} />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  days: {
    margin: 10,
    justifyContent:'space-between',
    flexDirection:'row'
  },
  textDay: {
    position: 'absolute',
    fontSize: 20,
    color: '#0588DA',
    fontWeight: '800',
    alignSelf: 'center',
    marginVertical: 20,
  },
});
