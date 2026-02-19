import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function ProductList() {
  return (
    <View style={styles.container}>
      <Text>ProductList</Text>
      <Link href={{ pathname: "/products/[id]", params: { id: "1" } }}>
        Product 1
      </Link>
      <Link href={{ pathname: "/products/[id]", params: { id: "2" } }}>
        Product 2
      </Link>
      <Link href={{ pathname: "/products/[id]", params: { id: "3" } }}>
        Product 3
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
});
