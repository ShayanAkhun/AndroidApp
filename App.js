import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './src/Navigation/AuthStack';
import AppStack from './src/Navigation/AppStack';
import { HomeScreen } from './src/screens/HomeScreen';
const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen
        options={{
          headerShown:false
        }}
          name="AppStack"
          component={AppStack}
        />
        <Stack.Screen  options={{
          headerShown:false
        }} name="HomeScreen" component={HomeScreen} />

        <Stack.Screen name="AuthStack" component={AuthStack} options={{headerShown: false}}   />
        {/* <AppStack /> */}
        {/* <AuthStack /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
