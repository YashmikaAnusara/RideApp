import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function TopBar() {
  return (
    <View style={styles.topBraContainer}>
      <View style={styles.topBraCard}>
        <Text>Test</Text>
      </View>
      <TouchableOpacity style={styles.topBraCard}>
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
