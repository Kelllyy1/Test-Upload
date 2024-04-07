import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthLoginView from './UserAuthentication/Login/AuthLoginView';
import AuthSignUpView from './UserAuthentication/SignUp/AuthSignUpView';
import HomeTabNavigator from './HomeTabNavigator'; // Import the tab navigator

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={AuthLoginView}/>
        <Stack.Screen name="SignUp" component={AuthSignUpView}/>
        <Stack.Screen name="Home" component={HomeTabNavigator}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
