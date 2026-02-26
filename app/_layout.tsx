import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerStyle: { backgroundColor: "red" },
    }}>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerTintColor: "black",
          headerTitleStyle: { fontWeight: "semibold" },
        }}
      />
      <Stack.Screen
        name="about"
        options={{
          title: "About",
          headerTintColor: "black",
          headerTitleStyle: { fontWeight: "semibold" },
        }}
      />
    </Stack>
  );
}
