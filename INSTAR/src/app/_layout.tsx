import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthProvider } from "@/context/AuthContext";
import { SavedPinsProvider } from "@/context/SavedPins";
import "../../global.css";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <SavedPinsProvider>
          <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: "#fff" } }} />
        </SavedPinsProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
