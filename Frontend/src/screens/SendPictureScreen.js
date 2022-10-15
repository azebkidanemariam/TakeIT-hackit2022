import React from "react";
import { Text, View, SafeAreaView, StyleSheet, Pressable } from "react-native";
import Style from "../../Global/GlobalStyle";
import { useNavigation } from "@react-navigation/native";
import TakeMoreScreen from "./TakeMoreScreen";
const SendPictureScreen = () => {
  const navigation = useNavigation();
  const GoToMorePicture = () => {
    navigation.navigate("TakeMoreScreen", { TakeMoreScreen });
  };
  return (
    <SafeAreaView style={Style.container}>
      <Pressable onPress={GoToMorePicture}>
        <View>
          <Text>SendPictureScreen</Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

export default SendPictureScreen;
