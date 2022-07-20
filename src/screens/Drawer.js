import React from 'react';
import {Button, View, ImageBackground} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer,DefaultTheme} from '@react-navigation/native';
import {HomeScreen} from './HomeScreen';
import {SignInScreen} from './SignInScreen';
import {SignIn} from '../components/header/SignIn';
// import CustomDrawer from '../screens/CustomDrawer'
import DashBoard from '../screens/DashBoard';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgba(34,34,34,255)',
    background: 'rgba(34,34,34,255)',
    text: 'rgba(255,255,255)',
  },
};
const Drawer = createDrawerNavigator();

export default function DrawerStack() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Drawer.Navigator screenOptions={{ drawerStyle: { backgroundColor: 'rgba(34,34,34,255)'}}} >
        <Drawer.Screen screenOptions={{}} name="HomeScreen" component={HomeScreen} />
        <Drawer.Screen name="SignInScreen" component={SignInScreen} />
        <Drawer.Screen name="SignIn" component={SignIn} />
        <Drawer.Screen name="DashBoard" component={DashBoard} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
