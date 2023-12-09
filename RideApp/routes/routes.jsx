import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SideNavBar from "../component/sideNavBar";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SideNavBar"
          options={{ headerShown: false }}
          component={SideNavBar}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
