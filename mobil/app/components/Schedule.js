import React, { useCallback ,useState,useEffect} from 'react';
import { View, Text, Button, StyleSheet ,FlatList} from 'react-native';
import {PushNotification} from './PushNotification'
import moment from "moment";

export function Schedule({medicines,date}) {

    const [time, setTime]=useState();
    
    //console.log(moment().isAfter(moment('22:00', "HH:mm")))
    const renderItem = ({ item,index }) => {
        return (date.isBetween(item.startDate, item.endDate)?(
            moment().isSame(date, 'day')?
                <Medicine key={index} medicine={item} outOfDate={moment(item.time, "HH:mm").isBefore(date)} today={true}/>:
                <Medicine key={index} medicine={item} outOfDate={moment(item.time, "HH:mm").isAfter(date)} today={false}/>):null
        );
    };

  
    useEffect(() => {
        //moment().isSame(date,'day')?console.log("true"):console.log("false")
        setTime(date.format('dddd, Do MMMM'))

        /*setInterval(() => { 
            var hoursAndMinutes = moment().format("HH:mm");
            setTime(hoursAndMinutes);
          }, 1000)*/

          //PushNotification("asd","asd");
      }, [date]);

    return (
        <View style={{width:'100%'}}>
            <FlatList
            style={{width:'100%'}}
                ListFooterComponent={<Text style={{marginBottom:60}}></Text>}
                //ListHeaderComponent={<Text style={styles.textDay}>{time}</Text>}
                data={medicines}
                renderItem={renderItem}  
            />
        </View>
    );
}

function Medicine({medicine,outOfDate,today}) {
    var a = moment();//now
    var b = moment(moment(medicine.time, "HH:mm"));
    //console.log("---------")
    //console.log(a.diff(b, 'minutes')) // 44700
    var c = a.diff(b, 'minutes');
    if(c>-30 && c<0){
        console.log(c) // 44700
        PushNotification(medicine.name,moment(medicine.time, "HH:mm").fromNow()+" "+medicine.name);
    }
        
    return (
        <View style={outOfDate? styles.containerRed: styles.container}>
            

            <View style={outOfDate? styles.leftRed:styles.leftBlue} />
            <View style={styles.right}>
                <View style={styles.time}>
                    <Text style={styles.textDate}>{medicine.time}</Text>
                    <Text style={styles.textInfo}>{today?moment(medicine.time, "HH:mm").fromNow():null}</Text>
                </View>
                <Text style={styles.textTitle}>{medicine.name}</Text>
                <Text style={styles.textInfo}>{medicine.piece} Adet</Text>
                <Text style={styles.textInfo}>{medicine.info}</Text>
                <Text style={styles.textInfo}>{today?moment(medicine.time, "HH:mm").fromNow():null}</Text>
            </View>
        </View> 
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#efefff',
        height: 140,
        borderRadius: 8,
        marginHorizontal: 30,
        marginVertical: 5,
        flexDirection:'row'
    },
    containerRed: {
        backgroundColor: '#fff1f1',
        height: 140, 
        borderRadius: 8,
        marginHorizontal: 30,
        marginVertical: 5,
        flexDirection:'row'
    },
    leftBlue: {
        backgroundColor: '#0588DA',
        height: '100%',
        width: 8,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },
    leftRed: {
        backgroundColor: '#ff6e6e',
        height: '100%',
        width: 8,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },
    right: {
        height: '100%',
        width: '100%',
        padding: 20,
        justifyContent:'space-around',
    },
    textTitle: {
        fontSize:24,
        color:'#0588DA',
        fontWeight:'700', 
    },
    textDate: {
        fontSize:40,
        color:'#0588DA',
        fontWeight:'800',
    },
    textDay: {
        fontSize:20,
        color:'#0588DA',
        fontWeight:'800',
        alignSelf:'center',
        marginVertical:20,
    },
    textInfo: {
        fontSize:14,
        color:'#0588DA',
    },
    time:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginRight:10,
    }
});




Şekil 5.1. Mobil uygulama giriş sayfası
Şekil 5.2. Mobil uygulama kayıt sayfası
Şekil 5.3. Mobil uygulama anasayfası
Şekil 5.4. Mobil uygulama menü
Şekil 5.5. Mobil uygulama geçmiş tarih
Şekil 5.6. Mobil uygulama gelecek tarih
Şekil 5.7. Mobil uygulama bildirim 