import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './src/Navigation/AuthStack';
import AppStack from './src/Navigation/AppStack';
const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        options={{
          headerShown:false
        }}
          name="AppStack"
          component={AppStack}
        />
        <Stack.Screen name="AuthStack" component={AuthStack}  options={{
          headerShown:false
        }} />
        {/* <AppStack /> */}
        {/* <AuthStack /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
