import React from 'react'
import {View, Text} from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/HomeScreen';
import {LogIn} from '../screens/LogIn';
import { SignUp } from '../components/header/SignIn';
import DashBoard from '../screens/DashBoard';



const Stack = createNativeStackNavigator();
const AuthStack =() => {
    return (
        <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} 
         />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="DashBoard" component={DashBoard} />
      </Stack.Navigator>
    )
}


export default AuthStack;