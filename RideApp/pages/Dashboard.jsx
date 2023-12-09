import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import mapColor from "../utilities/mapColor";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
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
          />
        </MapView>
        <View style={styles.topBar}>
          <TopBar />
        </View>
        <BottomSheet
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={["55%", "90%"]}
        >
          <BottomSheetScrollView>
            <View style={styles.bottomSheetWrapper}>
              <Text style={styles.bottomSheetTopic}>Select a car</Text>
              <View style={styles.bottomNavBar}>
                {/* --------------------------------------- */}
                <TouchableOpacity style={styles.bottomScrollbarField}>
                  <Text style={styles.fieldText}>Automatic</Text>
                </TouchableOpacity>
                {/* --------------------------------------- */}
                <TouchableOpacity style={styles.bottomScrollbarField_2}>
                  <Text style={styles.fieldText_2}>Electric</Text>
                </TouchableOpacity>
                {/* --------------------------------------- */}
                <TouchableOpacity style={styles.bottomScrollbarField_2}>
                  <Text style={styles.fieldText_2}>Manual</Text>
                </TouchableOpacity>
              </View>
              <View>
                <View style={styles.fieldCardWrapper}>
                  {/* ------------------------------------------------ */}
                  <TouchableOpacity style={styles.fieldCard}>
                    <Text style={styles.fieldTopic}>283 KW/pa</Text>
                    <Image
                      source={require("../assets/SideView.png")}
                      resizeMode="contain"
                      style={{
                        width: "90%",
                        marginLeft: 15,
                        bottom: 25,
                      }}
                    />
                    <Text style={styles.fieldCarName}>BMW 740Le</Text>
                  </TouchableOpacity>
                  {/* ------------------------------------------------ */}
                  <TouchableOpacity style={styles.fieldCard}>
                    <Text style={styles.fieldTopic}>283 KW/pa</Text>
                    <Image
                      source={require("../assets/SideView2.png")}
                      resizeMode="contain"
                      style={{
                        width: "90%",
                        marginLeft: 15,
                        bottom: 25,
                      }}
                    />
                    <Text style={styles.fieldCarName}>Mercedes-Benz S500</Text>
                  </TouchableOpacity>
                  {/* ------------------------------------------------ */}
                  <TouchableOpacity style={styles.fieldCard}>
                    <Text style={styles.fieldTopic}>283 KW/pa</Text>
                    <Image
                      source={require("../assets/SideView3.png")}
                      resizeMode="contain"
                      style={{
                        width: "90%",
                        marginLeft: 15,
                        bottom: 25,
                      }}
                    />
                    <Text style={styles.fieldCarName}>Tesla Model S</Text>
                  </TouchableOpacity>
                  {/* ------------------------------------------------ */}
                  <View style={styles.bottomFooter}></View>
                </View>
              </View>
            </View>
          </BottomSheetScrollView>
        </BottomSheet>
      </View>
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
  bottomScrollbarField_2: {
    backgroundColor: "#ffffff",
    borderColor: "#cecece",
    borderWidth: 2,
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
  fieldText_2: {
    color: "#000000",
    // fontWeight: "bold",
  },
  fieldCardWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  fieldCard: {
    width: "92%",
    display: "flex",
    flexDirection: "column",
    top: 40,
    backgroundColor: "#f3f3f3",
    // backgroundColor: "red",
    left: "3%",
    height: 220,
    borderRadius: 20,
  },
  fieldTopic: {
    paddingTop: 25,
    paddingLeft: 15,
    fontWeight: "bold",
    fontSize: 20,
  },
  fieldCarName: {
    bottom: 50,
    paddingLeft: 15,
    fontWeight: "bold",
    color: "#bcbcbc",
  },
  bottomFooter: {
    height: 130,
  },
});
