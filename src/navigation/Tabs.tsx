import {StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ScreenNames} from './ScreenNames';
import Home from '../views/home/Home';
import Notifcation from '../views/notification/Notifcation';
import Discover from '../views/discover/Discover';
import Upload from '../views/upload/Upload';
import Profile from '../views/profile/Profile';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator detachInactiveScreens>
      <Tab.Screen
        name={ScreenNames.HomeTab}
        component={Home}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={ScreenNames.DiscoverTab}
        component={Discover}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={ScreenNames.UploadTab}
        component={Upload}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={ScreenNames.NotificationTab}
        component={Notifcation}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={ScreenNames.ProfileTab}
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
