import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Dashboard from "../pages/Dashboard";
import Test1 from "../pages/Test1";
import NavBar from "./navBar";

export default function SideNavBar() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          borderBottomRightRadius: 30,
          borderTopRightRadius: 30,
        },
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Home" component={NavBar} />
      <Drawer.Screen name="Test1" component={Test1} />
    </Drawer.Navigator>
  );
}
