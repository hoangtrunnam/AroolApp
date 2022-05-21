import {StyleSheet} from 'react-native';
import React from 'react';
import {ScreenNames} from '../ScreenNames';
import Notifcation from '../../views/notification/Notifcation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const NotificationTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ScreenNames.Notification}
        component={Notifcation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default NotificationTab;

const styles = StyleSheet.create({});
