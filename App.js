import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./src/navigator/AuthNavigatot";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#804D93",
    alignItems: "center",
    justifyContent: "center",
  },
});
