import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function CarDetailsTopBar() {
  return (
    <View style={styles.CarDetailsTopBraContainer}>
      <TouchableOpacity style={styles.CarDetailsTopBraCard}>
        <Image
          source={require("../assets/back.png")}
          resizeMode="contain"
          style={{
            width: 20,
            height: 20,
            tintColor: "#222222",
            right: 2,
          }}
        />
      </TouchableOpacity>

      <Text style={styles.CarDetailsTopic}>Car Info</Text>
      <TouchableOpacity style={styles.CarDetailsTopBraCard}>
        <Image
          source={require("../assets/options.png")}
          resizeMode="contain"
          style={{
            width: 20,
            height: 20,
            tintColor: "#222222",
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  CarDetailsTopBraContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "94%",
    height: 60,
    // backgroundColor: "red",
    left: 10,
    right: 10,
  },
  CarDetailsTopBraCard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 45,
    width: 45,
    backgroundColor: "#ebebeb",
    borderRadius: 100,
  },
  CarDetailsTopic: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
