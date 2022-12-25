import React, { useCallback ,useState,useEffect} from 'react';
import { View, Text, Button, StyleSheet ,FlatList} from 'react-native';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });


export async function PushNotification(title,body) {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: title,
        body: body,
        data: { data: 'notification' },
      },
      trigger: { seconds: 1 },
    });
  }


