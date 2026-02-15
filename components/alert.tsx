import { lazy, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Button,
  StatusBar,
  View,
} from "react-native";
export default function Home() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
        <StatusBar backgroundColor="red" barStyle="dark-content" />
        <ActivityIndicator size="large" />

        <Button
          title="OK"
          onPress={() =>
            Alert.alert("Invalid", "abc", [
              {
                text: "cancel",
                onPress: () => console.log("cancel"),
              },
              {
                text: "ok",
                onPress: () => console.log("ok"),
              },
            ])
          }
        />
      </View>
    </>
  );
}
