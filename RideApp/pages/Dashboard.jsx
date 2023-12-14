import React, { useState, useEffect, useRef, useCallback } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import mapColor from "../utilities/mapColor";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetBackdrop,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import TopBar from "../component/topBar";
import * as Location from "expo-location";
import CarDetailsTopBar from "../component/CarDetailsTopBar";

export default function Dashboard() {
  const bottomSheetModalRef = useRef(null);
  const [position, setPosition] = useState({
    latitude: 7.0457505,
    longitude: 79.9134133,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [carBrand, setCarBrand] = useState("");

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

  const renderBackdropCars = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={0}
        appearsOnIndex={1}
      />
    ),
    []
  );
  const renderBackdropCarDetails = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={1}
      />
    ),
    []
  );
  const handlePresentModalPress = (brand) => {
    bottomSheetModalRef.current?.present();
    setCarBrand(brand);
  };
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
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
          index={0}
          snapPoints={["55%", "90%"]}
          backdropComponent={renderBackdropCars}
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
                  <TouchableOpacity
                    style={styles.fieldCard}
                    onPress={() => handlePresentModalPress("BMW")}
                  >
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
                  <TouchableOpacity
                    style={styles.fieldCard}
                    onPress={() => handlePresentModalPress("Benz")}
                  >
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
                  <TouchableOpacity
                    style={styles.fieldCard}
                    onPress={() => handlePresentModalPress("Tesla")}
                  >
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
        {/* ------------------------------------------------------ */}
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={["90%"]}
          backdropComponent={renderBackdropCarDetails}
        >
          <BottomSheetScrollView>
            <View style={styles.CarDetailsWrapper}>
              <CarDetailsTopBar />
              {carBrand == "BMW" ? (
                <View style={styles.CarDetailsContainer}>
                  <View style={styles.CarDetailsSide}>
                    <Text style={styles.CarCommonTopic}>Exclusive</Text>
                    <Text style={styles.CarBrandTopic}>BMW</Text>
                    <Text style={styles.CarModelTopic}>740Le</Text>
                    <View style={styles.CarDetails}>
                      {/* ---------------------------------------- */}
                      <View style={styles.DetailsWrapper}>
                        <View style={styles.DetailsCard}>
                          <Image
                            source={require("../assets/oil.png")}
                            resizeMode="contain"
                            style={{
                              width: 30,
                            }}
                          />
                        </View>
                        <View>
                          <Text style={styles.DetailsCardMainText}>506 KM</Text>
                          <Text style={styles.DetailsCardSubText}>Fuel</Text>
                        </View>
                      </View>
                      {/* --------------------------------------------- */}
                      <View style={styles.DetailsWrapper}>
                        <View style={styles.DetailsCard}>
                          <Image
                            source={require("../assets/meter.png")}
                            resizeMode="contain"
                            style={{
                              width: 30,
                            }}
                          />
                        </View>
                        <View>
                          <Text style={styles.DetailsCardMainText}>
                            250 KM/H
                          </Text>
                          <Text style={styles.DetailsCardSubText}>
                            Top Speed
                          </Text>
                        </View>
                      </View>
                      {/* --------------------------------------------- */}
                      <View style={styles.DetailsWrapper}>
                        <View style={styles.DetailsCard}>
                          <Image
                            source={require("../assets/engine.png")}
                            resizeMode="contain"
                            style={{
                              width: 30,
                            }}
                          />
                        </View>
                        <View>
                          <Text style={styles.DetailsCardMainText}>
                            2998 cc
                          </Text>
                          <Text style={styles.DetailsCardSubText}>
                            Engine Capacity
                          </Text>
                        </View>
                      </View>
                      {/* --------------------------------------------- */}
                      <View style={styles.DetailsWrapper}>
                        <View style={styles.DetailsCard}>
                          <Image
                            source={require("../assets/plate.png")}
                            resizeMode="contain"
                            style={{
                              width: 30,
                            }}
                          />
                        </View>
                        <View>
                          <Text style={styles.DetailsCardMainText}>
                            CBE -3465
                          </Text>
                          <Text style={styles.DetailsCardSubText}>
                            Vehicle Number
                          </Text>
                        </View>
                      </View>
                      {/* --------------------------------------------- */}
                    </View>
                    <TouchableOpacity style={styles.DriverWrapper}>
                      <View style={styles.Driver}>
                        <Image
                          source={require("../assets/driver.png")}
                          resizeMode="contain"
                          style={{
                            width: 40,
                            left: 10,
                          }}
                        />
                      </View>
                      <View style={styles.DriverName}>
                        <Text style={styles.DriverNameName}>Thivanka Fox</Text>
                        <Text style={styles.DriverNameText}>Car Driver</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.CarImageSide}>
                    <Image
                      source={require("../assets/FrontView.png")}
                      resizeMode="contain"
                      style={{
                        width: "190%",
                      }}
                    />
                  </View>
                </View>
              ) : carBrand == "BMW" ? (
                <View style={styles.CarDetailsContainer}>
                  <View style={styles.CarDetailsSide}>
                    <Text style={styles.CarCommonTopic}>Exclusive</Text>
                    <Text style={styles.CarBrandTopic}>BMW</Text>
                    <Text style={styles.CarModelTopic}>740Le</Text>
                    <View style={styles.CarDetails}>
                      {/* ---------------------------------------- */}
                      <View style={styles.DetailsWrapper}>
                        <View style={styles.DetailsCard}>
                          <Image
                            source={require("../assets/oil.png")}
                            resizeMode="contain"
                            style={{
                              width: 30,
                            }}
                          />
                        </View>
                        <View>
                          <Text style={styles.DetailsCardMainText}>506 KM</Text>
                          <Text style={styles.DetailsCardSubText}>Fuel</Text>
                        </View>
                      </View>
                      {/* --------------------------------------------- */}
                      <View style={styles.DetailsWrapper}>
                        <View style={styles.DetailsCard}>
                          <Image
                            source={require("../assets/meter.png")}
                            resizeMode="contain"
                            style={{
                              width: 30,
                            }}
                          />
                        </View>
                        <View>
                          <Text style={styles.DetailsCardMainText}>
                            250 KM/H
                          </Text>
                          <Text style={styles.DetailsCardSubText}>
                            Top Speed
                          </Text>
                        </View>
                      </View>
                      {/* --------------------------------------------- */}
                      <View style={styles.DetailsWrapper}>
                        <View style={styles.DetailsCard}>
                          <Image
                            source={require("../assets/engine.png")}
                            resizeMode="contain"
                            style={{
                              width: 30,
                            }}
                          />
                        </View>
                        <View>
                          <Text style={styles.DetailsCardMainText}>
                            2998 cc
                          </Text>
                          <Text style={styles.DetailsCardSubText}>
                            Engine Capacity
                          </Text>
                        </View>
                      </View>
                      {/* --------------------------------------------- */}
                      <View style={styles.DetailsWrapper}>
                        <View style={styles.DetailsCard}>
                          <Image
                            source={require("../assets/plate.png")}
                            resizeMode="contain"
                            style={{
                              width: 30,
                            }}
                          />
                        </View>
                        <View>
                          <Text style={styles.DetailsCardMainText}>
                            CBE -3465
                          </Text>
                          <Text style={styles.DetailsCardSubText}>
                            Vehicle Number
                          </Text>
                        </View>
                      </View>
                      {/* --------------------------------------------- */}
                    </View>
                    <TouchableOpacity style={styles.DriverWrapper}>
                      <View style={styles.Driver}>
                        <Image
                          source={require("../assets/driver.png")}
                          resizeMode="contain"
                          style={{
                            width: 40,
                            left: 10,
                          }}
                        />
                      </View>
                      <View style={styles.DriverName}>
                        <Text style={styles.DriverNameName}>Thivanka Fox</Text>
                        <Text style={styles.DriverNameText}>Car Driver</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.CarImageSide}>
                    <Image
                      source={require("../assets/FrontView.png")}
                      resizeMode="contain"
                      style={{
                        width: "190%",
                      }}
                    />
                  </View>
                </View>
              ) : carBrand == "BMW" ? (
                <View style={styles.CarDetailsContainer}>
                  <View style={styles.CarDetailsSide}>
                    <Text style={styles.CarCommonTopic}>Exclusive</Text>
                    <Text style={styles.CarBrandTopic}>BMW</Text>
                    <Text style={styles.CarModelTopic}>740Le</Text>
                    <View style={styles.CarDetails}>
                      {/* ---------------------------------------- */}
                      <View style={styles.DetailsWrapper}>
                        <View style={styles.DetailsCard}>
                          <Image
                            source={require("../assets/oil.png")}
                            resizeMode="contain"
                            style={{
                              width: 30,
                            }}
                          />
                        </View>
                        <View>
                          <Text style={styles.DetailsCardMainText}>506 KM</Text>
                          <Text style={styles.DetailsCardSubText}>Fuel</Text>
                        </View>
                      </View>
                      {/* --------------------------------------------- */}
                      <View style={styles.DetailsWrapper}>
                        <View style={styles.DetailsCard}>
                          <Image
                            source={require("../assets/meter.png")}
                            resizeMode="contain"
                            style={{
                              width: 30,
                            }}
                          />
                        </View>
                        <View>
                          <Text style={styles.DetailsCardMainText}>
                            250 KM/H
                          </Text>
                          <Text style={styles.DetailsCardSubText}>
                            Top Speed
                          </Text>
                        </View>
                      </View>
                      {/* --------------------------------------------- */}
                      <View style={styles.DetailsWrapper}>
                        <View style={styles.DetailsCard}>
                          <Image
                            source={require("../assets/engine.png")}
                            resizeMode="contain"
                            style={{
                              width: 30,
                            }}
                          />
                        </View>
                        <View>
                          <Text style={styles.DetailsCardMainText}>
                            2998 cc
                          </Text>
                          <Text style={styles.DetailsCardSubText}>
                            Engine Capacity
                          </Text>
                        </View>
                      </View>
                      {/* --------------------------------------------- */}
                      <View style={styles.DetailsWrapper}>
                        <View style={styles.DetailsCard}>
                          <Image
                            source={require("../assets/plate.png")}
                            resizeMode="contain"
                            style={{
                              width: 30,
                            }}
                          />
                        </View>
                        <View>
                          <Text style={styles.DetailsCardMainText}>
                            CBE -3465
                          </Text>
                          <Text style={styles.DetailsCardSubText}>
                            Vehicle Number
                          </Text>
                        </View>
                      </View>
                      {/* --------------------------------------------- */}
                    </View>
                    <TouchableOpacity style={styles.DriverWrapper}>
                      <View style={styles.Driver}>
                        <Image
                          source={require("../assets/driver.png")}
                          resizeMode="contain"
                          style={{
                            width: 40,
                            left: 10,
                          }}
                        />
                      </View>
                      <View style={styles.DriverName}>
                        <Text style={styles.DriverNameName}>Thivanka Fox</Text>
                        <Text style={styles.DriverNameText}>Car Driver</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.CarImageSide}>
                    <Image
                      source={require("../assets/FrontView.png")}
                      resizeMode="contain"
                      style={{
                        width: "190%",
                      }}
                    />
                  </View>
                </View>
              ) : null}
            </View>
          </BottomSheetScrollView>
        </BottomSheetModal>
        {/* ------------------------------------------------------ */}
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
  CarDetailsWrapper: {
    width: "100%",
    height: 650,
    display: "flex",
    flexDirection: "column",
  },
  CarDetailsContainer: {
    display: "flex",
    flexDirection: "row",
    left: 10,
    // top: 30,
    width: "100%",
    // backgroundColor: "red",
  },
  CarDetailsSide: {
    width: "50%",
    top: 10,
    // backgroundColor: "red",
  },
  CarDetails: {
    display: "flex",
    flexDirection: "column",
    gap: 40,
  },
  DetailsWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    // backgroundColor: "red",
  },
  DetailsCard: {
    width: 50,
    height: 50,
    backgroundColor: "#f1f1f1",
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  DetailsCardMainText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  DetailsCardSubText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#c6c6c6",
  },
  DriverWrapper: {
    top: 40,
    backgroundColor: "#f5f5f5",
    width: "90%",
    borderRadius: 50,
    height: 50,
    display: "flex",
    flexDirection: "row",
  },
  Driver: {
    display: "flex",
    justifyContent: "center",
    height: 50,
    width: "32%",
    // backgroundColor:"red"
  },
  DriverName: {
    display: "flex",
    justifyContent: "center",
    height: 50,
    width: "80%",
    // backgroundColor:"red"
  },
  DriverNameName: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#383838",
  },
  DriverNameText: {
    color: "#a9a9a9",
  },
  CarImageSide: {
    width: "50%",
    // backgroundColor: "red",
    display: "flex",
    justifyContent: "center",
    top: 10,
    flexDirection: "column",
  },
  CarCommonTopic: {
    color: "#a6a6a6",
    fontSize: 20,
  },
  CarBrandTopic: {
    color: "#282b30",
    fontSize: 45,
    fontWeight: "bold",
  },
  CarModelTopic: {
    color: "#282b30",
    fontSize: 45,
    fontWeight: "bold",
    bottom: 15,
  },
});
