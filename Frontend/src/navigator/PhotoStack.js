import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import CameraScreen from "../screens/CameraScreen";
import PictureViewScreen from "../screens/PictureViewScreen";
import { createStackNavigator } from "@react-navigation/stack";
import SendPictureScreen from "../screens/SendPictureScreen";
import TakeMoreScreen from "../screens/TakeMoreScreen";

const Stack = createStackNavigator();

const Photostack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="HomeScreen"
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CameraScreen" component={CameraScreen} />
      <Stack.Screen name="PictureViewScreen" component={PictureViewScreen} />
      <Stack.Screen name="SendPictureScreen" component={SendPictureScreen} />
      <Stack.Screen name="TakeMoreScreen" component={TakeMoreScreen} />
    </Stack.Navigator>
  );
};

export default Photostack;

const styles = StyleSheet.create({});
