import img from "@/assets/images/react-logo.png";
import { useState } from "react";
import {
  Image,
  Text,
  View,
  ScrollView,
  Button,
  Alert,
  Pressable,
  Modal,
} from "react-native";
export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: "plum",
          padding: 60,
        }}
      >
        <Button
          title="Open"
          onPress={() => setIsVisible(true)}
          color="midnightblue"
        />
        <Pressable onLongPress={() => Alert.alert("Text pressed")}>
          <Text>Hello</Text>
        </Pressable>
        <Modal
          visible={isVisible}
          onRequestClose={() => setIsVisible(false)}
          animationType="slide"
          presentationStyle="pageSheet" // only works on ios
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "red",
              padding: 60,
            }}
          >
            <Text>Hello from modal</Text>
            <Button
              title="Close"
              color="green"
              onPress={() => setIsVisible(false)}
            />
          </View>
        </Modal>
      </View>
    </>
  );
}
