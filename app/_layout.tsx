import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerStyle: { backgroundColor: "black" },
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
