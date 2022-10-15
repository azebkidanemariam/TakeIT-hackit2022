import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Pressable,
  Image,
  Button,
  TextInput,
  ImageBackground,
} from "react-native";
import Style from "../../Global/GlobalStyle";
import { useNavigation } from "@react-navigation/native";
import TakeMoreScreen from "./TakeMoreScreen";
import img from "../../assets/ocean.jpg";

const SendPictureScreen = () => {
  const [text, onChangeText] = React.useState("Useless Text");
  const navigation = useNavigation();
  const GoToSendPicture = () => {
    navigation.navigate("TakeMoreScreen", { TakeMoreScreen });
  };
  return (
    <SafeAreaView style={Style.container}>
      <ImageBackground source={img} style={Style.containerOverlay}>
        <View style={Style.overlay}>
          <Text style={Style.textStyle}>My Account</Text>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoOVTmb0ILbDI6ggGhPKUkn3v4UKc2dNB-Kjng7aGM14UbvzKY",
            }}
            style={Style.avatarStyle}
          />
          <TextInput
            style={Style.input}
            onChangeText={onChangeText}
            value={text}
          />
          <Text style={Style.textStyle}> Jenifer Lawrance</Text>
          <Text style={Style.textStyle}> +14155552671</Text>
          <Pressable onPress={GoToSendPicture} style={Style.button}>
            <Text style={Style.buttonText}>Maila Bilden</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SendPictureScreen;
