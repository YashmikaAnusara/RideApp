import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavBar from '../component/navBar';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="NavBar"
          options={{headerShown: false}}
          component={NavBar}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
