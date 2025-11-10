import { PaperProvider } from 'react-native-paper';
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <PaperProvider>
      <Stack
        screenOptions={{
          title: 'TASK',
          statusBarAnimation: "fade",
          statusBarStyle: "light",
          headerShadowVisible: false,
          headerBlurEffect: "light",
          headerTitleAlign: "center",
          headerTintColor: "#333",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 24,
          },
          headerStyle: {
            backgroundColor: "#8be0b9",
          },
        }}
      />
    </PaperProvider>
  );
}
