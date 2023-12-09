import { View, Text, StyleSheet } from "react-native";
import React from "react";
import TopBar from "../component/topBar";

export default function Test1() {
  return (
    <View style={styles.bodyContainer}>
      <View style={styles.topBar}>
        <TopBar />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  bodyContainer: {
    width: "100$",
    height: "100%",
  },
  topBar: {
    display: "flex",
    position: "absolute",
    top: 40,
  },
});
