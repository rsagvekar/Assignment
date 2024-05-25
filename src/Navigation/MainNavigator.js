import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import DashboardScreen from '../screens/DashboardScreen';
import ContactFormScreen from '../screens/ContactFormScreen';
import Homescreen from '../screens/Homescreen';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';
import Users from '../screens/Users';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import Login from '../screens/Login';
import NewsDetails from '../screens/NewsDetails';

const Stack = createNativeStackNavigator();

const Navigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="SplashScreen" component={SplashScreen} />
    <Stack.Screen
      name="Login"
      component={Login}
      options={{gestureEnabled: false}}
    />
    <Stack.Screen
      name="Dashboard"
      component={DashboardScreen}
      options={{gestureEnabled: false}}
    />
    <Stack.Screen name="Home" component={Homescreen} />
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Settings" component={Settings} />
    <Stack.Screen name="UserSignupList" component={Users} />
    <Stack.Screen name="ContactForm" component={ContactFormScreen} />
    <Stack.Screen name="NewsDetails" component={NewsDetails} />
  </Stack.Navigator>
);

const MainNavigator = () => (
  <NavigationContainer>
    <Navigator />
  </NavigationContainer>
);

export default MainNavigator;
