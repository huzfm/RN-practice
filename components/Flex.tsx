import { StyleSheet, Text, View, Platform } from "react-native";
import React from "react";
import Box from "./Box";

export default function Flex() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "red" }}>Box 1</Box>
      <Box style={{ backgroundColor: "blue" }}>Box 2</Box>
      <Box style={{ backgroundColor: "green" }}>Box 3</Box>
      {/* <Box style={{ backgroundColor: "orange" }}>Box 4</Box>
      <Box style={{ backgroundColor: "black" }}>Box 5</Box>
      <Box style={{ backgroundColor: "lightgreen" }}>Box 6</Box>
      <Box style={{ backgroundColor: "yellow" }}>Box 7</Box> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    borderColor: "maroon",
    borderWidth: 5,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
