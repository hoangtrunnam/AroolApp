import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenNames} from './ScreenNames';
import Tabs from './Tabs';
import Home from '../views/home/Home';
import Notifcation from '../views/notification/Notifcation';
import Discover from '../views/discover/Discover';
import Upload from '../views/upload/Upload';
import Profile from '../views/profile/Profile';

export type StackParamList = {
  [ScreenNames.Home]: undefined;
  [ScreenNames.Discover]: undefined;
  [ScreenNames.Upload]: undefined;
  [ScreenNames.Notification]: undefined;
  [ScreenNames.Profile]: undefined;
  [ScreenNames.Tabs]: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ScreenNames.Tabs}
          component={Tabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ScreenNames.Home}
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ScreenNames.Discover}
          component={Discover}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ScreenNames.Upload}
          component={Upload}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ScreenNames.Notification}
          component={Notifcation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ScreenNames.Profile}
          component={Profile}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = StyleSheet.create({});
