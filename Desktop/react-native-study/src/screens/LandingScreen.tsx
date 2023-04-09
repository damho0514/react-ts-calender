import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Location from "expo-location";

const screenWidth = Dimensions.get("screen").width;
export default function LandingScreen() {
  const [errorMsg, setErrorMsg] = useState("");
  // const [address, setAddress] = useState()();
  return (
    <View style={styles.container}>
      <View style={styles.navigation} />
      <View style={styles.body}>
        <Image
          source={require("../images/delivery_icon.png")}
          style={styles.deliveryIcon}
        />
        <View style={styles.addressContainer}>
          <Text style={styles.addreessTitle}>Your Delivery Address</Text>
        </View>
        <Text style={styles.addreessTitle}>Waiting for Current Location</Text>
      </View>
      <View style={styles.footer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(244,242,242,1)",
  },
  navigation: {
    flex: 2,
  },

  body: {
    flex: 9,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
  },
  addressContainer: {
    width: screenWidth - 100,
    borderBottomColor: "red",
    borderBottomWidth: 0.5,
    padding: 5,
    marginBottom: 10,
    alignContent: "center",
  },
  footer: {
    flex: 1,
  },
  addreessTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#",
  },
  deliveryIcon: {
    width: 120,
    height: 120,
  },
});
