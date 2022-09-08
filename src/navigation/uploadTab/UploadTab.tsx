import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenNames} from '../ScreenNames';
import Discover from '../../views/discover/Discover';

const Stack = createNativeStackNavigator();

const UploadTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ScreenNames.Upload}
        component={Discover}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default UploadTab;

const styles = StyleSheet.create({});
