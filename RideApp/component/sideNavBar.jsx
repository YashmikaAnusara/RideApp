import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Dashboard from "../pages/Dashboard";
import Test1 from "../pages/Test1";
import NavBar from "./navBar";

export default function SideNavBar() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Dashboard" component={NavBar} />
      <Drawer.Screen name="Test1123" component={Test1} />
    </Drawer.Navigator>
  );
}
