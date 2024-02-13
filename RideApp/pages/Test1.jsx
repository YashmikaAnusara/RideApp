import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import TopBar from "../component/topBar";
import Animated, {
  useSharedValue,
  withSpring,
  withRepeat,
  useAnimatedStyle,
} from "react-native-reanimated";

export default function Test1() {
  const name = useSharedValue(50);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: name.value }],
  }));

  useEffect(() => {
    name.value = withRepeat(withSpring(-name.value), -1, true);
  }, []);

  return (
    <View style={styles.bodyContainer}>
      <View style={styles.topBar}>
        <TopBar location={false} />
        <Animated.Text style={animatedStyles}>
          Yashmika Anusara Saparmadu
        </Animated.Text>
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
