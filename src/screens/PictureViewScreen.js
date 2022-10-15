import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Pressable,
  Image,
  Button,
} from "react-native";
import Style from "../../Global/GlobalStyle";
import { useNavigation } from "@react-navigation/native";
import SendPictureScreen from "./SendPictureScreen";
// import img from "../../assets/ocean.jpg";
import img from "../../assets/images/imageLatest.jpg";

const PictureViewScreen = () => {
  const navigation = useNavigation();
  const GoToSendPicture = () => {
    navigation.navigate("SendPictureScreen", { SendPictureScreen });
  };
  return (
    <SafeAreaView style={Style.container}>
      <Pressable>
        <View>
          {/* <Image source={img} style={Style.featureImage} /> */}
          <Image source={img} style={Style.featureImage} />
        </View>
        <Pressable onPress={GoToSendPicture} style={Style.button}>
          <Text style={Style.buttonText}>Skriv Ut</Text>
        </Pressable>
        <Pressable onPress={GoToSendPicture} style={Style.button}>
          <Text style={Style.buttonText}>Maila Bilden</Text>
        </Pressable>
      </Pressable>
    </SafeAreaView>
  );
};

export default PictureViewScreen;
