import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import * as ScreenOrientation from "expo-screen-orientation";
export default function App() {
  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <View style={styles.tictactoeHorizon}>
          <Text style={styles.tictactoeText}>O</Text>
          <Text style={styles.tictactoeText}>O</Text>
          <Text style={styles.tictactoeText}>X</Text>
        </View>
        <View style={styles.tictactoeHorizon}>
          <Text style={styles.tictactoeText}>X</Text>
          <Text style={styles.tictactoeText}>X</Text>
          <Text style={styles.tictactoeText}>O</Text>
        </View>
        <View style={styles.tictactoeHorizon}>
          <Text style={styles.tictactoeText}>O</Text>
          <Text style={styles.tictactoeText}>X</Text>
          <Text style={styles.tictactoeText}>X</Text>
        </View>
        <View></View>
        <View></View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    height: "30%",
    width: "100%",
    display: "flex",
  },

  tictactoeHorizon: {
    width: "70%",
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  tictactoeText: {
    flex: 1,
    height: "100%",
    borderColor: "black",
    borderWidth: 2,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    
  },

  safeView: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
});
