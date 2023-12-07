import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Dashboard from "../pages/Dashboard";
import Test1 from "../pages/Test1";

const Tab = createBottomTabNavigator();

export default function NavBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          display: "flex",
          position: "absolute",
          alignItems: "center",
          justifyContent: "space-around",
          bottom: 20,
          left: 90,
          right: 10,
          elevation: 0,
          borderRadius: 40,
          height: 80,
          ...styles.navBarShadow,
        },
      }}
    >
      <Tab.Screen
        name="Search"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#ffffff",
                width: 75,
                height: 75,
                borderRadius: 40,
                right: 75,
                ...styles.navBarShadow,
              }}
            >
              <Image
                source={require("../assets/search.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: "#222222",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: focused ? "#121a2d" : "#ffffff",
                width: 55,
                height: 55,
                borderRadius: 40,
                right: 40,
                shadowColor: focused ? "#7F5DF0" : "",
                shadowOffset: focused
                  ? {
                      width: 0,
                      height: 10,
                    }
                  : "",
                shadowOpacity: focused ? 0.25 : 0,
                shadowRadius: focused ? 3.5 : 0,
                elevation: focused ? 4 : 0,
              }}
            >
              <Image
                source={require("../assets/home.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#ffffff" : "#b3b1b1",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Test1"
        component={Test1}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: focused ? "#121a2d" : "#ffffff",
                width: 55,
                height: 55,
                borderRadius: 40,
                right: 35,
                shadowColor: focused ? "#7F5DF0" : "",
                shadowOffset: focused
                  ? {
                      width: 0,
                      height: 10,
                    }
                  : "",
                shadowOpacity: focused ? 0.25 : 0,
                shadowRadius: focused ? 3.5 : 0,
                elevation: focused ? 4 : 0,
              }}
            >
              <Image
                source={require("../assets/car.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#ffffff" : "#b3b1b1",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Test3"
        component={Test1}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: focused ? "#121a2d" : "#ffffff",
                width: 55,
                height: 55,
                borderRadius: 40,
                right: 25,
                shadowColor: focused ? "#7F5DF0" : "",
                shadowOffset: focused
                  ? {
                      width: 0,
                      height: 10,
                    }
                  : "",
                shadowOpacity: focused ? 0.25 : 0,
                shadowRadius: focused ? 3.5 : 0,
                elevation: focused ? 4 : 0,
              }}
            >
              <Image
                source={require("../assets/favorite.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#ffffff" : "#b3b1b1",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Test4"
        component={Test1}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: focused ? "#121a2d" : "#ffffff",
                width: 55,
                height: 55,
                borderRadius: 40,
                right: 15,
                shadowColor: focused ? "#7F5DF0" : "",
                shadowOffset: focused
                  ? {
                      width: 0,
                      height: 10,
                    }
                  : "",
                shadowOpacity: focused ? 0.25 : 0,
                shadowRadius: focused ? 3.5 : 0,
                elevation: focused ? 4 : 0,
              }}
            >
              <Image
                source={require("../assets/user.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#ffffff" : "#b3b1b1",
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  navBarShadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 4,
  },
});
