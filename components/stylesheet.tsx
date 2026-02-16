import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Style() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.redBox, styles.shadow]}>
        <Text style={{ justifyContent: "center" }}>Red</Text>
      </View>
      <View style={[styles.box, styles.blueBox]}>
        <Text>Blue</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    padding: 60,
  },
  box: {
    width: 100,
    height: 100,
    paddingStart: 10,
    margin: 10,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  redBox: {
    backgroundColor: "red",
  },
  blueBox: {
    backgroundColor: "blue",
  },
  shadow: {
    elevation: 30,
    shadowColor: "#333333",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 5,
    shadowRadius: 10,
  },
});
