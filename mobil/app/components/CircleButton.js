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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function CircleButton({ icon, color='#0588DA', size = 40, onPress, }) {
    return (
        <View>
        <TouchableOpacity onPress={onPress}>
            <View style={styles.circle}>
                <Icon
                    name={icon}
                    color={color}
                    size={size}
                />
            </View>
        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    circle: {
        backgroundColor: '#efefff',
        height: 50,
        width: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
