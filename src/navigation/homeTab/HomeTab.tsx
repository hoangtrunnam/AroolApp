import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenNames} from '../ScreenNames';
import Home from '../../views/home/Home';
import Notifcation from '../../views/notification/Notifcation';

const Stack = createNativeStackNavigator();
const HomeTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ScreenNames.Home}
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ScreenNames.Notification}
        component={Notifcation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeTab;

const styles = StyleSheet.create({});
