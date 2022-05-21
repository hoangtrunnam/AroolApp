import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenNames} from '../ScreenNames';
import Discover from '../../views/discover/Discover';

const Stack = createNativeStackNavigator();
const DiscoverTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ScreenNames.Discover}
        component={Discover}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default DiscoverTab;

const styles = StyleSheet.create({});
