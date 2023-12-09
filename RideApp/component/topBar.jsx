import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function TopBar({ location }) {
  const nav = useNavigation();
  return (
    <View style={styles.topBraContainer}>
      <View style={styles.topBraCard}>
        <TouchableOpacity
          style={styles.topBraCard}
          onPress={() => nav.openDrawer()}
        >
          <Image
            source={require("../assets/menu.png")}
            resizeMode="contain"
            style={{
              width: 25,
              height: 25,
              tintColor: "#222222",
            }}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          display: (location = true ? "flex" : null),
          justifyContent: "center",
          alignItems: "center",
          height: 55,
          width: 55,
          backgroundColor: "#ffffff",
          borderRadius: 100,
        }}
      >
        <Image
          source={require("../assets/gps.png")}
          resizeMode="contain"
          style={{
            width: 30,
            height: 30,
            tintColor: "#222222",
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  topBraContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "76%",
    height: 60,
    // backgroundColor: "red",
    left: 10,
    right: 10,
  },
  topBraCard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 55,
    width: 55,
    backgroundColor: "#ffffff",
    borderRadius: 100,
  },
});
