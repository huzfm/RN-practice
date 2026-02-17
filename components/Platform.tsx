import { StyleSheet, Text, View, Platform } from "react-native";
import React from "react";

export default function PlatformExample() {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>Platform</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#fff",
    padding: 20,
    borderWidth: 2,
    borderColor: "red",
    paddingTop: Platform.OS === "android" ? 200 : 50,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
});
