import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import MapView, { Marker, AnimatedRegion } from "react-native-maps";
import mapColor from "../utilities/mapColor";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import TopBar from "../component/topBar";
import * as Location from "expo-location";

export default function Dashboard() {
  const bottomSheetModalRef = useRef(null);
  const [position, setPosition] = useState({
    latitude: 8.7591803,
    longitude: 80.5193594,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const popupHandler = () => {
    bottomSheetModalRef.current.present();
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setPosition({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, [position]);

  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <View style={styles.bodyContainer}>
          <MapView
            style={styles.MapView}
            initialRegion={position}
            customMapStyle={mapColor}
            showsTraffic={true}
            zoomEnabled={true}
          >
            <Marker
              coordinate={position}
              image={require("../assets/carMarker.png")}
              onPress={popupHandler}
            />
          </MapView>
          <View style={styles.topBar}>
            <TopBar />
          </View>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={0}
            snapPoints={["55%", "90%"]}
          >
            <View>
              <Text style={styles.bottomSheetTopic}>Select a car</Text>
              <View style={styles.bottomNavBar}>
                {/* --------------------------------------- */}
                <View style={styles.bottomScrollbarField}>
                  <Text style={styles.fieldText}>Automatic</Text>
                </View>
                {/* --------------------------------------- */}
                <View style={styles.bottomScrollbarField}>
                  <Text style={styles.fieldText}>Electric</Text>
                </View>
                {/* --------------------------------------- */}
              </View>
            </View>
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    width: "100$",
    height: "100%",
  },
  MapView: {
    width: "100%",
    height: "50%",
  },
  topBar: {
    display: "flex",
    position: "absolute",
    top: 40,
  },
  bottomSheetTopic: {
    left: 10,
    fontWeight: "bold",
    fontSize: 20,
  },
  bottomNavBar: {
    display: "flex",
    flexDirection: "row",
    // backgroundColor: "red",
    width: "100%",
    top: 20,
    left: 10,
    gap: 10,
  },
  bottomScrollbarField: {
    backgroundColor: "#121a2d",
    width: 130,
    height: 50,
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  fieldText: {
    color: "#ffffff",
    // fontWeight: "bold",
  },
});
