import img from "@/assets/images/react-logo.png";
import {
  Image,
  Text,
  View,
  ScrollView,
  Button,
  Alert,
  Pressable,
} from "react-native";

export default function Home() {
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
          title="CLICK"
          onPress={() => Alert.alert("Hello from expo")}
          color="midnightblue"
        />
        <Pressable onLongPress={() => Alert.alert("Text pressed")}>
          <Text>Hello</Text>
        </Pressable>
      </View>
    </>
  );
}
