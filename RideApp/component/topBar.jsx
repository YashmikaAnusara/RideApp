import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function TopBar() {
  return (
    <View style={styles.display}>
      <Text>TopBar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  topBraContainer: {
    display: "flex",
  },
});
