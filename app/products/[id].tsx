import { StyleSheet, Text, View } from "react-native";
import React, { use } from "react";
import { useLocalSearchParams } from "expo-router";

export default function Products() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>Details about product {id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
