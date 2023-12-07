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
    latitude: 10.0474869,
    longitude: 79.91138573,
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
            <Marker title="Yor are here" coordinate={position} />
          </MapView>
          <View style={styles.topBar}>
            <TopBar />
          </View>
          <Button title="Hi popup" onPress={popupHandler} />
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={0}
            snapPoints={["50%", "90%"]}
          >
            <View>
              <Text>Hi Popup Box</Text>
            </View>
          </BottomSheetModal>
          <Text>{position.latitude}</Text>
          <Text>{position.longitude}</Text>
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
});
