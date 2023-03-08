import { useState } from "react";
import Background from "../src/Background";
import Derana from "../src/Derana";
import Btn from "../src/Btn";

import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  ImageBackground,
  Image,
} from "react-native";

export default function Login() {
  return (
    <View style={{ marginHorizontal: 0, marginVertical: 0 }}>
      <Background>
        <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
          <Btn
            bgColor= "yellow"
            textColor="white"
            btnLabel="Login"
            // Press={() => props.navigation.navigate("Login")}
          />
        </View>
        <View style={styles.whiteimage2}>
          <Image
            style={{ width: 380, height: 120 }}
            source={require("../src/assets/wart.png")}
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 21,
              textAlign: "right",
              top: 0,
              position: "relative",
            }}
          >
            From Sri Lanka
          </Text>
        </View>
        <View style={styles.deranatext}>
          <Derana></Derana>
        </View>

        <View style={styles.whiteimage1}>
          <Image
            style={{ width: 350, height: 250, resizeMode: "contain" }}
            source={require("../src/assets/Dboy_whitebg.png")}
          />
        </View>
        <View style={styles.zincatlogoimage}>
          <Image
            style={{ width: 400, height: 100, resizeMode: "contain" }}
            source={require("../src/assets/zincat_logo.png")}
          />
        </View>
      </Background>
    </View>
  );
}

const styles = StyleSheet.create({
  heading1: {
    fontSize: 40,
    paddingBottom: 15,
  },

  whiteimage1: {
    alignItems: "center",
    paddingTop: 100,
  },

  whiteimage2: {
    alignItems: "center",
    position: "absolute",
    top: 70,
    marginBottom: 40,
  },
  deranatext: {
    alignItems: "center",
    position: "absolute",
    top: 50,
    marginBottom: 40,
  },
  zincatlogoimage: {
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
});
