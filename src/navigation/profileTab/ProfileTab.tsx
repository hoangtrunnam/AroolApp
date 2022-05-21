import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenNames} from '../ScreenNames';
import Profile from '../../views/profile/Profile';

const Stack = createNativeStackNavigator();

const ProfileTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ScreenNames.Profile}
        component={Profile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ProfileTab;

const styles = StyleSheet.create({});
