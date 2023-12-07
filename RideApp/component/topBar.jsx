import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function TopBar() {
  return (
    <View style={styles.topBraContainer}>
      <Text>TopBar</Text>
      <Text>TopBar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  topBraContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "76.5%",
    backgroundColor: "red",
  },
});
