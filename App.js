import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CameraTest from "./Pages/CameraTest.js";
import Login from "./Pages/Login.js";
import SensorsTest from "./Pages/SensorsTest.js";

export default function App() {
  return (
    <View style={styles.container}>
      <CameraTest />
      <SensorsTest />
      {/* <Login /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aaa",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    minHeight: "100vh",
  },
});
