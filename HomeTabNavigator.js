// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import React, { Component } from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';

import HomePage from './Pages/home';
import SettingsPage from './Pages/settings';
import CalendarPage from './Pages/calendar';
import AuthLoginView from './UserAuthentication/Login/AuthLoginView';
import AuthSignUpView from './UserAuthentication/SignUp/AuthSignUpView';

const Tab = createMaterialBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator labeled={false} barStyle={{ backgroundColor: 'white' }} activeColor="black" >
      <Tab.Screen name="Calendar" component={CalendarPage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar-month" color={"black"} size={26}/>
          ),
        }}/>
      <Tab.Screen name="Home" component={HomePage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={"black"} size={26}/>
          ),
        }}/>
      <Tab.Screen name="Settings" component={SettingsPage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-settings" color={"black"} size={26}/>
          ),
        }}/>
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
