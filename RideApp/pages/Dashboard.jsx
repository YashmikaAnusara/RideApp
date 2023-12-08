import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import MapView, { Marker, AnimatedRegion } from "react-native-maps";
import mapColor from "../utilities/mapColor";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  BottomSheetScrollView,
  BottomSheetModalProvider,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import TopBar from "../component/topBar";
import * as Location from "expo-location";

export default function Dashboard() {
  const bottomSheetModalRef = useRef(null);
  const [position, setPosition] = useState({
    latitude: 7.0457505,
    longitude: 79.9134133,
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
            <View style={styles.bottomSheetWrapper}>
              <Text style={styles.bottomSheetTopic}>Select a car</Text>
              <View style={styles.bottomNavBar}>
                {/* --------------------------------------- */}
                <TouchableOpacity style={styles.bottomScrollbarField}>
                  <Text style={styles.fieldText}>Automatic</Text>
                </TouchableOpacity>
                {/* --------------------------------------- */}
                <TouchableOpacity style={styles.bottomScrollbarField}>
                  <Text style={styles.fieldText}>Electric</Text>
                </TouchableOpacity>
                {/* --------------------------------------- */}
                <TouchableOpacity style={styles.bottomScrollbarField}>
                  <Text style={styles.fieldText}>Manual</Text>
                </TouchableOpacity>
              </View>
              <View>
                <View style={styles.fieldCard}>
                  <Text>283 KW/pa</Text>
                  <Image
                    source={require("../assets/SideView.png")}
                    resizeMode="contain"
                    style={{
                      width: "90%",
                      marginLeft: 15,
                    }}
                  />
                </View>
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
  bottomSheetWrapper: {
    width: "98%",
    left: "2%",
    // backgroundColor: "red",
  },
  bottomSheetTopic: {
    fontWeight: "bold",
    fontSize: 20,
  },
  bottomNavBar: {
    display: "flex",
    flexDirection: "row",
    top: 20,
    gap: 5,
  },
  bottomScrollbarField: {
    backgroundColor: "#121a2d",
    width: "auto",
    height: 50,
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 30,
    paddingLeft: 30,
    paddingTop: 10,
    paddingBottom: 10,
  },
  fieldText: {
    color: "#ffffff",
    // fontWeight: "bold",
  },
  fieldCard: {
    width: "92%",
    display: "flex",
    flexDirection: "column",
    top: 40,
    backgroundColor: "#f3f3f3",
    // backgroundColor: "red",
    left: "3%",
    height: 250,
    borderRadius: 20,
  },
});
