import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import DashBoard from '../screens/DashBoard';
import {LogIn} from '../screens/LogIn';

import {SignUp} from '../components/header/SignIn';
import CustomDrawer from '../screens/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'Poppins-Light',
          fontSize: 16,
        },
        drawerActiveBackgroundColor: '#2c5825',
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: '#222',
      }}>
      <Drawer.Screen
        name="DashBoard"
        component={DashBoard}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={20} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="LogIn"
        component={LogIn}
        options={{
          drawerIcon: ({color}) => (
            <SimpleLineIcons name="login" size={20} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="SignUp"
        component={SignUp}
        options={{
          drawerIcon: ({color}) => (
            <Octicons name="sign-in" size={20} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
