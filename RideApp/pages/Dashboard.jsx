import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import MapView from "react-native-maps";
import mapColor from "../utilities/mapColor";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

export default function Dashboard() {
  const bottomSheetModalRef = useRef(null);
  const snapPoints = ["50%", "90%"];

  const popupHandler = () => {
    bottomSheetModalRef.current.present();
  };
  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <View style={styles.bodyContainer}>
          <MapView
            style={styles.MapView}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            customMapStyle={mapColor}
          />
          <Button title="Hi popup" onPress={popupHandler} />
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={0}
            snapPoints={snapPoints}
          >
            <View>
              <Text>Hi Popup Box</Text>
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
});
